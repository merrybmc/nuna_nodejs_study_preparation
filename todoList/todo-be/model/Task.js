const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 스키마 정의
const taskSchema = Schema({
  task: {
    type: String,
    required: true,
  },
  isComplete: {
    type: Boolean,
    required: true,
  },
});

// Task 모델 생성
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
