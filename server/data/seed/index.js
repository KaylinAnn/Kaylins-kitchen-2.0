const mongoose = require('mongoose')
const axios = require('axios')
// const Book = require('../models/books')
// const Author = require('../models/authors')

require('dotenv').config()

// "2 large russet potatoes, peeled and cut into chunks".split("large")[1].split(",")[0].trim()

axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(function (response) {
    // console.log(response.data);

    const recipe = response.data.meals[0];

    // console.log(recipe[`strIngredient${1}`])
    const numbArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    let ingredientsArray = []

    numbArray.map(e => {
      if (!recipe[`strIngredient${e}`]) {
        console.log('empty', e);
        return ''
      } else {
        console.log(recipe[`strIngredient${e}`]);

        return ingredientsArray.push(recipe[`strIngredient${e}`])

      }
    })

    console.log(ingredientsArray);

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