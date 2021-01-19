const expect = require('expect');
const request = require('supertest');
const User = require('../models/user');
const app = require('../app.js'); 


//GET PREFERENCES PAGE
 //NEED TO UNCOMMENT- passport.authenticate('jwt', {session: false}) in routes to work
 describe('GET  /preferences/:username/', function() {
    it('Test get preference page to populate user info', async () => {
        let user = await User.findOne({ email: 'tester@test.com' }).exec();
        await request(app)
        .get("/preferences/"+ user.username )
          .expect(200)
          .then(async (response) => {
            let pref = await User.findOne({ email: 'tester@test.com' }).exec();
           // expect(user._id).toStrictEqual(pref.user)

          })
       })
    });

//EDIT PREFERENCES TEST
 describe('PATCH /preferences/:username/edit', function() {
    it('Test update preferences route', async () => {
        let user = await User.findOne({ email: 'tester@test.com' }).exec();
        const data = {
           vegan: true
        }
        await request(app)
        .patch("/preferences/"+ user.username +"/edit")
          .send(data)
          .expect(200)
          .then(async (response) => {
            let pref = await User.findOne({ email: 'tester@test.com' }).exec();
            expect(pref.preferences.vegan).toBeTruthy()
          })
       })
    });

//FAIL TESTS


//GET PREFERENCES PAGE
describe('FAIL TEST- GET  /preferences/:username/', function() {
   it('Test get preference page with username params invalid', async function() {

      await  request(app)
       .get("/preferences/")
         .expect(404)
         .then( (response) => {
            //console.log(response)

         })
      })
   });

//FAIL TESTS


