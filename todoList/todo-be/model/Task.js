const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 스키마 정의
const taskSchema = Schema(
  {
    task: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
      required: true,
    },
  },
  // 생성하는 데이터들의 생성 시간 표시
  { timestamps: true }
);

// Task 모델 생성
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
