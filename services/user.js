import axios from 'axios'

const url = 'http://localhost:3001'

const login = async (loginInfo) => {
  return await axios.put(
    `${url}/users/signin`, 
    loginInfo, 
    { 'Content-Type': 'application/json'}
  )
}

const authenticate = async (token) => {
  return await axios.put(
    `${url}/users/authenticate`, 
    { token },
    { 'Content-Type': 'application/json'}
  )
}

export default {
  login,
  authenticate,
}
