const expect = require('expect');
const request = require('supertest');
const User = require('../models/user');
const app = require('../app.js'); 

//GET PREFERENCES PAGE
 describe('GET  /preferences/:name/', function() {
    it('Test get preference page to populate user info', async () => {

        let user = await User.findOne({ email: 'tester@test.com' }).exec();
        
        await request(app)
        .get("/preferences/"+ user.name )
          .expect(200)
          .then(async (response) => {
            let pref = await User.findOne({ email: 'tester@test.com' }).exec();
            // Check the response
            //console.log(response.body)
           // expect(user._id).toStrictEqual(pref.user)

          })
       })
    });

//EDIT PREFERENCES TEST
 describe('PATCH /preferences/:name/edit', function() {
    it('Test update preferences route', async () => {
        let user = await User.findOne({ email: 'tester@test.com' }).exec();
        const data = {
            dietPreferences: {vegan: true},
            healthPreferences: {dairy: true}
        }
        await request(app)
        .patch("/preferences/"+ user.name +"/edit")
          .send(data)
          .expect(200)
          .then(async (response) => {
            let pref = await User.findOne({ email: 'tester@test.com' }).exec();
            expect(response.body.dietPreferences.vegan).toBeTruthy()
            expect(pref.dietPreferences.vegan).toBeTruthy()
          })
       })
    });

//FAIL TESTS


//GET PREFERENCES PAGE
describe.only('FAIL TEST- GET  /preferences/:name/', function() {
   it('Test get preference page with username params invalid', async () => {

       await request(app)
       .get("/preferences/"+ "wrongusernamenotfound")
         .expect(422)
         .then(async (response) => {
   
          // console.log(response)
           expect(response.body.errors[0].username).toBe("User not found, invalid request"); 

         })
      })
   });
