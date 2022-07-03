const request = require('request');



const geocode = (address, callback) => {
      const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibW9oYW1tYWRhbGlmYWxsYWh6YWQiLCJhIjoiY2s1MjlzeWVlMDJvbzNqczBkYzg3YW9nNSJ9.YcbFFDaj5BKooq7hhLm2Vw&limit=1'
    // DON'T USE FUCKING CALLBACK
    // axios
      request({ url, json: true }, (error, { body }) => {
            if (error) {
                  callback('Unable to connect to weather service!')
            } else if (body.features.lenght === 0) {
                  callback('Unable to find location. Try another search', undefined)
            } else {
                  callback(undefined, {
                        latitude: body.features[0].center[1],
                        longtitude: body.features[0].center[0],
                        location: body.features[0].place_name
                  })
            }
      })
}


module.exports = geocode
