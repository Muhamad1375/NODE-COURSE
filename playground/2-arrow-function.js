// const square = function (x) {
//       return x* x
// }



// const square = (x) => {
//       return x * x
// }


// const square = (x) => x * x


// console.log(square(2))


const event = {
      name: 'birthday party',
      geustLis: ['ali', 'nasrin', 'mahsa'],
      printGeustList() {
            console.log('Geust List for ' + this.name)
            this.geustLis.forEach((guest) => {
                  console.log(guest + ' is attending ' + this.name)
            });
      }
}

event.printGeustList()