import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.0.178:5000',
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
