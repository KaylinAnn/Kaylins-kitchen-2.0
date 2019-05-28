const graphql = require('graphql')
const recipes = require('../models/recipes')
const ingredients = require('../models/ingredients')

const { GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphql

// "const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: {
//     recipe: {
//       type: recipeType,
//       args: {}
//     }
//   }
// })"



const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addIngredient: {
      type: ingredientType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let ingredient = new Ingredient({
          name: args.name
        })
        return ingredient.save()
      }
    },
    addRecipe: {
      type: recipeType,
      args: {
        label: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
        videoUrl: { type: new GraphQLNonNull(GraphQLString) },
        ingredients: { type: new GraphQLNonNull(GraphQLList(ingredient)) },
        measurments: { type: new GraphQLNonNull(GraphQLList(measurment)) },
        directions: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let recipe = new recipe({
          label: args.label,
          image: args.image,
          videoUrl: args.videoUrl,
          ingredients: args.ingredients,
          measurments: args.measurments,
          directions: args.directions
        })
        return recipe.save()
      }
    }
  }
})
// label: recipe.strMeal,
//     image: recipe.strMealThumb,
//     videoUrl: recipe.strYoutube,
//     ingredients: ingredientsArray,
//     measurments: [],
//     directions: recipe.strInstructions