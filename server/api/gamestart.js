const router = require('express').Router();
const { StoryPrompt, PathOption } = require('../db');

//GET STORY PROMPT WITH PATH OPTIONS
//api/gamestart/:storypromptId
router.get("/:storypromptId", async(req, res,next) => {
  try{
    const promptId = req.params.storypromptId
    const gamestart = await StoryPrompt.findByPk(promptId, {
      where: {id: promptId},
      include: PathOption
    });

    res.json(gamestart)
  } catch(error) {
    next(error)
  }
});

router.get("/:nextpromptId", async(req, res, next) => {
  try{
    const promptId = req.params.storypromptId
    const nextPromptId = req.params.nextpromptId
    const nextPrompt = await StoryPrompt.findByPk(nextPromptId, {
      where: {id: nextPromptId},
      include: StoryPrompt
    });

    res.json(nextPrompt)
  }catch(error){
    next(error)
  }
});

module.exports = router;
