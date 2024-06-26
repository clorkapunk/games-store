const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User,Game,Basket} = require('../model/model')
const jwt = require('jsonwebtoken')

const generateJwt = (_id, email, role) =>{
    return jwt.sign(
        {_id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'})
}

class userController{
    async registration(req, res, next){
        const {email, password, nickname, lastname, firstname, role} = req.body
        if(!email || !password){
            return next(ApiError.badRequest("Invalid email or password."))
        }
        const candidate = await User.findOne({"email": email})
        if(candidate){
            return next(ApiError.badRequest('User already registered'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email: email, role: role, password: hashPassword, firstname: firstname, lastname: lastname, nickname: nickname})
        const token = generateJwt(user._id, user.email, user.role)
        const basket = await Basket.create({userId: user._id})
        return res.json({token})
    }

    async login(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({email: email})
        if(!user){
            return next(ApiError.internal('User is not found.'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal('Wrong password'))
        }
        const token = generateJwt(user._id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next){
        const token = generateJwt(req.user._id, req.user.email, req.user.role)
        return res.json({token})
    }

    async getUserDetails(req, res, next){
        const {id} = req.params
        const user = await User.findOne({_id: id})
        return res.json(user)
    }

    async changeUserDetails(req, res, next){
        const {id, email, nickname, lastname, firstname} = req.body
        let user = await User.findByIdAndUpdate({_id: id}, {email: email, firstname: firstname, lastname: lastname, nickname: nickname})
        user = await User.findOne({_id: id})
        return res.json(user)
    }

    async test(req, res){
        const result = await User.find().skip(1).limit(1)
        res.json(result)
    }
}

module.exports = new userController()