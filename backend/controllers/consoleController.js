const {Console} = require('../model/model')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class ConsoleController {

    async create(req, res, next){
        try{
            const {title, date, chars, price, description} = req.body
            const {img} = req.files
            const charsParsed = JSON.parse(chars)
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, "..", "static", fileName))
            const console = await Console.create({title, img: fileName, date, chars: charsParsed, price, description})
            return res.json(console)
        }
        catch (e){
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res){
        const console = await Console.find()
        return res.json(console)
    }

    async getOne(req, res){
        const {id} = req.params
        const console = await Console.findOne({_id: id})
        return res.json(console)
    }
}

module.exports = new ConsoleController()