const fs = require('fs')

fs.writeFileSync('notes.txt', 'my name is mohammadali')
fs.appendFileSync('notes.txt', ' this text is added')

