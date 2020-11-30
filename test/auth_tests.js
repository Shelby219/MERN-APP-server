const expect = require('expect');
const mongoose = require('mongoose');
const User = require('../models/user');
const { registerNew,
        registerCreate,
        logOut,
        loginNew,
        loginCreate } = require('../controllers/auth_controller');


 // set up connection for test database
const dbConn = 'mongodb://localhost/recipe_app_test'

// Use done to deal with asynchronous code - done is called when the hooks completes
before((done) => connectToDb(done));

// Disconnect from the test database after all tests run. Call done to indicate complete.
after((done) => {
    mongoose.disconnect(() => done())
})

beforeEach(async function () {
    await clearData().exec();
    // Use await so we can access the postId, which is used by some tests
    let user = await setupData();
    UserId = user._id;
});

// // Delete test data after each test
// afterEach((done) => {
//     // Execute the deleteMany query
//     tearDownData().exec(() => done());
// });

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

describe('registerCreate', () => {
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
        console.log('test here');
        console.log(user);
	});
});

function clearData() {
    return User.deleteMany();
}