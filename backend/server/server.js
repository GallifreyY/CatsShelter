const fs = require('fs');
const express = require('express');
const { ApolloServer, UserInputError } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost/catshelter';

// Atlas URL  - replace UUU with user, PPP with password, XXX with hostname
// const url = 'mongodb+srv://UUU:PPP@cluster0-XXX.mongodb.net/applicationtracker?retryWrites=true';

// mLab URL - replace UUU with user, PPP with password, XXX with hostname
// const url = 'mongodb://UUU:PPP@XXX.mlab.com:33533/applicationtracker';

let db;

let aboutMessage = "Application Tracker API v1.0";

const GraphQLDate = new GraphQLScalarType({
  name: 'GraphQLDate',
  description: 'A Date() type in GraphQL as a scalar',
  serialize(value) {
    return value.toISOString();
  },
  parseValue(value) {
    const dateValue = new Date(value);
    return isNaN(dateValue) ? undefined : dateValue;
  },
  parseLiteral(ast) {
    if (ast.kind == Kind.STRING) {
      const value = new Date(ast.value);
      return isNaN(value) ? undefined : value;
    }
  },
});

const resolvers = {
  Query: {
    about: () => aboutMessage,
    applicationList,
  },
  Mutation: {
    setAboutMessage,
    applicationAdd,
    addToBlacklist,
  },
  GraphQLDate,
};

async function addToBlacklist(_, {nameInput}) {

  const result = await db.collection('blacklist').insertOne({name: nameInput});
}

function setAboutMessage(_, { message }) {
  return aboutMessage = message;
}

async function applicationList() {
  const applications = await db.collection('applications').find({}).toArray();
  return applications;
}

async function getNextSequence(name) {
  const result = await db.collection('counters').findOneAndUpdate(
    { _id: name },
    { $inc: { current: 1 } },
    { returnOriginal: false },
  );
  return result.value.current;
}

function applicationValidate(application) {
  const errors = [];
  if (application.name.length < 3) {
    errors.push('Field "name" must be at least 3 characters long.');
  }
  if ( !application.number) {
    errors.
    push('Field "number" is required');
  }
  if ( !application.catsID) {
    errors.
    push('Cats ID" is required');
  }
  if (errors.length > 0) {
    throw new UserInputError('Invalid input(s)', { errors });
  }
}

async function applicationAdd(_, { application }) {
  applicationValidate(application);
  application.id = await getNextSequence('applications');

  const result = await db.collection('applications').insertOne(application);
  const savedApplication = await db.collection('applications')
    .findOne({ _id: result.insertedId });
  return savedApplication;
}

async function connectToDb() {
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  console.log('Connected to MongoDB at', url);
  db = client.db();
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
  resolvers,
  formatError: error => {
    console.log(error);
    return error;
  },
});

const app = express();

app.use(express.static('public'));

server.applyMiddleware({ app, path: '/graphql' });

(async function () {
  try {
    await connectToDb();
    app.listen(5000, function () {
      console.log('App started on port 5000');
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
})();
