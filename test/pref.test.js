const expect = require('expect');
const request = require('supertest');


const User = require('../models/user');

const UserPref = require('../models/preferences');

const app = require('../app.js'); 


//EDIT PREFERENCES TEST
 describe('PATCH /preferences/:name/edit', function() {
    it('Test update account settings route', async () => {
      //console.log(UserId)
        let user = await UserPref.findOne({ _id: UserId }).exec();

        const data = {
            dietPreferences: {vegan: true},
            healthPreferences: {dairy: true}
        }
        await request(app)
        .patch("/preferences/"+ user.name +"/edit")
          .send(data)
          .expect(200)
          .then(async (response) => {
            // Check the response
            //console.log(response)
            expect(response.body._id).toBe(user.id)
            expect(response.body.dietPreferences.vegan).toBe(data.dietPreferences.vegan)
    
            // Check the data in the database
            const newUpdateUser =  await User.findOne({ _id: response.body._id })
            expect(newUpdateUser).toBeTruthy()
            expect(newUpdateUser.dietPreferences.vegan).toBe(data.dietPreferences.vegan)
          })
       })
    });

