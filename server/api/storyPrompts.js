const router = require('express').Router();

const { StoryPrompt } = require('../db');

//GET ALL StoryPrompts
router.get("/", async(req, res, next) => {
  try{
    const allprompts = await StoryPrompt.findAll();
    res.json(allprompts);
  } catch(error) {
    next(error)
  }
});

//Single Prompt, GET /api/storyprompts/:promptId
router.get("/:promptId", async(req, res, next) => {
  try{
    const prompt = await StoryPrompt.findByPk(req.params.promptId);
    res.json(prompt)
  } catch(error) {
    next(err)
  }
});

module.exports = router;
