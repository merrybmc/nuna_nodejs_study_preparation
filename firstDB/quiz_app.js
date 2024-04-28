const { MongoClient } = require('mongodb');

const uri = `mongodb://localhost:27017`;

const client = new MongoClient(uri);

async function run() {
  const database = client.db('firstDB');
  const inventory = database.collection('inventory');

  // quiz 1
  //   const userData = await inventory.insertOne({
  //     item: 'canvas',
  //     qty: 100,
  //     tags: ['cotton'],
  //     size: { h: 28, w: 35.5, uom: 'cm' },
  //   });

  // quiz 2
  //   const userDatas = await inventory.insertMany([
  //     { item: 'journal', qty: 25, tags: ['blank', 'red'], size: { h: 14, w: 21, uom: 'cm' } },
  //     { item: 'mat', qty: 85, tags: ['gray'], size: { h: 27.9, w: 35.5, uom: 'cm' } },
  //     { item: 'mousepad', qty: 25, tags: ['gel', 'blue'], size: { h: 19, w: 212.85, uom: 'cm' } },
  //   ]);

  // quiz 3
  //   const readData = await inventory.find({}).toArray();
  //   console.log(readData);

  // quiz 11
  const students = database.collection('students');
  const studentDatas = students.insertMany([
    { _id: 1, test1: 95, test2: 92, test3: 90, modified: new Date('01/05/2020') },
    { _id: 2, test1: 98, test2: 100, test3: 102, modified: new Date('01/05/2020') },
    { _id: 3, test1: 95, test2: 110, test3: 110, modified: new Date('01/04/2020') },
  ]);

  const updateStudent = await students.updateOne({ _id: 3 }, { $set: { test3: 98 } });

  // quiz 12
  const studentManyDatas = await students.updateMany(
    {},
    { $set: { test1: 0, status: 'modified' } }
  );
}

run();
