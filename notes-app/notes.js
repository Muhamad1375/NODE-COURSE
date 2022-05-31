const fs = require('fs')
const chalk = require('chalk')


//یه متن ساده رو برمیگردونه
const getNotes = () => 'your notes...'




const addNote = (title, body) => {
      //لود نوت فانکشن اون پایین منه که داره یه متن از نوت جیسون میخونه پارس میکنه و اگه متنی نباشه یه ارایه خالی میده
      // برای اینکه میخوام اجازه درست کردن لیست تکراری بهم نده و با اون لود نوت که قراره انچه من نوشتم رو برگردونه و اینجا میخوام بلا سرش بیارم
      //میگم لود نوت و بریز توی یه متغیر اون متغیر و فیلتر کن و اگر تایتلش با تایتل اون تو مساوی بود ننویس اگه نبود بنویس
      const notes = loadNotes()
      const duplicateNotes = notes.filter((note) => note.title === title)

      // const duplicateNotes = notes.filter(function (note) {
      //       return note.title === title
      // })

      if (duplicateNotes.length === 0) {
            notes.push({
                  title: title,
                  body: body
            })
            saveNotes(notes)

            console.log(chalk.green('New note added'))
      }else{
            console.log(chalk.red('Note title taken'))
      }


}


//remove note
const removeNote =  (title) =>  {
      const notes = loadNotes()
      const notesToKeep = notes.filter((note) => note.title !== title)

//این شرط و شرط بالا رو بررسی کنم
      if (notes.length > notesToKeep.length) {
            console.log(chalk.green('note removed'))

      } else {
            console.log(chalk.red('no note found'));

      }
      saveNotes(notesToKeep)







      //این بخش رو من نوشتم به صورت چالش که کار میکرد اما با آموزش متفاوت بود
      // const matchtitle = notes.filter(function(note) {
      //       return note.title === title
      // })

      // if (matchtitle.length != 0) {
      //       notes.pop({
      //             title: title,
      
      //       })
      //       saveNotes(notes)
      //       console.log('note removed')

      // } else {
      //       console.log('note can not be removed')

      // }

}

//انچه که من در ترمینال میزنم با این داره سیو میشه توی نوت جیسون گفتم هر چی اونجا زدم با این پارس کن و رایت کن توی نوت جیسون
const saveNotes = (notes) => {
      const dataJSON = JSON.stringify(notes)
      fs.writeFileSync('notes.json', dataJSON)
}



const loadNotes = () => {
      //ترای و کچ و گذاشتم که ارور طولانی نده و بجای ارور متن نداشتن برای ارایه خالی بده
 try {
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
 } catch (e) {
       return []
 }

}





// دوتا فانکشن بالا داره اکسپورت میشه برای استفاده توی اپ
module.exports = {
      getNotes: getNotes,
      addNote: addNote,
      removeNote: removeNote
}