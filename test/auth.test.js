const expect = require('expect');
const request = require('supertest');

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
});

afterEach((done) => {
  tearDownData().exec(() => done());
});


// describe('registering a user', () => {
// 	let req = {
// 		body: {
// 			name: 'Test Name',
// 			email: 'hello@test.com',
//             password: '123456',
//             profile: 'test profile'
// 		},
// 	};
// 	it('should add a new user', function ()  {
//     let req = {
//       body: {
//         name: 'Test Name',
//         email: 'hello@test.com',
//               password: '123456',
//               profile: 'test profile'
//       },
//     };
// 		registerCreate(req);
//     const user =  User.find();
//     console.log(x)
//     expect(user.length).toBe(1);
// 	});
// });

describe('POST /user/register', function () {
  let data = {
     	name: 'Test Name',
     	email: 'hello@test.com',
      password: '123456',
      profile: 'test profile'
     	}
  it('respond with 200 and matching email', function (done) {
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


// describe('POST /user/register', function() {
//   it('responds with json', function(done) {
//     request(app)
//       .post('/user/register')
//       .send({
//           name: 'Test Name',
//           email: 'hello@test.com',
//           password: '123456',
//           profile: 'test profile'
//         })
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end(function(err, res) {
//         if (err) return done(err);
//         done();
//       });
//   });
// });

describe('POST /user/login', function() {
  it('responds with json', function(done) {
    request(app)
      .post('/user/login')
      .send({
            email: "tester@test.com", 
            password: "123456"
          })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      // .expect(function(res) {
      //   res.body.id = 'some fixed id';
      //   res.body.name = res.body.name.toLowerCase();
      // })
      //.expect(res.body).toEqual({ email: 'tester@test.com' })
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});


describe('Finding a user', function() {
  it('find a user by username', function(done) {
    User.findOne({ email: 'tester@test.com' }, function(err, user) {
      expect(user.email).toBe('tester@test.com');
      console.log("   email: ", user.email)
      done();
    });
  });

 });



 function setupData() {
  let date = Date.now();
  let testUser = {};
  testUser.name = 'Test User 1';
  testUser.email = 'tester@test.com';
  testUser.password = '123456';
  testUser.create_date = date;
  testUser.modified_date = date;
  return User.create(testUser);
}



function tearDownData() {
    return User.deleteMany();

}

