import request from '../helpers/request'

const URL = {
  Login: '/auth/login',
  Register: '/auth/register',
  Logout: '/auth/logout',
  Get_info: '/auth'
}
export default {
  register({username,password}){
    return request(URL.Register,'POST',{username,password})
  },
  login({username,password}){
    return request(URL.Login,'POST',{username,password})
  },
  logout(){
    return request(URL.Logout)
  },
  get_info(){
    return request(URL.Get_info)
  },
}
