const express = require('express');

const app = express();

// port setting
app.listen(5000, () => {
  console.log('server is on 5000');
});

// routing
// 반드시 매개변수로 req와 res를 받는다.
// 세번째 매개변수로 next도 있지만 optional이다. 미들웨어를 사용하기 위함.
app.get('/', (req, res) => {
  res.send('hello bmc world');
});

app.get('/about', (req, res) => {
  res.send('this is all about express');
});

// post로 요청왔을 때
// 브라우저 url로만 테스트를 할 땐 get만 사용 가능
// post를 사용하려면 postman을 사용해야됨
// app.post('/about', (req, res) => {
//   res.send('this is all about express');
// });

// 미들웨어 사용 api ex

// 미들웨어 함수
// 미들웨어 함수엔 next가 필수로 들어가야 한다.
const checkAuth = (req, res, next) => {
  console.log('she has admin permission');
  next();
};

// 미들웨어 함수 2
const checkToken = (req, res, next) => {
  console.log('token check');
  if (token) {
    next();
  }
  // 미들웨어에서 반환
  res.send("you don't have token");
};

// return 함수
const getUser = (req, res) => {
  console.log('here is user info');
  res.send('here is user info');
};

// middleware getUser가 호출되기전에 checkAuth, checkToken를 거쳐간다.
// 미들웨어의 개수는 상관없다.
// 순서 - checkAuth -> checkToken -> getUser
app.get('/users', checkAuth, checkToken, getUser);
