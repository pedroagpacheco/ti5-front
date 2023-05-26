import axios from 'axios'

const api = axios.create({
  baseURL: 'https://e8ed-2804-14c-5bd0-81d7-40d5-a9dd-57cc-ac4a.ngrok-free.app',
  headers: {
    'Access-Control-Allow-Origin':'*',
    'Accept': '*/*',
    'content-type': 'application/json',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive'
  },
  withCredentials: false
})

const get = async (url: string) => {
  try {
    const response = await api.get(url)
    return response.data
  } catch (error) {
    console.error(error)
    return error
  }
}

const post = async (url: string, data?: Record<string, string | number | boolean>) => {
  try {
    const response = await api.post(url, data)
    return response.data
  } catch (error) {
    console.error(error)
    return error
  }
}

export default api
export { get, post }
