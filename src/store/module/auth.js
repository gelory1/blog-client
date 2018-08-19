import auth from '../../api/auth'

export default {
  state:{
    user: null,
    isLogin: false
  },
  getters:{
    user: state => state.user,
    isLogin: state => state.isLogin
  },
  mutations:{
    setUser(state,payload){
      state.user = payload.user
    },
    setLoginStatus(state,payload){
      state.isLogin = payload.isLogin
    }
  },
  actions:{
    login({commit},{username,password}){
      return auth.login({username,password})
        .then((res)=> {
          commit('setUser',{user:res.data})
          commit('setLoginStatus',{isLogin:true})
        })
    },
    register({commit},{username,password}){
      return auth.register({username,password})
        .then((res)=> {
          commit('setUser',{user:res.data})
          commit('setLoginStatus',{isLogin:true})
        })
    },
    checkLogin({commit,state}){
      if(state.isLogin) return true
      auth.get_info().then((res)=>{
        commit('setLoginStatus',{isLogin: res.isLogin})
        if(!res.isLogin) return false
        commit('setUser',{user: res.user})
        return true
      })
    },
    logout({commit,state}){
      auth.logout()
      commit('setUser',{user: null})
      commit('setLoginStatus',{isLogin: false})
    }
  }
}
