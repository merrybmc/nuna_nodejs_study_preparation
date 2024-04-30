const { MongoClient } = require('mongodb');

const uri = `mongodb://localhost:27017`;

const client = new MongoClient(uri);

async function run() {
  const database = client.db('firstDB');
  const inventory = database.collection('inventory');

  // quiz 1
  //   const inventoryData = await inventory.insertOne({
  //     item: 'canvas',
  //     qty: 100,
  //     tags: ['cotton'],
  //     size: { h: 28, w: 35.5, uom: 'cm' },
  //   });

  // quiz 2
  // const inventoryDatas = await inventory.insertMany([
  //   {
  //     item: 'journal',
  //     qty: 50,
  //     tags: ['blank', 'red'],
  //     size: { h: 14, w: 21, uom: 'cm' },
  //     status: 'A',
  //   },
  //   { item: 'mat', qty: 85, tags: ['gray'], size: { h: 27.9, w: 35.5, uom: 'in' }, status: 'D' },
  //   {
  //     item: 'mousepad',
  //     qty: 25,
  //     tags: ['gel', 'blue'],
  //     size: { h: 19, w: 212.85, uom: 'cm' },
  //     status: 'A',
  //   },
  // ]);

  // quiz 3
  //   const readData = await inventory.find({}).toArray();
  //   console.log(readData);

  // quiz 4
  // const readFindData = await inventory.find({ status: 'D' }).toArray();
  // console.log(readfindData);

  // quiz 5
  // const readFindsData = await inventory.find({ status: 'A', qty: 50 }).toArray();
  // console.log(readFindsData);

  // quiz 6
  // const readQueryinData = await inventory.find({ status: { $in: ['A', 'B'] } }).toArray();
  // console.log(readQueryData);

  // quiz 7
  // const readQueryltData = await inventory.find({ status: 'A', qty: { $lt: 30 } }).toArray();
  // console.log(readQueryltData);

  // quiz 8
  // const readQueryorData = await inventory
  //   .find({ $or: [{ status: 'A' }, { qty: { $lt: 30 } }] })
  //   .toArray();
  // console.log(readQueryorData);

  // quiz 9
  // const readNestedFieldData = await inventory.find({ 'size.uom': 'in' }).toArray();
  // console.log(readNestedFieldData);

  // quiz 10
  // const readQuerygtData = await inventory.find({ 'size.h': { $gt: 10 } }).toArray();
  // console.log(readQuerygtData);

  // quiz 11
  const students = database.collection('students');
  const studentDatas = students.insertMany([
    { _id: 1, test1: 95, test2: 92, test3: 90, modified: new Date('01/05/2020') },
    { _id: 2, test1: 98, test2: 100, test3: 102, modified: new Date('01/05/2020') },
    { _id: 3, test1: 95, test2: 110, test3: 110, modified: new Date('01/04/2020') },
  ]);

  // const updateStudent = await students.updateOne({ _id: 3 }, { $set: { test3: 98 } });

  // quiz 12
  // const studentManyDatas = await students.updateMany(
  //   {},
  //   { $set: { test1: 0 }, $set: { status: 'modified' } }
  // );

  // quiz 13
  const studentTestDeleteOne = await students.deleteOne({ test2: 92 });

  // quiz 14
  const studnetTestDeleteMany = await students.deleteMany({ test1: 0 });
}

run();
