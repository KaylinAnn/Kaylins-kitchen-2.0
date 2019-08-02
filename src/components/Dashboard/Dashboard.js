import React, { Component } from 'react'
import './Dashboard.css'
import Nav from '../Nav/Nav'

export class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      // dummy data
      recipes: [{
        id: 52864,
        label: 'Mushroom & Chestnut Rotolo',
        image: 'https://www.themealdb.com/images/media/meals/ssyqwr1511451678.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=GNN7_ZSJ5YE',
        ingredients: ["Mushrooms", "Chestnuts", "Challots", "Garlic", "Rosemary", "Wild Mushrooms", "Soy Sauce", "White Wine", "Lasagne Sheets", "Breadcrumbs", "Sage", "Truffle Oil"],
        measurments: ["30g", "240g", "3", "3 cloves", "3 sprigs", "500g", "2 tblsp ", "125ml ", "350g", "4 tbsp", "1/2 handful ", "to serve"],
        directions: 'Soak the dried mushrooms in 350ml boiling water and set aside until needed. Blitz u00be of the chestnuts with 150ml water until creamy. Roughly chop the remaining chestnuts.Heat 2 tbsp olive oil in a large non-stick frying pan. Fry the shallots with a pinch of salt until softened, then add the garlic, chopped chestnuts and rosemary, and fry for 2 mins more. Add the wild mushrooms, 2 tbsp oil and some seasoning. Cook for 3 mins until they begin to soften. Drain and roughly chop the dried mushrooms (reserve the soaking liquid), then add those too, along with the soy sauce, and fry for 2 mins more.Whisk the wine, reserved mushroom liquid and chestnut cream together to create a sauce. Season, then add half to the mushroom mixture in the pan and cook for 1 min until the sauce becomes glossy. Remove and discard the rosemary sprigs, then set the mixture aside.\r\nHeat oven to 180C/160C fan/gas 4. Bring a large pan of salted water to the boil and get a large bowl of ice water ready. Drop the lasagne sheets into the boiling water for 2 mins or until pliable and a little cooked, then immediately plunge them into the cold water. Using your fingers, carefully separate the sheets and transfer to a clean tea towel. Spread a good spoonful of the sauce on the bottom two thirds of each sheet, then, rolling away from yourself, roll up the shorter ends. Cut each roll in half, then position the rolls of pasta cut-side up in a pie dish that you are happy to serve from at the table. If you have any mushroom sauce remaining after you\u2019ve rolled up all the sheets, simply push it into some of the exposed rolls of pasta.\r\nPour the rest of the sauce over the top of the pasta, then bake for 10 mins or until the pasta no longer has any resistance when tested with a skewer.\r\nMeanwhile, put the breadcrumbs, the last 2 tbsp olive oil, sage leaves and some seasoning in a bowl, and toss everything together. Scatter the rotolo with the crumbs and sage, then bake for another 10 mins, until the top is golden and the sage leaves are crispy. Leave to cool for 10 mins to allow the pasta to absorb the sauce, then drizzle with a little truffle oil, if you like, before taking your dish to the table.'
      }]
    }
  }

  render() {

    const mappedFeaturedRecipes = this.state.recipes.map(recipe => {
      return (
        <div>
          <div className='recipe' id={recipe}></div>
          <h1>{recipe.label}</h1>
          <img className='recipe-image' src={recipe.image} alt="recipe thumbnail" />

        </div>
      )
    })

    return (
      <div>
        {mappedFeaturedRecipes}
      </div>
    )
  }
}

export default Dashboard
