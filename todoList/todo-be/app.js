const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');

const app = express();
// request body를 쉽게 읽어옴.
// http request의 payload값을 request.body에 넣어줌.
app.use(bodyParser.json());
app.use('/api', indexRouter);

// URI 세팅
const mongoURI = 'mongodb://localhost:27017/todo-demo';

// mongoose & mongoURI connect
// useNewUrlParser : 옛날과 신버전 형식의 mongodb 주소가 있는데 이를 호환이 되도록 해줌.
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log('mongoose connected');
  })
  .catch((err) => console.log('DB connection fail', err));

// port setting, 완료 시 콜백 호출
app.listen(5000, () => {
  console.log('server on 5000');
});

/**
 * restful API 패턴 규칙
 *
 * 주소 + http method 형식을 통해 부여
 *
 * ex)
 * /todo .get
 * /todo .post
 * /todo/:id .put & .patch
 * /todo/id .delete 가능
 */
