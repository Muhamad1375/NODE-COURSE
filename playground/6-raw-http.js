const https = require('https')
const url = 'https://api.darksky.net/forecast/9bca3813cf3b181726b5d28283ee197b/40,-75'

const request = https.request(url, (response) => {
      let data = ''
      
      response.on('data', (chunk) => {
            data = data + chunk.toString()
            console.log(chunk)
      })

      response.on('end', () => {

            const body = JSON.parse(data)
            console.log(body)

      })
})

request.on('error', (error) => {
      console.log('An error', error)
})

request.end()