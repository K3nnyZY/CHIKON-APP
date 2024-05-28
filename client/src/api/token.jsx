import { TOKEN } from '../utils/constants'    

export function setToken (token) {
  window.localStorage.setItem(TOKEN, token)
}

export function getToken () {
  return window.localStorage.getItem(TOKEN)
}

export function removeToken () {
  window.localStorage.removeItem(TOKEN)
}