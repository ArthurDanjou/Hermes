import axios from 'axios'

const instance = axios.create({
  baseURL: String(import.meta.env.VITE_ENV) === 'development' ? String(import.meta.env.VITE_API_URL_DEV) : String(import.meta.env.VITE_API_URL),
  withCredentials: true,
})

export const useAxios = () => {
  return instance
}
