const expect = require('expect');
const request = require('supertest');
const mongoose = require('mongoose');

const {
  connectToDb,
  disconnectFromDb
} = require('./config');

const User = require('../models/user');
const {
        registerCreate,
       } = require('../controllers/auth_controller');

const app = require('../app.js'); 


before((done) => {
  // Connect to the database (same as we do in app.js)
  connectToDb(done);
});

// Disconnect from the test database after all tests run. Call done to indicate complete.
after((done) => {
  disconnectFromDb(done);
})

beforeEach(async function () {
    //await tearDownData().exec();
    let user = await setupData();
    UserId = user._id;
    //console.log(user)
});


 //GET REGISTER USER PAGE
 describe('GET /user/register', function() {
  it('Test get register user',  (done) => {
      request(app)
      .get("/user/register")
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
        });
     })
  });

//REGISTER USER TEST
describe('POST /user/register', function () {
  let data = {
     	name: 'Test Name',
     	email: 'hello@test.com',
      password: '123456',
      profile: 'test profile'
     	}
  it('Test register user endpoint respond with 200 and email', function (done) {
      request(app)
          .post('/user/register')
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .expect(function(res) {
            res.body.email = "hello@test.com";
          })
          .end(function(err, res) {
            //console.log(res);
            if (err) return done(err);
            //console.log(res.body);
            done();
          }) 
  });
});


describe('GET /user/logout', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/user/logout')
      .expect(302) //redirecting to home page
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});


 //GET LOGIN PAGE
 describe('GET /user/login', function() {
  it('Test get Login user',  (done) => {
      request(app)
      .get("/user/login")
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
        });
     })
  });

//LOGIN USER TEST
describe('POST /user/login', function() {
  it('Test Login Route, get 200 and match email', function(done) {
    request(app)
      .post('/user/login')
      .send({
            email: "tester@test.com", 
            username: "usertester", 
            password: "123456"
          })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      // .expect(function(res) {
      //   console.log(res);
     
      //   res.body.email = "tester@test.com";
      // })
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

//FIND USER TEST
describe('Finding a User', function() {
  it('find a user by username', function(done) {
    User.findOne({ email: 'tester@test.com' }, function(err, user) {
      expect(user.email).toBe('tester@test.com');
      console.log("   email: ", user.email)
      done();
    });
  });
 });


 //GET ACCOUNT SETTINGS PAGE
 describe('GET /user/:username/account-settings', function() {
  it('Test get account settings page to populate user info', async () => {
      let user = await User.findOne({ email: 'tester@test.com' }).exec();

      await request(app)
      .get("/user/"+ user.username +"/account-settings")
        .expect(200)
        .then((response) => {
          // Check the response
          //console.log(response)
          expect(response.body._id).toBe(user.id)
          expect(response.body.email).toBe(user.email)
        })
     })
  });

 //EDIT ACCOUNT SETTINGS TEST
describe('PATCH /user/:username/account-settings', function() {
it('Test update account settings route', async () => {
  //console.log(UserId)
    let user = await User.findOne({ email: 'tester@test.com' }).exec();
    const data = {
      email: "updatetest@test.com", 
      password: "abcdef",
      name: "change name",
      fridgeIngredients: ["1","2"]
    }
   
    await request(app)
		.patch("/user/"+ user.username +"/account-settings")
      .send(data)
      .expect(200)
      .then(async (response) => {
        // Check the response
        //console.log(response)
        expect(response.body._id).toBe(user.id)
        expect(response.body.email).toBe(data.email)

        // Check the data in the database
        const newUpdateUser =  await User.findOne({ _id: response.body._id })
        expect(newUpdateUser).toBeTruthy()
        expect(newUpdateUser.email).toBe(data.email)
      })
   })
});

 function setupData() {
  let date = Date.now();
  let testUser = {};
  testUser.name = 'Test User 1';
  testUser.email = 'tester@test.com';
  testUser.username = 'testusername';
  testUser.password = '123456';
  testUser.createdDate = date;
  testUser.lastLogin = date;
  return User.create(testUser);
}

 function tearDownData() {
  return  User.deleteMany()
}

afterEach((done) => {
  tearDownData().exec(() => done());
});


module.exports = {
  setupData
};