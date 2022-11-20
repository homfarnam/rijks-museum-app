import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const museumAPI: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export { museumAPI }
