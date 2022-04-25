/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo catshelter scripts/init.mongo.js
 * Atlas:
 *   mongo mongodb+srv://user:pwd@xxx.mongodb.net/applicationtracker scripts/init.mongo.js
 * MLab:
 *   mongo mongodb://user:pwd@xxx.mlab.com:33533/applicationtracker scripts/init.mongo.js
 */

db.applications.remove({});
db.volunteers.remove({});

const applicationsDB = [
  {
    id: 1, name: 'Keith', number: '12345678', email: '12345678@gmail.com',
    age: 18, gender: 'male',occupation:'doctor',catsID:'123'
  },
];

const volunteersDB = [
  {
    id: 1, name: 'Chandeler', number: '12345678', email: '12345678@gmail.com',
    age: 18, gender: 'male', location: '112231'
  },
];

const rescueDB = [
  {
    id: 1, city: 'Singapore', area: 'Clementi', avenue: 'Clementi Street',
    address: "419", name: 'Jack', phoneNumber: '112231'
  },
];

const markerDB = [
  {
    id: 1, lat:"1.2966",lng:"103.7764"
  },
];

db.applications.insertMany(applicationsDB);
db.volunteers.insertMany(volunteersDB);
db.rescue.insertMany(rescueDB);
db.marker.insertMany(markerDB);
const count = db.applications.count();
print('Inserted', count, 'applications');

const vcount = db.volunteers.count();
print('Inserted', vcount, 'volunteers');

const rcount = db.rescue.count();
print('Inserted', rcount, 'rescue');

const mcount = db.marker.count();
print('Inserted', mcount, 'marker');

db.counters.remove({ _id: 'applications' });
db.counters.remove({ _id: 'volunteers' });
db.counters.remove({ _id: 'rescue' });
db.counters.remove({ _id: 'marker' });
db.counters.insert({ _id: 'applications', current: count });
db.counters.insert({ _id: 'volunteers', current: vcount });
db.counters.insert({ _id: 'rescue', current: rcount });
db.counters.insert({ _id: 'marker', current: mcount });

db.applications.createIndex({ id: 1 }, { unique: true });
db.applications.createIndex({ name: 1 });
db.applications.createIndex({ number: 1 });

db.volunteers.createIndex({ id: 1 }, { unique: true });
db.volunteers.createIndex({ name: 1 });
db.volunteers.createIndex({ number: 1 });

db.rescue.createIndex({ id: 1 }, { unique: true });
db.marker.createIndex({ id: 1 }, { unique: true });