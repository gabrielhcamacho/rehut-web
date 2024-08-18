import axios from "axios"
import { parseCookies } from "nookies"

export function getAPIClient(ctx?: any){
    const { 'rehut.token': token } = parseCookies(ctx)

    const api = axios.create({
    baseURL: 'http://localhost:3333/v1',
    })

    if(token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`
    }

    return api
}