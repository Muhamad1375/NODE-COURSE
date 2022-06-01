const request = require('request');

const url = "https://api.darksky.net/forecast/9bca3813cf3b181726b5d28283ee197b/37.8267,-122.4233"

request({ url: url }, (error, response) => {
      const data = JSON.parse(response.body)
      console.log(data.currently)

})