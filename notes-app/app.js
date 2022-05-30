const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

//customize yargs version
yargs.version('1.1.0')

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
      handler: function (argv) {
            console.log('Title: ' +  argv.title)
            console.log('Body: ' + argv.body)
      }
})
// create remove command
yargs.command({
      command: 'remove',
      describe: 'remove a note',
      handler: function () {
            console.log('Removing the note')

      }
})

// create read comman
yargs.command({
      command: 'read',
      describe: 'read note',
      handler: function () {
            console.log('Read the note');
      }
})

// create list comman
yargs.command({
      command: 'list',
      describe: 'list the notes',
      handler: function () {
            console.log('Listing out all notes')
      }
})

//add,removemread,list

yargs.parse()