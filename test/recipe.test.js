const expect = require('expect');
const request = require('supertest');

const { displayRecipes} = require('../controllers/recipe_controller')
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
       //console.log(recipes.data[0])
        expect(recipes.status).toBe(200) 
        expect(recipes.data.length).toBe(2); //this was due to change the result limit to 2 for testing only
        expect(recipes).toBeTruthy()
    }).timeout(10000);
})

describe.only('Testing filtering return recipes with preference filters', () => {
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

// describe('Recipe Controller Display Recipes- API Call Functions', () => {
//     it('Test recipe controller', async function () {
//         const req = {
//             user: {
//                 username: "testusername"
//             }
//         };
//            let a = await displayRecipes(req)
//            expect(a).toBeTruthy()
//     }).timeout(10000);
// })


