/*
  ajax 请求函数入口
 */
import axios from 'axios'
export default function ajax(url, data={},type='GET') {
    return new Promise(function (resolve,reject) {
        let promise
        if(type.toUpperCase() === 'GET'){
            let params = ''
            for(let index in data){
                params += index + '=' + data[index] + '&'
            }
            if (params !== ''){
                params = params.substring(0,params.lastIndexOf('&'))
                url += params
            }
            promise = axios.get(url)
        }
        else if(type.toUpperCase() === 'POST'){
            promise = axios.post(url)
        }
        else if(type.toUpperCase() === 'DELETE'){
          promise = axios.delete(url)
        }
        else if(type.toUpperCase() === 'PUT'){
          promise = axios.put(url)
        }
        //获取返回结果的数据
        promise.then(function (response) {
          resolve(response.data)
        }).catch(function (error) {
            reject(error)
        })

    })

}
