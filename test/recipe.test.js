const expect = require('expect');
const request = require('supertest');

const { displayRecipes} = require('../controllers/recipe_controller')
const {
	returnRecipesToBrowse
} = require("../utils/recipe_utilities")
const app = require('../app.js'); 



// describe('Recipe Utils Display Recipes- API Call Functions', () => {
//     it('Test recipe utils', async function () {
//         const req = {
//             user: {
//                 username: "testusername"
//             }
//         };
//         try {
//             returnRecipesToBrowse(req)
//         } catch (err) {
//             console.log(err)
//         }

//     //     returnRecipesToBrowse(req)
//     //     .then(recipes =>  console.log(recipes))
//     //     .catch(e => console.log(e.message) /*res.status(400).json({
//     //       message: 'Request to Spoonacular failed/unauthorized'
//     //    /})*/)
//     }).timeout(10000);
// })


describe('Recipe Controller Display Recipes- API Call Functions', () => {
    it('Test recipe controller', async function () {
        const req = {
            user: {
                username: "testusername"
            }
        };
           let a = await displayRecipes(req)
           //console.log(a.data[0])
           //console.log(a.data[0].nutrition)
           expect(a.status).toBe(200) 
           expect(a.data.length).toBe(2); //this was due to change the result limit to 2 for testing only
           expect(a).toBeTruthy()
           //expect(a.data).toBe()
    }).timeout(10000);
})


// describe('Recipe Controller Display Recipes- API Call Functions', function() {
//     const req = {
//         user: {
//             username: "testusername"
//         }
//     };
//     it('Test recipe controller', async function(done) {
//         await displayRecipes(req, function(res) {
//          console.log(res)
//         //expect(user.email).toBe('tester@test.com');
//         //console.log("   email: ", user.email)
//         done();
//       });
//     }).timeout(10000);
//    });
  