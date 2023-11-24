const {Basket} = require('../model/model')
const ApiError = require('../error/ApiError')

class BasketController {
    async addItem(req, res, next){
        try {
            console.log("here")
            const {id} = req.params
            const {type, itemId} = req.body
            console.log(`${type} ${itemId}`)
            const basket = await Basket.findOne({userId: id})
            if (!basket.basketItems.find(item => item.itemId === itemId)) {
                basket.basketItems.push({type: type, itemId: itemId})
                await basket.save()
            }
            return res.json(basket)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteItem(req, res, next){
        try{
            const {id, itemId} = req.params
            const basket = await Basket.findOne({userId: id})
            if (basket.basketItems.find(item => item.itemId === itemId)) {
                basket.basketItems = basket.basketItems.filter(item => item.itemId !== itemId)
                await basket.save()
            }
            return res.json(basket)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getOne(req, res){
        const {id} = req.params
        const basket = await Basket.findOne({userId: id})
        return res.json(basket)
    }
}

module.exports = new BasketController()