const fs = require('fs')
// const book = {
//       title: 'Ego is the Enemy',
//       author: 'Ryan  Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// const data =  JSON.parse(dataJson)


// console.log(data.title)


// const myInfo = {

// }


const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const user = JSON.parse(dataJson)


user.name = 'mohammad'
user.age = 45


const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)