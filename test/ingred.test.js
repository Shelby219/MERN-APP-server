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


//FAIL TESTS
// FAIL TEST-GET ALL INGREDIENTS FOR FRIDGE 
//NEED TO UNCOMMENT- passport.authenticate('jwt', {session: false}) in routes to work
  describe('FAIL TEST - GET /ingredients/:username/fridge', function() {
    it('Test get all ingredients on Fridge page with unknown user', async () => {
        await request(app)
        .get("/ingredients/"+ "sfdsf"+ "/fridge")
          .expect(500)
          .expect('Content-Type', /json/)
          .then( (response) => {
            //console.log(response)
            expect(response.body.error).toBe("Error retrieving ingredients")

          })
       })
    });

 //FAIL TEST- GET ALL INGREDIENTS FOR PANTRY 
  //NEED TO UNCOMMENT- passport.authenticate('jwt', {session: false}) in routes to work
  describe('FAIL TEST- GET /ingredients/:username/pantry', function() {
    it('Test get all ingredients on Pantry page with unknown user', async () => {
        await request(app)
        .get("/ingredients/"+ "sfsdf"+ "/pantry")
          .expect(500)
          .expect('Content-Type', /json/)
          .then( (response) => {
            expect(response.body.error).toBe("Error retrieving ingredients")
  
          })
       })
    });

//FAIL TEST- POST new Fridge Item TEST
 describe('FAIL TEST- POST /ingredients/:username/fridge/new', function() {
    it('Fail Test add new fridge item- invalid data', async () => {
    let user = await User.findOne({ email: 'tester@test.com' }).exec();
    const data = { rr: ["Milk",] }
    await request(app)
        .post("/ingredients/"+ user.username + "/fridge/new")
          .send(data)
          .expect(500)
          .expect('Content-Type', /json/)
          .then(async (response) => {
            //console.log(response)
            expect(response.body.error).toBe("Error adding ingredient");
          })   
       })
    });


//FAIL TEST - POST new PANTRY Item TEST
describe('FAIL TEST- POST /ingredients/:username/pantry/new', function() {
  it('Test add new pantry item- invalid data', async () => {
  let user = await User.findOne({ email: 'tester@test.com' }).exec();
  const data = { rrrrr: ["canola oil",]} 
  await request(app)
      .post("/ingredients/"+ user.username + "/pantry/new")
        .send(data)
        .expect(500)
        .expect('Content-Type', /json/)
        .then(async (response) => {
          expect(response.body.error).toBe("Error adding ingredient");
        }) 
     })
  });

//FAIL TEST- DELETE  Fridge Item TEST
 describe('FAIL TEST- DELETE /ingredients/:username/fridge/delete', function() {
    it('Fail Test with bad data delete fridge item', async () => {
    let user = await User.findOne({ email: 'tester@test.com' }).exec();
    const data = { rrr: "cheese" }
    await request(app)
        .delete("/ingredients/"+ user.username + "/fridge/delete")
          .send(data)
          .expect(500)
          .then(async (response) => {
         
          })  
       })
    });

  //FAIL TEST- DELETE  Pantry Item TEST
  describe('FAIL TEST- DELETE /ingredients/:username/pantry/delete', function() {
    it('Fail Test with bad data  delete pantry item ', async () => {
    let user = await User.findOne({ email: 'tester@test.com' }).exec();
    const data = { rrr: "water" }
    await request(app)
        .delete("/ingredients/"+ user.username + "/pantry/delete")
          .send(data)
          .expect(500)
          .then((response) => {
         
          })  
       })
    });


//FAIL TEST - DELETE ALL Fridge Items TEST
 describe('FAIL TEST- DELETE /ingredients/:username/fridge/clear-all', function() {
  it('Fail Test with bad params delete all fridge items', async () => {
  await request(app)
      .delete("/ingredients/"+ "adsadsaf" + "/fridge/clear-all")
        .expect(500)
        .then(async (response) => {
          expect(response.body.error).toBe("Error deleting ingredients");
        })  
     })
  });


//FAIL TEST- DELETE ALL Pantry Items TEST
 describe('FAIL TEST- DELETE /ingredients/:username/pantry/clear-all', function() {
  it('Fail Test with bad params delete all pantry items', async () => {
  await request(app)
      .delete("/ingredients/"+ "adasdasd" + "/pantry/clear-all")
        .expect(500) 
        .then(async (response) => {
          expect(response.body.error).toBe("Error deleting ingredients");
        })  
     })
  });



