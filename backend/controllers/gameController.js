const {Game} = require('../model/model')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
const {regexpToText} = require("nodemon/lib/utils");

class GameController {
    async create(req, res, next){
        try{
            const {title, year, tags, price, description} = req.body
            const {cardImg, mainImg, smallImg} = req.files
            const tagsParsed = JSON.parse(tags)
            let fileName = uuid.v4() + ".jpg"
            await cardImg.mv(path.resolve(__dirname, "..", "static", fileName))
            let fileName2 = uuid.v4() + ".jpg"
            await mainImg.mv(path.resolve(__dirname, "..", "static", fileName2))
            let fileName3 = uuid.v4() + ".jpg"
            await smallImg.mv(path.resolve(__dirname, "..", "static", fileName3))
            const game = await Game.create({
                title, cardImg: fileName, mainImg: fileName2, smallImg: fileName3,
                year, tags: tagsParsed, description, price})
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