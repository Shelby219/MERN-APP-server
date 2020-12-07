const expect = require('expect');
const request = require('supertest');


//const User = require('../models/user');
const utilities = require('../utils/ingredients_utilities.js');

const app = require('../app.js'); 
const User = require('../models/user.js');


 //GET ALL FRIDGE PAGE
 describe('GET  /ingredients/:username/fridge', function() {
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
 describe('POST /ingredients/fridge/new', function() {
    it('Test update preferences route', async () => {
    let user = await User.findOne({ email: 'tester@test.com' }).exec();

    const data = { item: "Test Item" }

    await request(app)
        .post("/ingredients/"+ user.username + "/fridge/new")
          .send(data)
          .expect(201)
          .expect('Content-Type', /json/)
          .then(async (response) => {
            //let pref = await UserPref.findOne({ user: user._id}).exec();
            
            //console.log(response)
            expect(response.body.fridgeIngredients.length).toBe(1);
            expect(response.body.fridgeIngredients[0]).toBe("Test Item");
          
          })
          
       })
    });


// describe('addIngredient', () => {
//     it('should add a fridge ingredient', async () => {
//         const req = {
//             user: {
//                 _id: UserId
//             },
//             body: 
//                 "test ingredient"
//         };
//         await utilities.addIngredient(req).then((item) => {
//             console.log(item)
//             expect(item.fridgeIngredients.length).toBe(1);
//             expect(item.fridgeIngredients[0]).toBe("test ingredient");
//         })
//     });
// });