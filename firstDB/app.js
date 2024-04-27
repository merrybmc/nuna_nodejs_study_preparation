const { MongoClient } = require('mongodb');

const uri = `mongodb://localhost:27017`;

const client = new MongoClient(uri);

async function run() {
  const database = client.db('firstDB');
  const users = database.collection('users');

  // 객체 단일 삽입
  //   const userData = await users.insertOne({ name: 'bmc', age: '30' });
  //   console.log(userData);

  // 객체 여러개 삽입
  //   const userList = [({ name: 'bmc', age: '30' }, { name: 'jessica', age: '25' })];
  //   const userListResult = await users.insertMany(userList);
  //   console.log(userListResult);

  // 객체의 [key : value] 와 일치하는 데이터 읽기
  // const findUser = await users.findOne({ name: 'bmc' });

  // 해당하는 collection의 데이터들을 모두 읽기
  //   const findUser = await users.find({}).toArray();
  //   console.log(findUser);

  // 특정 조건에 해당하는 데이터들을 모두 읽기
  //   const findUser = await users.find({ age: { $gt: 20 } }).toArray();
  //   console.log(findUser);

  // 특정 조건에 해당하는 데이터들중 제일 앞에있는 값 읽기
  //   const findUser = await users.findOne({ age: { $gt: 20 } }).toArray();
  //   console.log(findUser);
}

run();
