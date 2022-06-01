const request = require('request');
const geocode = require('./utils/geocode')
// const url = "https://api.darksky.net/forecast/9bca3813cf3b181726b5d28283ee197b/35.655270, 51.387757?units=si"
// request({ url: url , json: true }, (error, response) => {
//       if (error) {
//             console.log('Unable to connect to weather service!')
//       } else if (response.body.error) {
//             console.log('Unable to find location')
//       } 
      
//       else {
//             console.log(response.body.daily.data[0].summary +' this is currently '+ response.body.currently.temperature + ' degrees in javadieh. ' + 'there is a ' + response.body.currently.precipProbability + '% chance of rain')
//       }
// })



// const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibW9oYW1tYWRhbGlmYWxsYWh6YWQiLCJhIjoiY2s1MjlzeWVlMDJvbzNqczBkYzg3YW9nNSJ9.YcbFFDaj5BKooq7hhLm2Vw"
// request({ url: url2, json: true }, (error, response) => {
//         if (error) {
//             console.log('Unable to connect to weather service!')
//       } else if (response.body.features.length === 0) {
//             console.log('Unable to find location')
//       } else {
//       const lat = response.body.features[0].center[0]
//       const long = response.body.features[0].center[1]
//       console.log(lat , long)
//       }
// })



geocode('boston', (error, data) => {
 console.log('Error', error)
 console.log('Data', data)
})