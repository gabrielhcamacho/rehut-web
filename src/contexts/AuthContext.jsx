import { Children, createContext, useEffect, useState } from "react"
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

import { api } from '../../services/api'
import { getAPIClient } from "../../services/axios"

export const AuthContext = createContext({})


export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    //console.log(user)

    const isAuthenticated = !!user

    useEffect(() => {
        const { 'rehut.token': token } = parseCookies()
        if (token) {
            recoverUserInformation(token).then(response => {
                setUser(response)
            })
        }
    }, [])

    async function recoverUserInformation(token) {
        try {
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const response = await api.get('/users/get-user', { headers });
            console.log(response)
            const data = await response.data;
            console.log(data)
            return data

        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    async function signIn({ email, password }) {
        try {
            const response = await api.post('/auth/login', {
                email,
                password,
            });
            console.log(response)
            const data = await response.data;
            console.log(data)

            setCookie(undefined, 'rehut.token', data.token, {
                maxAge: 60 * 60 * 2, // 2 hours
            })

            api.defaults.headers['Authorization'] = `Bearer ${data.token}`

            setUser(data.user)

        } catch(error) {
            throw error
        }

        Router.push('/dashboard')
    }

    function signOut() {
        // Limpar token dos cookies
        setCookie(undefined, 'rehut.token', '', {
            maxAge: -1,
        });

        // Limpar cabeçalho de autorização do Axios (se configurado)
        delete api.defaults.headers['Authorization'];

        // Limpar estado local do usuário
        setUser(null);

        // Redirecionar para página de login ou qualquer outra página desejada
        Router.push('/signIn');
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}