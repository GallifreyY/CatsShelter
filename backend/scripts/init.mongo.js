/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo applicationtracker scripts/init.mongo.js
 * Atlas:
 *   mongo mongodb+srv://user:pwd@xxx.mongodb.net/applicationtracker scripts/init.mongo.js
 * MLab:
 *   mongo mongodb://user:pwd@xxx.mlab.com:33533/applicationtracker scripts/init.mongo.js
 */

db.applications.remove({});

const applicationsDB = [
  {
    id: 1, name: 'Keith', number: '12345678', email: '12345678@gmail.com',
    age: 18, gender: 'male'
  },
];

db.applications.insertMany(applicationsDB);
const count = db.applications.count();
print('Inserted', count, 'applications');

db.counters.remove({ _id: 'applications' });
db.counters.insert({ _id: 'applications', current: count });

db.applications.createIndex({ id: 1 }, { unique: true });
db.applications.createIndex({ name: 1 });
db.applications.createIndex({ number: 1 });
