const expect = require('expect');
const request = require('supertest');

const { displayRecipes} = require('../controllers/recipe_controller')
const {
	returnRecipesToBrowse
} = require("../utils/recipe_utilities")
const app = require('../app.js'); 



describe('Recipe Utils Display Recipes- API Call Functions', () => {
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



describe.only('Recipe Controller Display Recipes- API Call Functions', () => {
    it('Test recipe controller', async function () {
        const req = {
            user: {
                username: "testusername"
            }
        };
        try {
            displayRecipes(req)
            
    
        } catch (err) {
            console.log(err)
        }
        
    
    }).timeout(10000);
})