const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Final Exam' });
});

module.exports = router;
