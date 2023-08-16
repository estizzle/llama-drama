const router = require('express').Router();

const { PathOption } = require('../db');

//GET ALL AllOptions /api/optionprompts/:optionId
router.get("/", async(req, res, next) => {
  try{
    const alloptions = await PathOption.findAll();
    res.json(alloptions);
  } catch(error) {
    next(error)
  }
});

//GET Single Option
router.get("/:optionId", async(req, res, next) => {
  try{
    const option = await PathOption.findByPk(req.params.optionId);
    res.json(option)
  } catch(error) {
    next(error)
  }
});

module.exports = router;
