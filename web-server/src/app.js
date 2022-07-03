const path = require('path')
const express = require('express')
const hbs = require('hbs')
const axios = require('axios');

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
      res.render('index', {
            title: 'Weather App',
            name: 'Ali'
      })
})

app.get('/about', (req, res) => {
      res.render('about', {
            title: 'About me',
            name: 'Ali'
      })
})

app.get('/help', (req, res) => {
      res.render('help', {
            helpText: 'This is some helpful text.',
            title: 'Help',
            name: 'Ali'
      })
})

app.get('/forcast/:city', async (req, res) => {
    const geo = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${req.params.city}.json?access_token=pk.eyJ1IjoibW9oYW1tYWRhbGlmYWxsYWh6YWQiLCJhIjoiY2s1MjlzeWVlMDJvbzNqczBkYzg3YW9nNSJ9.YcbFFDaj5BKooq7hhLm2Vw&limit=1`);
    if (!geo.data.features.length) res.sendStatus(404);
    const place = geo.data.features[0];
    const [lat, lng, name] = [
        place.center[1],
        place.center[0],
        place.place_name,
    ];
    const forcast = await axios.get(`https://api.darksky.net/forecast/9bca3813cf3b181726b5d28283ee197b/${lat},${lng}`);
    res.json({
        place_name: name,
        ...forcast.data,
    });
});

app.get('*', (req, res) => {
    // console.log(req.url);
      res.render('404', {
            title: 404,
            name: 'Ali',
            errorMessage: 'Page Not Found'
      })
})

app.listen(3000 , () => {
      console.log('Server is up on port 3000')
})
