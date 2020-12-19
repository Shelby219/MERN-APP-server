const expect = require('expect');
const request = require('supertest');

const { displayRecipes} = require('../controllers/recipe_controller')
const {
	returnRecipesToBrowse
} = require("../utils/recipe_utilities")
const app = require('../app.js'); 


//GET PREFERENCES PAGE
describe.only('Recipe Utils Display Recipes- API Call', () => {
    it('Test recipe utils', async function () {
        const req = {
            user: {
                username: "testusername"
            }
        };
        try {
            returnRecipesToBrowse(req)
    
        } catch (err) {
            console.log(err)
        }
    
        
    //     returnRecipesToBrowse(req)
    //     .then(recipes =>  console.log(recipes))
    //     .catch(e => console.log(e.message) /*res.status(400).json({
    //       message: 'Request to Spoonacular failed/unauthorized'
    //    /})*/)
    }).timeout(10000);
})
    // describe.only('GET  /recipes/browse', function() {
    //     it('Test get browse recipe route for API CALLS', async function(done) {
    //         request(app)
    //         .get("/recipes/browse" )
    //           //.expect(200)
    //           .then((response) => {

    //             //console.log(response)
    //             done()
    //           })
    //        })
    //     });