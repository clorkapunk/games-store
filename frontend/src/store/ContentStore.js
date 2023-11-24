import {makeAutoObservable} from "mobx";

export default class ContentStore{
    constructor() {
        this._games = []
        this._types = [
            {id: 1, title: "Games"},
            {id: 2, title: "Consoles"}
        ]
        this._consoles = []
        this._selectedType = {id: null, title: ""}
        this._basket = []
        makeAutoObservable(this)
    }

    setGames(games){
        this._games = games
    }

    setTypes(types){
        this._types = types
    }

    setSelectedType(type){
        this._selectedType = type
    }

    setConsoles(consoles){
        this._consoles = consoles
    }

    setBasket(basket){
        this._basket = basket
    }

    get games(){
        return this._games
    }

    get selectedType(){
        return this._selectedType
    }

    get types(){
        return this._types
    }

    get consoles(){
        return this._consoles
    }

    get basket(){
        return this._basket
    }


}