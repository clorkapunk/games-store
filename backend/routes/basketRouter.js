const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/:id', basketController.getOne)
router.put('/:id', basketController.addItem)
router.delete('/:id/:itemId', basketController.deleteItem)


module.exports = router
