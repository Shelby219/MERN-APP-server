const expect = require('expect');
const request = require('supertest');
const app = require('../app.js'); 
const User = require('../models/user.js');


 //GET ALL INGREDIENTS FOR FRIDGE 
  //NEED TO UNCOMMENT- passport.authenticate('jwt', {session: false}) in routes to work
 describe('GET /ingredients/:username/fridge', function() {
    it('Test get all ingredients on Fridge page', async () => {
        let user = await User.findOne({ email: 'tester@test.com' }).exec();
        await request(app)
        .get("/ingredients/"+ user.username+ "/fridge")
          .expect(200)
          .expect('Content-Type', /json/)
          .then( (response) => {
            expect(response.body.username).toBe(user.username)

          })
       })
    });

//POST new Fridge Item TEST
 describe('POST /ingredients/:username/fridge/new', function() {
    it('Test add new fridge item', async () => {
    let user = await User.findOne({ email: 'tester@test.com' }).exec();
    const data = { item: ["Milk",] }
    await request(app)
        .post("/ingredients/"+ user.username + "/fridge/new")
          .send(data)
          .expect(201)
          .expect('Content-Type', /json/)
          .then(async (response) => {
            console.log(response.body.fridgeIngredients)
            expect(response.body.fridgeIngredients.length).toBe(3);
            expect(response.body.fridgeIngredients[2]).toBe("Milk");
          })   
       })
    });

//DELETE  Fridge Item TEST
 describe('DELETE /ingredients/:username/fridge/delete', function() {
    it('Test delete fridge item', async () => {
    let user = await User.findOne({ email: 'tester@test.com' }).exec();

    const data = { item: "cheese" }

    await request(app)
        .delete("/ingredients/"+ user.username + "/fridge/delete")
          .send(data)
          .expect(204)
          .then(async (response) => {
            let user = await User.findOne({ email: 'tester@test.com' }).exec();
            expect(user.fridgeIngredients.length).toBe(1);
            expect(user.fridgeIngredients[0]).toBe("chicken");
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
          expect(user.fridgeIngredients.length).toBe(0);
        })  
     })
  });

 //GET ALL INGREDIENTS FOR PANTRY 
  //NEED TO UNCOMMENT- passport.authenticate('jwt', {session: false}) in routes to work
 describe('GET /ingredients/:username/pantry', function() {
  it('Test get all ingredients on Fridge page', async () => {
      let user = await User.findOne({ email: 'tester@test.com' }).exec();
      await request(app)
      .get("/ingredients/"+ user.username+ "/pantry")
        .expect(200)
        .expect('Content-Type', /json/)
        .then( (response) => {
          expect(response.body.username).toBe(user.username)

        })
     })
  });

//POST new PANTRY Item TEST
describe('POST /ingredients/:username/pantry/new', function() {
    it('Test add new pantry item', async () => {
    let user = await User.findOne({ email: 'tester@test.com' }).exec();
    const data = { item: ["canola oil",]} 
    await request(app)
        .post("/ingredients/"+ user.username + "/pantry/new")
          .send(data)
          .expect(201)
          .expect('Content-Type', /json/)
          .then(async (response) => {
            console.log(response.body.pantryIngredients)
            expect(response.body.pantryIngredients.length).toBe(5);
            expect(response.body.pantryIngredients[4]).toBe("canola oil");
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
               expect(user.pantryIngredients.length).toBe(3);
               expect(user.pantryIngredients[0]).toBe("salt");
             })  
          })
       });
   
//DELETE ALL Pantry Items TEST
 describe('DELETE /ingredients/:username/pantry/clear-all', function() {
  it('Test delete all pantry items', async () => {
  let user = await User.findOne({ email: 'tester@test.com' }).exec();
  await request(app)
      .delete("/ingredients/"+ user.username + "/pantry/clear-all")
        .expect(204)
        .then(async (response) => {
          let user = await User.findOne({ email: 'tester@test.com' }).exec();
          expect(user.pantryIngredients.length).toBe(0);
        })  
     })
  });


//FAIL TEST

//IF get all ingredients errors 500

//if create new ingredient catches error

//If delete ingredient errors lines 51-53

//If delete ingredient errors 

//If delete all ingredients errors line 75-76

//If exec delete all errors lines 81-83

