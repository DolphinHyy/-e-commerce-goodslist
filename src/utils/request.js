import axios from "axios";

const client = axios.create({
  baseURL: 'http://localhost:5001'
})

client.interceptors.response.use(config => config.data)

export default client
