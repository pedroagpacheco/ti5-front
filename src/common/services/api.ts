import axios from 'axios'
import http from 'http'

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: { 'Access-Control-Allow-Origin':'*' },
  httpAgent: new http.Agent({  
    rejectUnauthorized: false
  })
})

// const get2 = async(url:string) => {
//   try {
//     const httpAgent = new http.Agent({ rejectUnauthorized: false })

//      axios.get(url, { httpAgent: httpAgent })    
//   } catch (error) {
//     return error
//   }
// }

const get = async (url: string) => {
  try {
    const response = await api.get(url)
    return response
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
