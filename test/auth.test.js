const expect = require('expect');
const mongoose = require('mongoose');
const User = require('../models/user');
const { registerNew,
        registerCreate,
        logOut,
        loginNew,
        loginCreate } = require('../controllers/auth_controller');
const app = require('../app.js'); 
const request = require('supertest');


 // set up connection for test database
const dbConn = 'mongodb://localhost/recipe_app_test'

// Use done to deal with asynchronous code - done is called when the hooks completes
before((done) => connectToDb(done));

// Disconnect from the test database after all tests run. Call done to indicate complete.
after((done) => {
    mongoose.disconnect(() => done())
})

beforeEach(async function () {
    //await tearDownData().exec();
    let user = await setupData();
    UserId = user._id;
});

afterEach((done) => {
  tearDownData().exec(() => done());
});

// Connect to the test database
function connectToDb(done) {
    // Connect to the database (same as we do in app.js)
    mongoose.connect(dbConn, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        },
        (err) => {
            if (err) {
                console.log('Error connecting to database', err);
                done();
            } else {
                console.log('Connected to FridgeMate Test database!');
                done();
            }
        });
}

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

describe('registering a user', () => {
	let req = {
		body: {
			name: 'Test Name',
			email: 'hello@test.com',
            password: '123456',
            profile: 'test profile'
		},
	};
	it('should add a new user', async () => {
		await registerCreate(req);
		const user = await User.find();
		expect(user.length).toBe(1);
      
	});
});

describe('testing Login function', function() {
    // it('Should success if credential is valid', function(done) {
    //   //console.log(user);
    //     request(app)
    //        .post('/user/login')
    //       //  .set('Accept', 'application/json')
    //       //  .set('Content-Type', 'application/json')
    //        .send({
    //          email: "tester@test.com", 
    //          password: "123456"
    //         })
    //        //.expect(200)
    //        //.expect('content-type': 'application/json')
    //        .expect(function(res) {
    //           console.log(res.session)
    //           console.log("gggsdgsdg")
    //          res.body.name.toEqual('Test User 1');
    //          res.body.email.toEqual('tester@test.com');
              
    //        })
    //        .end(done);
           
    // }); 
    it('should succeed with correct credentials', async () => {
  
      const res = await request(app)
        .post('/user/login')
        .send({
          email: "tester@test.com", 
          password: "123456"
        })
        console.log(res)
       expect(res.statusCode).toEqual(200) // this equals
       expect(res.body).toEqual({ email: 'tester@test.com' })
  
    })
});


function tearDownData() {
    return User.deleteMany();
}

