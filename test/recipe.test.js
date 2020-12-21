const expect = require('expect');
const request = require('supertest');


const {
	returnRecipesToBrowse
} = require("../utils/recipe_utilities")
const { basedOnPreferenceExtractor} = require('../helpers/recipe_helper')
const app = require('../app.js'); 


describe('Recipe Utils Display Recipes- API Call Functions', () => {
    it('Test recipe utils with returns recipes for browsing', async function () {
        const req = {
            user: {
                username: "testusername"
            }
        };
        let recipes = await returnRecipesToBrowse(req)
       // console.log(recipes.data[0])//this was due to change the result limit to 2 for testing only
      // console.log(recipes.data)
        expect(recipes.status).toBe(200) 
        expect(recipes.data.length).toBe(2); //this was due to change the result limit to 2 for testing only
        expect(recipes).toBeTruthy()
    }).timeout(10000);
})

describe('Testing filtering return recipes with preference filters', () => {
    it('Should return filter recipes', async function () {
        const req = {
            user: {
                username: "testusername"
            }
        };
        let recipes = await returnRecipesToBrowse(req)
        let filteredRecipes = basedOnPreferenceExtractor(recipes.data)
        console.log(filteredRecipes)
    }).timeout(10000);
})



//GET ALL SAVE RECIPES PAGE
describe.only('GET /recipes/saved-recipes', function() {
    it('Test get all user saved-recipes',  (done) => {
        request(app)
        .get("/recipes/saved-recipes")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          console.log(res)
          done();
          });
       })
    });



//GET SINGLE RECIPE PAGE
describe('GET /recipes/id', function() {
    it('Test get all a single saved-recipes',  async (done) => {
        let savedRecipe = await savedRecipe.findOne({ title: 'Test Recipe Title' }).exec();
        request(app)
        .get("/recipes/"+ savedRecipe.recipeId)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          console.log(res)
          done();
          });
       })
    });


//POST new Saved Recipe
describe('POST /recipes/add', function() {
    it('Test add new saved recipe', async () => {
        let data = {
            username: 'Test Name',
            recipeID: 34534,
            title: 'Test New Recipe',
            }
    await request(app)
        .post("/recipes/add")
          .send(data)
          .expect(201)
          .expect('Content-Type', /json/)
          .then(async (response) => {
            console.log(response.body)
          })   
       })
    });


//DELETE  Saved Recipe 
 describe('DELETE /recipes/:id', function() {
    it('Test a saved recipe', async () => {
    let savedRecipe = await savedRecipe.findOne({ title: 'Test Recipe Title' }).exec();
    await request(app)
    .delete("/recipes/"+ savedRecipe.recipeId)
          .send(data)
          .expect(204)
          .then(async (response) => {
            console.log(response)
          })  
       })
});


