import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";


export const registration = async (email, password, nickname, firstname, lastname) => {
    const {data} = await $host.post('api/user/registration', {email, password, nickname, lastname, firstname, role: 'USER'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const getUserDetails = async (id) => {
    const {data} = await $authHost.get('api/user/info' + id)
    return data
}

export const updateUserDetails = async (id, email, nickname, lastname, firstname) => {
    const {data} = await $authHost.patch('api/user/change', {id, email, nickname, lastname, firstname})
    return data
}