const Sequelize = require('sequelize');
const db = require('../db');

const GameDetail = db.define('GameDetail', {
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  coverArt: {
    type: Sequelize.STRING,
    defaultValue: 'llama.jpg',
  }
})

module.exports = GameDetail;
