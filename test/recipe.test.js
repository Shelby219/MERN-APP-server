const expect = require('expect');
const request = require('supertest');
const SavedRecipe = require('../models/recipe');

const {
	returnRecipesToBrowse
} = require("../utils/recipe_utilities")
const app = require('../app.js'); 


 //NEED TO UNCOMMENT- passport.authenticate('jwt', {session: false}) in routes to work
describe('Recipe Utils Display Recipes- API Call Functions', () => {
    it('Test recipe utils with returns recipes for browsing', async function () {
        const req = {
            user: {
                username: "testusername"
            }
        };
        let recipes = await returnRecipesToBrowse(req)
        expect(recipes.length).toBe(2); //this was due to change the result limit to 2 for testing only
        expect(recipes).toBeTruthy()
    }).timeout(10000);
})


//GET ALL SAVE RECIPES PAGE - Note that this test works because of line 27 of recipe Utils 
 //NEED TO UNCOMMENT- passport.authenticate('jwt', {session: false}) in routes to work
describe('GET /recipes/saved-recipes', function() {
    it('Test get all user saved-recipes',  (done) => {
        request(app)
        .get("/recipes/saved-recipes")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) return done(err);
          //console.log(res)
          done();
          });
       })
    });



//GET SINGLE RECIPE PAGE- IF IN DB
 //NEED TO UNCOMMENT- passport.authenticate('jwt', {session: false}) in routes to work
describe('GET /recipes/id', function() {
    it('Test get a single saved-recipes calling DB',  async () => {
        let savedRecipe = await SavedRecipe.findOne({ title: 'Test Recipe Title' }).exec();
    await request(app)
        .get("/recipes/"+ savedRecipe._id)
        .expect(200)
        .then(function(res) {
            expect(res.body._id).toBe(savedRecipe._id)
            expect(res.body.username).toBe(savedRecipe.username)
          })
        })
    });

    
//GET SINGLE RECIPE PAGE- IF NOT IN DB
describe('GET /recipes/id', function() {
    it('Test get a single saved-recipes calling Spoonacular API',   () => {
     request(app)
        .get("/recipes/"+ 1142012)
        .expect(200)
        .then(function(res) {
            //console.log(res.body)
            expect(res.body.id).toBe(1142012)
            expect(res.body.title).toBe('Feta-Brined Roast Chicken')
          })
        }).timeout(10000);
    });


//POST new Saved Recipe - Note that this test works because of line 74 of recipe controller
describe('POST /recipes/add', function() {
    it('Test add new saved recipe', async () => {
        let data = {
            username: 'testusername',
            recipeID: 1234,
            title: 'Add Test New Recipe',
            }
    await request(app)
        .post("/recipes/add")
          .send(data)
          .expect(201)
          .expect('Content-Type', /json/)
          .then(async (response) => {
            //console.log(response)
            expect(response.body.title).toBe('Add Test New Recipe')
            expect(response.body. _id).toBe(1234)
            expect(response.body. username).toBe('testusername')
          })   
       })
    });


//DELETE  Saved Recipe 
 describe('DELETE /recipes/:id', function() {
    it('Test delete from saved recipe', async () => {
    let savedRecipe = await SavedRecipe.findOne({ title: 'Test Recipe Title' }).exec();
    await request(app)
    .delete("/recipes/"+ savedRecipe._id)
          .expect(204)
          .then(async (response) => {
            let checkDeleted = await SavedRecipe.find({}).exec();
            //console.log(checkDeleted)
            expect(checkDeleted.length).toBe(0);
          })  
       })
});




//add validation
//FAIL TEST
//GET SINGLE RECIPE PAGE- IF NOT IN DB
describe('FAIL TEST- GET /recipes/:id ', function() {
    it('Fail test- Test get a single saved-recipes with incorrect ID',   (done) => {
     request(app)
        .get("/recipes/"+ "abc")
        .expect(422)
        .end(function(err, res) {
            //console.log(res)
            expect(res.body.errors[0].id).toBe("Recipe ID Not Found");
            if (err) return done(err);

            done();
          });
        }).timeout(10000);
    });


   //FAIL TESTS

 