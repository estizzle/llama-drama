const router = require('express').Router();

router.use('/storyprompts', require('./storyPrompts'))
router.use('/optionprompts', require('./optionPrompts'))
router.use('/gamestart', require('./gamestart'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
 module.exports = router
