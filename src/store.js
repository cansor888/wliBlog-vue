
import Vue from 'vue'
import Vuex from 'vuex'
import token from './token'
import {login} from "./api/user";

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    token:token.get()
  },
  mutations:{
    setToken(state,paramToken){
      state.token = paramToken
      token.set(paramToken)
    },
    logout(){
      token.clear()
    }
  },
  actions:{
    login({commit},user){
      return new Promise((resolve,reject)=>{
        login(user.userName,user.password).then(data=>{
          commit('setToken',data.data.token)
          token.setUser(data.data.user)
          resolve()
        }).catch(error=>{
           reject(error)
        })
      })
    }
  }

})

export default store