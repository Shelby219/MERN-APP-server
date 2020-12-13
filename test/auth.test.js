const expect = require('expect');
const request = require('supertest');

const jwt = require("jsonwebtoken");
const {
  connectToDb,
  disconnectFromDb
} = require('./config');

const User = require('../models/user');

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
    let user = await setupData();
    UserId = user._id;
});


 //GET REGISTER USER PAGE
 describe('GET /user/register', function() {
  it('Test get register user',  (done) => {
      request(app)
      .get("/user/register")
      .expect(200)
      .end(function(err, res) {
        console.log(res)
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
      password: 'TestPassword1$',
      username: 'newtestuser',
      profile: 'test profile'
     	}
  it('Test register user endpoint respond with 200 and email', function (done) {
   // this.timeout(10000) 
      request(app)
          .post('/user/register')
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .expect(function(res) {
            //console.log(res)
            res.body.email = "hello@test.com";
          })
          .end(function(err, res) {
            if (err) return done(err);
            //console.log(res.body);
            done();
          })
          
      });
});

 //GET LOGOUT PAGE
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
  it('Test Login Route to redirect to home on success', function(done) {
    request(app)
      .post('/user/login')
      .send({
            email: "tester@test.com", 
            password: "TestPassword1$"
          })
      //.expect('Content-Type', /json/)
      .expect(302)
      .expect(function(res) {
        console.log(res);
        expect(res.text).toBe('Found. Redirecting to /home');
        //res.body.email = "tester@test.com";
      })
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
 describe.only('GET /user/:username/account-settings', function() {
  it('Test get account settings page to populate user info', async () => {
      let user = await User.findOne({ email: 'tester@test.com' }).exec();
      const testToken = jwt.sign({ sub: UserId }, process.env.JWT_SECRET);
      await request(app)
      .get("/user/"+ user.username +"/account-settings")
        .set('jwt',testToken)
        //.set('session', testToken)
      
        //.expect(200)
        .then((response) => {
          // Check the response
      console.log(response)
          //expect(response.body._id).toBe(user.id)
          //expect(response.body.email).toBe(user.email)
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
      name: "change name"
    }
    await request(app)
		.patch("/user/"+ user.username +"/account-settings")
      .send(data)
      .expect(200)
      .then(async (response) => {
        // Check the response
        expect(response.body._id).toBe(user.id)
        expect(response.body.email).toBe(data.email)

        // Check the data in the database
        const newUpdateUser =  await User.findOne({ _id: response.body._id })
        expect(newUpdateUser).toBeTruthy()
        expect(newUpdateUser.email).toBe(data.email)
      })
   })
});


//UPLOAD PROFILE IMAGE
//console.log(__dirname) ///Users/shelbyd/CODING/CA/Assignments/T3A2_MERN/server/test
const testImage = `${__dirname}/testimg.png`

describe('POST /user/:username/add-profile-picture', function() {
  it('Test upload profile image to s3', async function() {
    let user = await User.findOne({ email: 'tester@test.com' }).exec();
    await request(app)
      .post("/user/"+ user.username +"/add-profile-picture")
      .attach('file', testImage)
      .expect(200)
      .then(async function(res) { 
       expect(res.body.success).toBeTruthy()
       //check db
       let user = await User.findOne({ email: 'tester@test.com' }).exec();
       expect(user.profile).toBe(res.body.user.profile)
       //check it did null other user model parts
       expect(user.name).toBe(res.body.user.name)
       expect(user.email).toBe(res.body.user.email)
    })  
  });
});

//FAIL TESTS
//LOGIN USER TEST- FAIL TEST
describe('FAIL TEST- POST /user/login', function() {
  it('Test Login Route if wrong password supplied- failure redirect goes to login page again- should get 302 code', function(done) {
    request(app)
      .post('/user/login')
      .send({
            email: "tester@test.com", 
            password: "wrongpasswordtest"
          })
      .expect(302)
      .expect(function(res) {
        //console.log(res.text);
        expect(res.text).toBe('Found. Redirecting to /user/login');
      })
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
      
  });
});

//REGISTER USER TEST- FAIL TEST
describe('FAIL TEST- POST /user/register', function () {
  let data = {
     	name: 'Test Name',
     	email: 'wrongformatemail',
      password: 'wrongformatpassword',
      username: 'newtestuser',
     	}
  it('Test register user endpoint with non valid data', function (done) {
      request(app)
          .post('/user/register')
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(422)
          .expect(function(res) {
           res.body.errors[0].email = 'Must be a valid email format';
           res.body.errors[1].password = 'Password should not be empty, minimum eight characters, at least one letter, one number and one special character';
          })
          .end(function(err, res) {
            if (err) return done(err);
            done();
          })
          
      });
});

//GET ACCOUNT SETTINGS PAGE- FAIL TEST
 describe('FAIL TEST-GET /user/:username/account-settings', function() {
  it('Test get account settings with wrong params', async () => {
      let user = await User.findOne({ email: 'tester@test.com' }).exec();
      await request(app)
      .get("/user/"+ user.email +"/account-settings")
        .expect(404)
        .then((response) => {

          expect(response.body.error).toBe("there is no user found")
    
        })
     })
  });

//EDIT ACCOUNT SETTINGS TEST- FAIL TEST
describe('FAIL TEST- PATCH /user/:username/account-settings', function () {
  it('Test update account settings user endpoint with non valid data', async function () {
    let user = await User.findOne({ email: 'tester@test.com' }).exec();
    let data = {
      name: 'Test Name33',
      email: 'wrongformatemail',
     password: 'wrongformatpassword',
     username: 'newtestuser',
      }
      await request(app)
          .patch("/user/"+ user.username +"/account-settings")
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(422)
          .then( function(res) {
            //console.log(res)
            expect(res.body.errors[0].email).toBe('Must be a valid email format');
            expect(res.body.errors[1].password).toBe('Password should not be empty, minimum eight characters, at least one letter, one number and one special character');
            expect(res.body.errors[2].name).toBe('Must be text only'); 
          }) 
      });
});




 function setupData() {
  let date = Date.now();
  let testUser = {};
  testUser.name = 'Test User 1';
  testUser.email = 'tester@test.com';
  testUser.username = 'testusername';
  testUser.password = 'TestPassword1$';
  testUser.fridgeIngredients = ["testing1", "testing2"];
  testUser.createdDate = date;
  testUser.lastLogin = date;
  return User.create(testUser);
}


afterEach((done) => {
  User.deleteOne({ name: 'Test User 1' }).exec(() => done());
});


module.exports = {
  setupData
};