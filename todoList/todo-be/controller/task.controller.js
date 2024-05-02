const Task = require('../model/Task');

const taskController = {};

taskController.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const newTask = new Task({ task, isComplete });

    await newTask.save();

    // status 200으로 전송
    res.status(200).json({ status: 'ok', data: newTask });
  } catch (err) {
    // status 400으로 전송
    res.status(400).json({ status: 'fail', error: err });
  }
};

taskController.getTask = async (req, res) => {
  try {
    const taskList = await Task.find({}).toArray();

    res.status(200).json({ status: 'ok', data: taskList });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err });
  }
};

module.exports = taskController;
