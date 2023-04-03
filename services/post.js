import axios from 'axios'

const url = 'http://localhost:3001'

const getPosts = async () => {
  return await axios.get(`${url}/post`)
}


export default {
  getPosts,
}
