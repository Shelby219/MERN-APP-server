const axios = require('axios');
const _ = require('lodash');


const getUser = function () {
    User.findOne({ username: req.user.username }).exec((err, user) => {
        if (err) {res.status(500)
            res.json({
                error: err.message
            })
        }
       return user
    });

    
};


const request = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/complexSearch/',
    headers: {
      'Accept': 'application/json',
      'X-Mashape-Key': process.env.RECIPE_API_KEY || 'getyourownapikeyatmashape'
    }
  });
  

 


const getRecipesFromAPI = function (req) {

    request.get(`?query=fillIngredients=false&ingredients=${req.query.ingredients}&limitLicense=true&number=25`)
    .then(recipes => res.send(recipes.data))
    .catch(e => res.status(400).json({
      message: 'Request to Spoonacular failed/unauthorized'
    }));


};

const getSingleRecipe =  function (req) {
   




};


module.exports = {
    getUser
    getRecipesFromAPI,
    getSingleRecipe
}