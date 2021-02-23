import axios from 'axios'
import store from "../store";
import token from "../token";
const  axiosInstance = axios.create({
  baseURL: 'http://localhost:8082/cms/',
  timeout: 10000,
})


//请求拦截器配置
axiosInstance.interceptors.request.use(config=>{
  if(store.state.token){
    config.headers['token'] = store.state.token
  }
  return config;
}, error =>{
  return Promise.reject(error);
});

// 添加响应拦截器
axiosInstance.interceptors.response.use(response => {

  let token = response.headers['token']
  if(token){
    store.commit('setToken',token)
  }
  //获取后端返回的对象
  const  res = response.data
  if(response.status == 200){
    //数据正常响应
    if(res.status == 200){
      return res;
    }else{
      return Promise.reject(res.msg)
    }
  }
}, error=> {
  return Promise.reject(error);
});

export default  axiosInstance