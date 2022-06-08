const path = require('path')
const express = require('express')

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)

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
            name: 'Ali'
      })
})


app.get('/weather', (req, res) => {
      res.send({
            forecast: 'It is snowing',
            location: 'Philadelphia'
      })
})

app.listen(3000 , () => {
      console.log('Server is up on port 3000')
})