const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/info:id', authMiddleware, userController.getUserDetails)
router.patch('/change', authMiddleware, userController.changeUserDetails)


router.get('/test',  userController.test)


module.exports = router
