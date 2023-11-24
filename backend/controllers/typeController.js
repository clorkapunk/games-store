const {Type} = require('../model/model')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res, next){
        try{
            const {title} = req.body
            const type = await Type.create({title})
            return res.json(type)
        }
        catch (e){
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res){
        const type = await Type.find()
        return res.json(type)
    }

    async getOne(req, res){
        const {id} = req.params
        const type = await Type.findOne({_id: id})
        return res.json(type)
    }
}

module.exports = new TypeController()