const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const gameRouter = require('./gameRouter')
const typeRouter = require('./typeRouter')
const consoleRouter = require('./consoleRouter')
const backetRouter = require('./basketRouter')

router.use('/user', userRouter)
router.use('/game', gameRouter)
router.use('/type', typeRouter)
router.use('/console', consoleRouter)
router.use('/basket', backetRouter)

module.exports = router
