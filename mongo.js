// const mongoose = require('mongoose')

// if (process.argv.length < 3) {
//   console.log('Please provide the password as an argument: node mongo.js <password>')
//   process.exit(1)


// } else if (process.argv.length === 3){
//     const yourpassword = process.argv[2]
//     const url =
//         `mongodb+srv://fullstack:${yourpassword}@cluster0.6nuls.mongodb.net/person-app?retryWrites=true&w=majority`
    
//     mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

//     const personSchema = new mongoose.Schema({
//         name: String,
//         number: Number
//         })
    
//     const Person = mongoose.model('Person', personSchema)
    
    
//     Person.find({}).then(result => {
//         result.forEach(person => {
//           console.log(person.name, person.number)
//         })
//         mongoose.connection.close()
//       })
      
// } else {
//     const yourpassword = process.argv[2]
//     const name = process.argv[3]
//     const number = process.argv[4]

//     const url =
//     `mongodb+srv://fullstack:${yourpassword}@cluster0.6nuls.mongodb.net/person-app?retryWrites=true&w=majority`

//     mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

//     const personSchema = new mongoose.Schema({
//     name: String,
//     number: Number
//     })

//     const Person = mongoose.model('Person', personSchema)

//     const person = new Person({
//     name: name,
//     number: number
//     })

//     person.save().then(result => {
//     console.log('added', person)
//     mongoose.connection.close()
//     })
// }




  