const {Game} = require('../model/model')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
const {regexpToText} = require("nodemon/lib/utils");

class GameController {
    async create(req, res, next){
        try{
            const {title, year, tags, price, description} = req.body
            const {img} = req.files
            const tagsParsed = JSON.parse(tags)
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, "..", "static", fileName))
            const game = await Game.create({title, img: fileName, year, tags: tagsParsed, description, price})
            return res.json(game)
        }
        catch (e){
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res){
        const games = await Game.find()
        return res.json(games)
    }

    async getOne(req, res){
        const {id} = req.params
        const game = await Game.findOne({_id: id})
        return res.json(game)
    }
}

module.exports = new GameController()