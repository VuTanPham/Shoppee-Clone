import { User } from "src/types/user.type"

export const saveAccessTokenToLS = (access_token: string) => {
    localStorage.setItem('access_token', access_token)
}

export const clearAccessTokenFromLS = () => {
    localStorage.removeItem('access_token')
}

export const getAccessTokenFromLS = () => {
    localStorage.getItem('access_token') || ''
}

export const getProfileFromLS = () => {
    const result = localStorage.getItem('profile')
    return result ? JSON.parse(result) : null
}

export const setProfileFromLs = (profile: User) => {
    localStorage.setItem('profile', JSON.stringify(profile))
}