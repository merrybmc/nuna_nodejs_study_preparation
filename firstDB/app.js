const { MongoClient } = require('mongodb');

const uri = `mongodb://localhost:27017`;

const client = new MongoClient(uri);

async function run() {
  const database = client.db('firstDB');
  const users = database.collection('users');

  // create

  // 객체 단일 삽입
  //   const userData = await users.insertOne({ name: 'bmc', age: '30' });
  //   console.log(userData);

  // 객체 여러개 삽입
  //   const userList = [({ name: 'bmc', age: '30' }, { name: 'jessica', age: '25' })];
  //   const userListResult = await users.insertMany(userList);
  //   console.log(userListResult);

  // read

  // 조건과 일치하는 제일 앞의 데이터 읽기
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

  // 값을 읽을 때 특정 key를 제외하고 읽기
  // project({ key : 0 }) === 읽어오는 대상에서 특정 key를 제외 // 1 = 제외하지 않기 (default)
  const userData = await users.find({ name: 'bmc' }).project({ _id: 0 }).toArray();

  // update
  // 조건과 일치하는 제일 앞의 데이터의 값을 업데이트하기
  // updateMany = 조건과 일치하는 모든 데이터의 값을 업데이트
  // const updateUser = await users.updateOne({ name: 'bmc' }, { $set: { age: 26 } });

  // delete
  // 조건과 일치하는 모든 데이터를 삭제하기
  // deleteOne = 조건과 일치하는 제일 앞의 데이터의 값 삭제
  const deleteUsers = await users.deleteMany({ age: { $gt: 20 } });
}

run();
