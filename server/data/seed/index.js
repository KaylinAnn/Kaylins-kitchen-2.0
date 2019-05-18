const mongoose = require('mongoose')
const axios = require('axios')
const { gql } = require('apollo-boost')
// const cors = require('cors')
// const express = require('express')

// const Book = require('../models/books')
// const Author = require('../models/authors')

require('dotenv').config()

const iterationArray = [1, 2, 3]

iterationArray.forEach(i => Array(i).fill(i).forEach(_ => {
  axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(function (response) {
      // console.log(response.data);

      const recipe = response.data.meals[0];

      const addRecipeMutation = function () {
        gql`
      mutation($label: String!, $image: String!, $videoUrl: String!, $ingredients: Array!, $measurments: Array!, $directions: String!){
        addRecipe(label: $label, image: $image, videoUrl: $videoUrl, ingredients: $ingredients, measurments: $measurments, directions: $directions){
          label
          id
        }
      }`}


      // label: String,
      // image: String,
      // videoUrl: String,
      // ingredients: Array,
      // measurments: Array,
      // directions: String,
      // console.log(recipe[`strIngredient${1}`])
      const numbArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      let ingredientsArray = []



      numbArray.map(e => {
        if (!recipe[`strIngredient${e}`]) {
          // console.log('empty', e);
          return ''
        } else {
          // console.log(recipe[`strIngredient${e}`]);

          return ingredientsArray.push(recipe[`strIngredient${e}`])

        }
      })
      console.log(ingredientsArray);




      // preventDefault()
      addRecipeMutation({
        variables: {
          label: recipe.strMeal,
          image: recipe.strMealThumb,
          videoUrl: recipe.strYoutube,
          ingredients: ingredientsArray,
          measurments: [],
          directions: recipe.strInstructions
        }
      })



    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })


}))

// const app = express()

// app.use(cors())


mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true })

mongoose.connection.once('open', () => {
  console.log('db is running');
}).catch((error) => {
  console.log(error);

})