import {$authHost, $host} from "./index";
import {LOGIN_ROUTE} from "../utils/consts";


// Games
export const createGame = async (formData) => {
    const {data} = await $authHost.post('api/game', formData)
    return data
}

export const fetchGames = async () => {
    const {data} = await $host.get('api/game')
    return data
}

export const fetchGameById = async (id) => {
    const {data} = await $host.get('api/game/' + id)
    return data
}


// Consoles
export const createConsole = async (formData) => {
    const {data} = await $authHost.post('api/console', formData)
    return data
}

export const fetchConsoles = async () => {
    const {data} = await $host.get('api/console')
    return data
}

export const fetchConsoleById = async (id) => {
    const {data} = await $host.get('api/console/' + id)
    return data
}

//basket
export const fetchBasket = async (userId) => {
    const {data} = await $authHost.get('api/basket/' + userId)
    return data
}

export const deleteItemFromBasket = async (userId, itemId) => {
    const {data} = await $authHost.delete('api/basket/' + userId + '/' + itemId)
    return data
}

export const putItemToBasket = async(userId, itemId, type) => {
    console.log(`${userId} ${itemId} ${type}`)
    const {data} = await $authHost.put('api/basket/' +  userId, {type, itemId})
    return data
}