const expect = require('expect');
const request = require('supertest');

const { displayRecipes} = require('../controllers/recipe_controller')
const {
	getUser
} = require("../utils/recipe_utilities")
const app = require('../app.js'); 


//GET PREFERENCES PAGE
describe.only('Recipe Utils Display Recipes- API Call', () => {
    it('Test recipe utils', async () => {
        const req = {
            user: {
                username: "testusername"
            }
        };
        getUser(req)
    //    await getUser(req).then((post) => {
    //         expect(post.comments.length).toBe(1);
    //         expect(post.comments[0].username).toBe('tester2');
            
    //     })
    });
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