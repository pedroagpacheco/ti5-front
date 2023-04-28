import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: { 'Access-Control-Allow-Origin':'*' }
})

const get = async (url: string) => {
  try {
    const { data } = await api.get(url)
    return data
  } catch (error) {
    console.error(error)
    return error
  }
}

const post = async (url: string, data: Record<string, string | number | boolean>) => {
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
