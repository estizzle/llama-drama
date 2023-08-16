const Sequelize = require('sequelize');
const db = require('../db');

const StoryPrompt = db.define('StoryPrompt', {
  plotPoint: {
    type: Sequelize.STRING(2000)
  }
})

module.exports = StoryPrompt;
