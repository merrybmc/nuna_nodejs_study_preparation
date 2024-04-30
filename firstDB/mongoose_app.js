const mongoose = require('mongoose');

// connect
mongoose.connect('mongodb://localhost:27017/mongoose-test');

const { Schema } = mongoose;

// 모델 스키마 타입 지정
const userSchema = new Schema({
  name: { type: String },
  email: {
    type: String,
    // validate : {validator : ()=>{}} 유효성 검사
    // validate: {
    //   validator: function (value) {
    // if (value.includes('@')) {
    //   throw new Error('this is not an email');
    // }

    // validator email 유효성검사 메서드
    // if (!validator.isEmail(value)) {
    //   throw new Error('this is not an email');
    // }
    // },
    // },
  },
  password: { type: String, trim: true },
  // trim : 공백 제거
  age: { type: Number, require: true, default: 0 },
  // require : true === 생략 가능, false = default
  // default : 입력되지 않은 경우 초기값 세팅
});

// collection 생성
const User = mongoose.model('User', userSchema);

// 생성자 생성
const newUser = new User({
  name: '조병민2',
  email: 'mymail2@naver.com',
  password: 'pw1234',
});

// create
newUser.save().then((value) => console.log(value));

// read
const readUser = User.findOne({ name: '조병민' }).select();

// 특정 key만 읽기
const readSelectUser = User.findOne({ name: '조병민' })
  .select('email - _id') // email만 읽을 것이며 _id도 제외
  .then((value) => console.log(value));
{
  // parameter 1 = model
  // parameter 2 = schema
  // const Cat = mongoose.model('Cat', { name: String });
  // 생성자 생성
  // const kitty = new Cat({ name: 'Zildjain' });
  // create
  // kitty.save().then(() => console.log('meow'));
}
