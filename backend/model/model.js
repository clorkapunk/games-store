const mongoose=require('mongoose').default;
const db = require('../db');

const userSchema = new mongoose.Schema({
    email: String,
    password:String,
    role: {
        type: String,
        default: "USER"
    }
});

const gameSchema = new mongoose.Schema({
    title: String,
    cardImg: String,
    mainImg: String,
    smallImg: String,
    year: String,
    tags: [],
    description: {
        type: String,
        default: "No description."
    },
    price: {
        type: String,
        default: "Free"
    }
})

const basketSchema = new mongoose.Schema({
    basketItems: [],
    userId: String
})

const typeSchema = new mongoose.Schema({
    title: String
})

const consoleSchema = new mongoose.Schema({
    title: String,
    date: Date,
    img: String,
    chars: {},
    description: {
        type: String,
        default: "No description"
    },
    price: {
        type: String,
        default: "Free"
    }

})

const User = mongoose.model('users', userSchema)
const Game = mongoose.model('games', gameSchema)
const Basket = mongoose.model('baskets', basketSchema)
const Type = mongoose.model('types', typeSchema)
const Console = mongoose.model('consoles', consoleSchema)

module.exports = {User,Game,Basket,Type,Console}