const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes')

//customize yargs version
yargs.version('1.1.0')
//از یارگ برای ورژن دادن و اینتراکتیو کردن دارم استفاده میکنم
//create add command
yargs.command({
      command: 'add',
      describe: 'Add a new note',
      builder: {
            title: {
                  describe: 'Note title',
                  demandOption: true,
                  type: 'string'
            },
            body: {
                  describe: 'note body',
                  demandOption: true,
                  type: 'string'
            }
      },
      handler(argv) {
            notes.addNote(argv.title, argv.body)
      }
})
// create remove command
yargs.command({
      command: 'remove',
      describe: 'remove a note',
      builder: {
            title: {
                  describe: 'Note remove',
                  demandOption: true,
                  type: 'string'
            }
      },
      handler() {
            notes.removeNote(argv.title)
      }
})

// create read comman
yargs.command({
      command: 'read',
      describe: 'read note',
      handler() {
            console.log('Read the note');
      }
})

// create list comman
yargs.command({
      command: 'list',
      describe: 'list the notes',
      handler() {
            console.log('Listing out all notes')
      }
})


//add,removemread,list

yargs.parse()