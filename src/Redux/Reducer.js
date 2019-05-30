const initialState = {
  user: {
    id: "",
    auth0id: "",
    name: "",
    email: "",
    picture: ""
  },
  usersPantry: [],
  ingredients: [],
  recipes: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}