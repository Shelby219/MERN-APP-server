const expect = require('expect');
const request = require('supertest');
const authRequest = require('superagent');
const { CookieAccessInfo } = require('cookiejar')
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const {
  connectToDb,
  disconnectFromDb
} = require('./config');

const {
  insertPasswordToken
} = require('../utils/auth_utilities');
const User = require('../models/user');

const SavedRecipe = require('../models/recipe');

const app = require('../app.js'); 
//request = request('http://localhost:5555');
const agent = request.agent(app);
//const user1 = request.agent(app);

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
    let savedRecipe = await setUpRecipeData();
    UserId = user._id;
});

var SetCookie = null;
beforeEach( function () {
 agent
  .post('/user/login')
  .send({email: "tester@test.com", password: "abcdefg1!C"})
  .end( function(err, res) {
    // user1 will manage its own cookies
    // res.redirects contains an Array of redirects
    //console.log(res)
  
    if (err) {
      throw err;
    }
   console.log(res.headers['set-cookie'])
    SetCookie = res.headers['set-cookie']
    
  });  
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
      password: 'abcdefg1!C',
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
      .expect(200) //redirecting to home page
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});


//  //GET LOGIN PAGE
//  describe('GET /user/login', function() {
//   it('Test get Login user',  (done) => {
//       request(app)
//       .get("/user/login")
//       .expect(200)
//       .end(function(err, res) {
//         if (err) return done(err);
//         done();
//         });
//      })
//   });

//LOGIN USER TEST
describe('POST /user/login', function() {
  it('Test Login Route to redirect to home on success', function(done) {
    request(app)
      .post('/user/login')
      .send({
            email: "tester@test.com", 
            password: "abcdefg1!C"
          })
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(function(res) {
        expect(res.body.user).toBe('testusername');
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
 //NEED TO UNCOMMENT- passport.authenticate('jwt', {session: false}) in routes to work
 describe.only('GET /user/:username/account-settings', function() {
  it('Test get account settings page to populate user info', async () => {
     let user = await User.findOne({ email: 'tester@test.com' }).exec();

     await agent
      .get("/user/"+ user.username +"/account-settings")
        //.set('Cookie', SetCookie)
        //.expect(200)
        .then((response) => {
          // Check the response
          console.log(response.header)
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
      password: "TestPassword1$new",
      name: "Change Name"
    }
    await request(app)
		.patch("/user/"+ user.username +"/account-settings")
      .send(data)
      .expect(200)
      .then(async (response) => {
        // Check the response
        //expect(response.body._id).toBe(user.id)
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
  it('Test upload profile image to s3', async () => {
    let user = await User.findOne({ email: 'tester@test.com' }).exec();
    await request(app)
      .post("/user/"+ user.username +"/add-profile-picture")
      .attach('file', testImage)
      .expect(200)
      .then(async function(res) { 
       expect(res.body.success).toBeTruthy()
       //check db
    })  
  });
});


//EXPIRED LINK TEST- GET PASSWORD RESET
 describe('GET /user/reset-password', function() {
  it('Test get reset password page ', async () => {
     const token = crypto.randomBytes(20).toString('hex');
     let user = await User.findOne({ email: 'tester@test.com' }).exec();
     await insertPasswordToken(user, token)
     
     let checkuser = await User.findOne({ email: 'tester@test.com' }).exec();
     // console.log(checkuser)
     await request(app)
      .get("/user/reset-password", {
        params: {
          resetPasswordToken: checkuser.resetPasswordToken,
        }})
        .expect(403)
        .then(async (response) => {
          // Check the response
          //console.log(response)
          expect(response.text).toBe('password reset link is invalid or has expired')
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
      password: "TestPassword1$new",
      name: "Change Name"
    }
    await request(app)
		.patch("/user/"+ user.username +"/account-settings")
      .send(data)
      .expect(200)
      .then(async (response) => {
        // Check the response
        //expect(response.body._id).toBe(user.id)
        expect(response.body.email).toBe(data.email)

        // Check the data in the database
        const newUpdateUser =  await User.findOne({ _id: response.body._id })
        expect(newUpdateUser).toBeTruthy()
        expect(newUpdateUser.email).toBe(data.email)
      })
   })
});





//FAIL TESTS
//LOGIN USER TEST- FAIL TEST
describe('FAIL TEST- POST /user/login', function() {
  it('Test Login Route if wrong password supplied- failure', function(done) {
    request(app)
      .post('/user/login')
      .send({
            email: "tester@test.com", 
            password: "wrongpasswordtest"
          })
      .expect(401)
      .expect(function(res) {
        //console.log(res.text);
        expect(res.text).toBe('Unauthorized');
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
     	email: 'tester@test.com',
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
           //console.log(res.body)
           res.body.errors[0].email = 'E-mail already in use' ;
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
      username: 'newtestuser44',
      }
      await request(app)
          .patch("/user/"+ user.username +"/account-settings")
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(422)
          .then( function(res) {
           // console.log(res)
            expect(res.body.errors[0].email).toBe('Must be a valid email format');
            expect(res.body.errors[1].password).toBe('Password should not be empty, minimum eight characters, at least one letter, one number and one special character');
          }) 
      });
});


//FAIL TESTS


//REGISTER USER TEST- FAIL TEST
describe('FAIL TEST- POST /user/register', function () {
  let data = {
     	name: 'Fail Test Name',
     	email: 'failtest@test.com',
      password: 'abcdefg1!C',
      username: 'testusername',
     	}
  it('Test register user with username already existing respond with 422 server error', function (done) {
   // this.timeout(10000) 
      request(app)
          .post('/user/register')
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(422)
          .expect(function(res) {
            //console.log(res)
            expect(res.body.errors[0].username).toBe("Username already in use");
            //res.body.errors.email = "E-mail already in use";
          })
          .end(function(err, res) {
            if (err) return done(err);
            //console.log(res.body);
            done();
          })
          
      });
});

//REGISTER USER TEST- FAIL TEST
describe('FAIL TEST- POST /user/register', function () {
  let data = {
     	baddata: 'blahblah',
     	}
  it('Test register user with bad data respond with 422 server error', function (done) {
   // this.timeout(10000) 
      request(app)
          .post('/user/register')
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(422)
          .end(function(err, res) {
            if (err) return done(err);
            //console.log(res.body);
            done();
          })
          
      });
});




//Forgot password controller
//if success
//if error

//reset password get route
//if success
//if error

//reset password patch route
//if error
//if success



 function setupData() {
  let date = Date.now();
  let testUser = {};
  testUser.name = 'Test User 1';
  testUser.email = 'tester@test.com';
  testUser.username = 'testusername';
  testUser.password = 'abcdefg1!C';
  testUser.fridgeIngredients = ["chicken", "cheese"];
  testUser.createdDate = date;
  testUser.lastLogin = date;
  return User.create(testUser);
}

function setUpRecipeData() {
  let date = Date.now();
  let testRecipe = {};
  testRecipe.username = 'testusername';
  testRecipe._id = 3434;
  testRecipe.title = "Test Recipe Title";
  testRecipe.create_date = date;
  testRecipe.modified_date = date;
  return SavedRecipe.create(testRecipe);
}

afterEach((done) => {
  tearDownUsers().exec()
  tearDownRecipes().exec()
  done()
});

function tearDownUsers() {
  return User.deleteMany();
}


function tearDownRecipes() {
  return SavedRecipe.deleteMany();
}

module.exports = {
  setupData
};