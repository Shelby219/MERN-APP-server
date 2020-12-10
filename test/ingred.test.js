const expect = require('expect');
const request = require('supertest');


//const User = require('../models/user');
const utilities = require('../utils/ingredients_utilities.js');

const app = require('../app.js'); 
const User = require('../models/user.js');


 //GET ALL INGREDIENTS FOR FRIDGE 
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
    it('Test add new fridge item', async () => {
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
    it('Test delete fridge item', async () => {
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


//DELETE ALL Fridge Items TEST
 describe('DELETE /ingredients/:username/fridge/clear-all', function() {
  it('Test delete all fridge items', async () => {
  let user = await User.findOne({ email: 'tester@test.com' }).exec();
  //console.log(user)
  await request(app)
      .delete("/ingredients/"+ user.username + "/fridge/clear-all")
        .expect(204)
        .then(async (response) => {
          let user = await User.findOne({ email: 'tester@test.com' }).exec();
          //console.log(response)
          //console.log(user)
          expect(user.fridgeIngredients.length).toBe(0);
        })  
     })
  });

 //GET ALL INGREDIENTS FOR PANTRY 
 describe.only('GET /ingredients/:username/pantry', function() {
  it('Test get all ingredients on Fridge page', async () => {
      //console.log(UserId)
      let user = await User.findOne({ email: 'tester@test.com' }).exec();
      //console.log(user.username)
      await request(app)
      .get("/ingredients/"+ user.username+ "/pantry")
        .expect(200)
        .expect('Content-Type', /json/)
        .then( (response) => {
          //console.log(response)
          expect(response.body.username).toBe(user.username)

        })
     })
  });
//POST new PANTRY Item TEST
describe('POST /ingredients/:username/pantry/new', function() {
    it('Test add new pantry item', async () => {
    let user = await User.findOne({ email: 'tester@test.com' }).exec();

    const data = { item: "Test Pantry Item" }

    await request(app)
        .post("/ingredients/"+ user.username + "/pantry/new")
          .send(data)
          .expect(201)
          .expect('Content-Type', /json/)
          .then(async (response) => {
            //console.log(response.body.pantryIngredients)
            expect(response.body.pantryIngredients.length).toBe(5);
            expect(response.body.pantryIngredients[4]).toBe("Test Pantry Item");
          
          })
          
       })
    });

    //DELETE  Pantry Item TEST
    describe('DELETE /ingredients/:username/pantry/delete', function() {
       it('Test delete pantry item ', async () => {
       let user = await User.findOne({ email: 'tester@test.com' }).exec();
   
       const data = { item: "water" }
   
       await request(app)
           .delete("/ingredients/"+ user.username + "/pantry/delete")
             .send(data)
             .expect(204)
             .then(async (response) => {
               let user = await User.findOne({ email: 'tester@test.com' }).exec();
         
               //console.log(user.pantryIngredients)
               expect(user.pantryIngredients.length).toBe(3);
               expect(user.pantryIngredients[0]).toBe("salt");
             })  
          })
       });
   

//DELETE ALL Pantry Items TEST
 describe('DELETE /ingredients/:username/pantry/clear-all', function() {
  it('Test delete all pantry items', async () => {
  let user = await User.findOne({ email: 'tester@test.com' }).exec();
  //console.log(user)
  await request(app)
      .delete("/ingredients/"+ user.username + "/pantry/clear-all")
        .expect(204)
        .then(async (response) => {
          let user = await User.findOne({ email: 'tester@test.com' }).exec();
          //console.log(response)
          //console.log(user)
          expect(user.pantryIngredients.length).toBe(0);
        })  
     })
  });