const Router = require('express')
const router = new Router()
const consoleController = require('../controllers/consoleController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), consoleController.create)
router.get('/', consoleController.getAll)
router.get('/:id', consoleController.getOne)


module.exports = router
