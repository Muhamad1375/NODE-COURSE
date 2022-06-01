const request = require('request');

const url = "https://api.darksky.net/forecast/9bca3813cf3b181726b5d28283ee197b/35.655270, 51.387757?units=si"

request({ url: url, json: true }, (error, response) => {
      console.log(response.body.daily.data[0].summary +' this is currently '+ response.body.currently.temperature + ' degrees in javadieh. ' + 'there is a ' + response.body.currently.precipProbability + '% chance of rain')
})

