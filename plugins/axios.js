import axios from 'axios'

// let baseURL = 'https://jsonplaceholder.typicode.com'
let baseURL = 'https://demo1.wpapi.app/wp-json/wp/v2'


if (process.browser && process.static) {
  baseURL = '/api'
}
const instance = axios.create({ baseURL })

if (process.browser && process.static) {
  instance.interceptors.request.use((config) => {
    config.url = config.url + '.json'
    return config
  })
}

if (process.server && process.static) {
  const mkdirp = require('mkdirp-promise')
  const { join, dirname } = require('path')
  const { writeFileSync } = require('fs')

  instance.interceptors.response.use(
    async function (response) {
      // Do something with response data
      const path = join(process.env.dataDir, response.request.path + '.json')
      let modifiedPath = path.replace('/wp-json/wp/v2', '')
      const {request, data} = response
      
      await mkdirp(dirname(modifiedPath))
      writeFileSync(modifiedPath, JSON.stringify(response.data))
      return response
    }, function (error) {
      // Do something with response error
      return Promise.reject(error)
    }
  )
}

// export default instance
export default (ctx, inject) => {
  ctx.$wp = instance
  inject('wp', instance)
}
