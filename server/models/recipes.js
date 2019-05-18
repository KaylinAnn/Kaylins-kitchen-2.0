const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
  label: String,
  image: String,
  videoUrl: String,
  ingredients: Array,
  measurments: Array,
  directions: String,


})

module.exports = mongoose.model('Recipe', recipeSchema)