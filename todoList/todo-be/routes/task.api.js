// router setting

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('read task');
});

router.post('/', (req, res) => {
  res.send('create task');
});

router.put('/:id', (req, res) => {
  res.send('update task');
});

router.delete('/:id', (req, res) => {
  res.send('delete task');
});

module.exports = router;
