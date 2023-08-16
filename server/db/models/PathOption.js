const Sequelize = require('sequelize');
const db = require('../db');

const PathOption = db.define('PathOption', {
  Option: Sequelize.STRING
})

module.exports = PathOption;
