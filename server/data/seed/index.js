const mongoose = require('mongoose')
const axios = require('axios')
// const Book = require('../models/books')
// const Author = require('../models/authors')

require('dotenv').config()

// "2 large russet potatoes, peeled and cut into chunks".split("large")[1].split(",")[0].trim()

axios.get('https://api.edamam.com/search?q=chicken&app_id=43dc959a&app_key=4a73b5f32de593a4e72fcec4106a1503&from=0&to=3')
  .then(function (response) {
    const recipes = response.data.hits

    recipes.map(recipe => {
      let ingredientsArray = []
      console.log(recipe.recipe.ingredientLines);

      const measurmentsArray = ['grams', 'pounds', 'teaspoons', 'cups', 'tablespoons', 'cloves', 'large', 'cup', 'pound', 'teaspoon', 'clove', 'tablespoon', 'gram']
      recipe.recipe.ingredientLines.map(ingredient => {
        measurmentsArray.map(measurment => {
          if (ingredient.includes('salt') || ingredient.includes('peper')) {
            return ''
          } else if (ingredient.includes(measurment)) {
            let newIngredient = (ingredient.split(measurment)[1].split(",")[0].trim());
            console.log(newIngredient);
            return ingredientsArray.push(newIngredient)

          }
        })[0]

      })
      console.log("ingredients", ingredientsArray);
    })


    // console.log(response.data.hits);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
// .finally(function () {
//   // always executed
// });




mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true })



mongoose.connection.once('open', () => {
  console.log('db is running');
})