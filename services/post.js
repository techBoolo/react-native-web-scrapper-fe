import axios from 'axios'

const url = 'http://localhost:3001'

const getPosts = async () => {
  return await axios.get(`${url}/posts`)
}

const scrap = async (source) => {
  return await axios.put(`${url}/scrap/${source}`)
}

export default {
  getPosts,
  scrap,
}
