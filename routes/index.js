const express = require('express');
const router = express.Router();
const path = require("path");
const { executeQuery } = require('../connect/mysql');



router.get('/', async (req, res, next) => {

  res.render('index', { title: 'WebSockets ConLine' });
});

module.exports = router;
