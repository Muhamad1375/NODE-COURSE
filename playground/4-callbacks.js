// setTimeout(() => {
//       console.log('Two seconds are up')
// }, 2000);

// const names = ['mohammadali', 'mehdi', 'ali', 'john' ]
// const shortNames = names.filter((name) => {
//       return name.length <= 4
// })

// const geocode = (adress, callback) => {
//       setTimeout(() => {
//             const data = {
//                   latitude: 0,
//                   longtitude: 0
//             }
//             callback(data)
//       }, 2000);
// }


// geocode('philadelphia', (data) => {
//       console.log(data)
// })



const add = (a, b, callback) => {
            setTimeout(() => {

                  callback(a + b)
            }, 2000);
      }
      

add(1, 4, (sum) => {
      console.log(sum) // Should print: 5
  })




