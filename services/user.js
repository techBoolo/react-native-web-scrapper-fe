import axios from 'axios'

const url = 'http://localhost:3001'

const login = async (loginInfo) => {
  return await axios.put(
    `${url}/users/signin`, 
    loginInfo, 
    { 'Content-Type': 'application/json'}
  )
}

export default {
  login
}
