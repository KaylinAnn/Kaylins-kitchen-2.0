const express = require('express')
const graphqlHTTP = require('express-graphql')
// const { graphql, buildSchema } = require('graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const axios = require("axios");
const path = require("path");

require('dotenv').config()

const app = express()

// app.use(cors())



// mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true })

// mongoose.connection.once('open', () => {
//   console.log('db connected');

// })

// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// }))

app.get("/auth/callback", (req, res) => {
  console.log('get request');

  // const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const payload = {
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_CLIENT_SECRET,
    code: req.query.code,
    grant_type: "authorization_code",
    //when in production, change http to ${protocol}
    redirect_uri: `http://${req.headers.host}/auth/callback`
  };

  function tradeCodeForAccessToken() {
    console.log('tradeCodeForAccessToken');

    return axios.post(
      `https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`,
      payload
    );
  }

  function tradeAccessTokenForUserInfo(accessTockenResponse) {
    console.log('tradeAccessTokenForUserInfo');

    const accessToken = accessTockenResponse.data.access_token;
    return axios.get(
      `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
      }/userinfo?access_token=${accessToken}`
    );
  }

  function storeUserInfoInDatabase(response) {
    console.log('storeUserInfoInDatabase');

    const auth0Id = response.data.sub;

    const db = req.app.get("db");
    return db
      .get_user_by_auth0_id(auth0Id)
      .then(users => {
        if (users.length) {
          const user = users[0];
          req.session.user = user;

          res.redirect("/dashboard");
        } else {
          const userArray = [
            auth0Id,
            response.data.name,
            response.data.email,
            response.data.picture
          ];
          return db
            .create_user(userArray)
            .then(() => {
              return db.get_user_by_auth0_id(auth0Id);
            })
            .then(newUser => {
              req.session.user = newUser[0];
              res.redirect("/dashboard");
            })
            .catch(error => {
              console.log("error w/ create_user", error);
              res.status(500).send("unknown1 error");
            });
        }
      })
      .catch(error => {
        console.log("error w/ create_user", error);
        res.status(500).send("unknown2 error");
      });
  }

  tradeCodeForAccessToken()
    .then(tradeAccessTokenForUserInfo)
    .then(storeUserInfoInDatabase)
    .catch(error => {
      console.log("error", error);
      res.status(500).send("unknown3 error");
    });
});

app.listen(4000, () => {
  console.log('listening on port 4000');

})
