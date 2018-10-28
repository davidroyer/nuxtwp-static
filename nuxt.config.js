const axios = require('axios')
const {
  join
} = require('path')

module.exports = {

  // Head and global Meta tags
  head: {
    titleTemplate: '%s | Nuxt static 🔥',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'A static site powered by Nuxt.js'
      }
    ]
  },

  plugins: ['@/plugins/axios'],
  // Nuxt environment variables
  env: {
    dataDir: join(__dirname, 'dist/api')
  },

  // Generate dynamic routes
  generate: {
    async routes() {
      const baseUrl = 'https://demo1.wpapi.app/wp-json/wp/v2'
      const Endpoints = [
        'posts',
        'users',
        'pages'
      ]
      let routesArray = []

      for (const endpoint of Endpoints) {
        const { data } = await axios.get(`${baseUrl}/${endpoint}`)
        const endpointRoutes = data.map(endpointItem => `/${endpoint}/${endpointItem.id}`)
        routesArray.push(...endpointRoutes)
      }
      return routesArray
    }
  }
}