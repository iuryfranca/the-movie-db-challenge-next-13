import axios from 'axios'

const apiKey = process.env.API_KEY_V3

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})
