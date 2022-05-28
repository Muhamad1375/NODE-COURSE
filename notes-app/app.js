import chalk from 'chalk';
// import { getNotes } from "./notes.js";


const command = process.argv[2]
console.log(process.argv)


 if (command === 'add') {
       console.log('adding note');
 }else if (command === 'remove'){
      console.log('Removing note')
 }