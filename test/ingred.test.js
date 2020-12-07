const expect = require('expect');
const request = require('supertest');


//const User = require('../models/user');
const utilities = require('../utils/ingredients_utilities.js');

const app = require('../app.js'); 
const User = require('../models/user.js');


 //GET ALL FRIDGE PAGE
 describe('GET /ingredients/:username/fridge', function() {
    it('Test get all ingredients on Fridge page', async () => {
        //console.log(UserId)
        let user = await User.findOne({ email: 'tester@test.com' }).exec();
        //console.log(user.username)
        await request(app)
        .get("/ingredients/"+ user.username+ "/fridge")
          .expect(200)
          .expect('Content-Type', /json/)
          .then( (response) => {
            //console.log(response)
            expect(response.body.username).toBe(user.username)

          })
       })
    });


//POST new Fridge Item TEST
 describe('POST /ingredients/:username/fridge/new', function() {
    it('Test update preferences route', async () => {
    let user = await User.findOne({ email: 'tester@test.com' }).exec();

    const data = { item: "Test Item" }

    await request(app)
        .post("/ingredients/"+ user.username + "/fridge/new")
          .send(data)
          .expect(201)
          .expect('Content-Type', /json/)
          .then(async (response) => {
            //console.log(response)
            expect(response.body.fridgeIngredients.length).toBe(3);
            expect(response.body.fridgeIngredients[2]).toBe("Test Item");
          
          })
          
       })
    });

//DELETE  Fridge Item TEST
 describe('DELETE /ingredients/:username/fridge/delete', function() {
    it('Test update preferences route', async () => {
    let user = await User.findOne({ email: 'tester@test.com' }).exec();

    const data = { item: "testing2" }

    await request(app)
        .delete("/ingredients/"+ user.username + "/fridge/delete")
          .send(data)
          .expect(204)
          .then(async (response) => {
            let user = await User.findOne({ email: 'tester@test.com' }).exec();
            //console.log(response)
            //console.log(user)
            expect(user.fridgeIngredients.length).toBe(1);
            expect(user.fridgeIngredients[0]).toBe("testing1");
          
          })
          
       })
    });



