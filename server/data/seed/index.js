const mongoose = require('mongoose')
const axios = require('axios')
// const Book = require('../models/books')
// const Author = require('../models/authors')

require('dotenv').config()

axios.get('https://api.edamam.com/search?q=chicken&app_id=43dc959a&app_key=4a73b5f32de593a4e72fcec4106a1503&from=0&to=3')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
// .finally(function () {
//   // always executed
// });




// mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true })



// mongoose.connection.once('open', () => {
//   console.log('db is running');
// })