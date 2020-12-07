const expect = require('expect');
const request = require('supertest');


const User = require('../models/user');
const UserPref = require('../models/preferences');

const {autoNewPreferences} = require("../middleware/pref_middleware")

const app = require('../app.js'); 

 //GET PREFERENCESPAGE
 describe('GET  /preferences/:name/', function() {
    it('Test get preference page to populate user info', async () => {

        let user = await User.findOne({ email: 'tester@test.com' }).exec();
        autoNewPreferences(user)
        
        await request(app)
        .get("/preferences/"+ user.name )
          .expect(200)
          .then(async (response) => {
            let pref = await UserPref.findOne({ user: user._id}).exec();
            // Check the response
            //console.log(response.body._id)
            //console.log(pref.user)
            expect(user._id).toStrictEqual(pref.user)
            //expect(response.body._id).toStrictEqual(pref.user)

          })
       })
    });



//EDIT PREFERENCES TEST
 describe('PATCH /preferences/:name/edit', function() {
    it('Test update preferences route', async () => {

        //console.log(UserId)
        let user = await User.findOne({ email: 'tester@test.com' }).exec();
        autoNewPreferences(user)

        const data = {
            dietPreferences: {vegan: true},
            healthPreferences: {dairy: true}
        }
        await request(app)
        .patch("/preferences/"+ user.name +"/edit")
          .send(data)
          .expect(200)
          .then(async (response) => {
            let pref = await UserPref.findOne({ user: user._id}).exec();
            // Check the response
            //console.log(response.body)
            //console.log(user._id)
            //console.log(pref.user)

            expect(user._id).toStrictEqual(pref.user)
            expect(response.body.dietPreferences.vegan).toBeTruthy()
            expect(pref).toBeTruthy()
          })
       })
    });

