//this is the access point for all things database related
const { Sequelize } = require('sequelize');
const db = require('./db')
const GameDetail = require('./models/GameDetail');
const PathOption = require('./models/PathOption');
const StoryPrompt = require('./models/StoryPrompt')

//assocations go here:
StoryPrompt.hasMany(PathOption)
PathOption.belongsTo(StoryPrompt, {foreignKey: 'StoryPromptId'});

StoryPrompt.hasOne(PathOption, {foreignKey: 'NextPromptId'});

module.exports = {
  db,
  GameDetail,
  PathOption,
  StoryPrompt
}
