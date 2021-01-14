# fridgeMate

##### Created by:
#### Adrienne Smith | [GitHub](https://github.com/aes89) | and Shelby El-rassi | [GitHub](https://github.com/Shelby219) |

---
### Back-end Repository
---

<div style="width:70%; margin: 0 auto;"><img src="./docs/home.png"/></div>

---

[![Netlify Status](https://api.netlify.com/api/v1/badges/f03a4191-5b3c-4ca3-98dc-37bc6c6758a2/deploy-status)](https://app.netlify.com/sites/fridgemate/deploys) 
##### Deployed App: https://fridgemate.netlify.app/

##### Documentation Repository: https://github.com/CA-MERN/MERN-Part-A-Docs

##### Client Repository: https://github.com/CA-MERN/MERN-client

##### Server Repository: https://github.com/CA-MERN/MERN-server

---

### Purpose
<details>
<summary>Click to expand</summary>

The purpose of this application is for users to be able to enter ingredients which are always on their grocery list/fridge with the intent to search for recipes made up from those ingredients. The idea for this web application stemmed from the situation of the first Australian lockdown of Covid19, in which stores sold out of a lot of popular and favourite grocery items of customers. An application such as this means users can input the ingredients they have currently at home and recipes including these ingredients will be displayed. Alongside this factor is the need for users to stick to a grocery budget, so they do not want to be constantly going to the store to get expensive ingredients. Also, the type of users using this app are ones that need recipe inspiration for their weekly meals, ones that search recipes based on dietary requirements and excluded ingredients, and also users that are new to the cooking scene and want to start with cooking by just utilising ingredients already at home. This app can help to minimise food waste by helping users to combine items they may not have made a meal with otherwise.

The overall goal of this application is a search application based on user ingredient lists, with the ability to save those recipes, rate and review recipes. 

</details>

---

### Features
<details>
<summary>Click to expand</summary>

#### MVP Features

* Users:
    * Sign up
    * Login
    * Logout
    * Edit account details in account settings.
    * Upload profile image.
    * Edit user preferences. 
* Navigation Bar:
    * When not signed in can navigate to Sign up/login pop out windows.
    * When not signed in the other nav links forward to sign up/login pop out windows.
    * When signed in can navigate to 'My Fridge'.
    * When signed in can navigate to 'My Pantry Staples'.
    * When signed in can navigate to 'My Preferences'.
    * When signed in can click the Search Recipes button and will forward to browse recipe page.
* Home Page:
    * Random food joke displayed each refresh.
    * Get Searching Today link with either returns recipe page or link to sign up.
* My Fridge Page:
    * Can add new ingredients.
    * Can delete ingredients.
    * Can clear whole fridge list.
    * Predictive text on the ingredient input.
* Pantry Staples Page:
    * Starts off with default staples (like salt, pepper, olive oil, vinegar).
    * Can add new staples.
    * Can delete staples.
    * Can clear whole staples list.
    * Predictive text on the ingredient input.
* Browse Recipe Search Page:
    * View list of returned recipes based on the user's fridge and pantry contents.
    * Save option under each recipe to save to user's recipe collection. 
    * Title of the page is how many recipes the user can make.
    * Each recipe you can see name, image, prep time.
    * Each recipe you can see how many ingredients you have to make it e.g. "You have 4/8 ingredients".
* Single Recipe page:
    * The recipe information includes name, image, source, prep time, servings and cuisines, dish types and diets. 
    * Ingredients are listed.
    * Directions are listed.
    * Button to save the recipe to user collection. 
    * If the recipe is in the users saved collection display data from that, else call the food API.
* Account Settings:
    * User can update their profile picture, name, email and password. 
    * Current data gets preloaded as placeholder.
    * Save button then loads and alerts the user of saved. 
* Preferences:
    * The user can set diet and health preferences (via checkboxes) which will automatically be used to filter the recipes returned. 
* Saved Recipes:
    * Each recipe you can see name, image, category, prep time.
    * Click on the recipe to go to single recipe page and display recipe data from saved data.
   
#### Future Features

* Search History capture.
* Oauth with sign up and login.
* Recipes of the week on the home page.
* Save recipes by different collections.
* Categories for ingredients in Fridge.
* User can rate a recipe.
* User can write a review on a recipe (including picture).
* Filter feature used to filter recipes, this include diet, health labels, cuisine and prep time. 
* Filter buttons on saved recipe page at the top to show dishes based off Breakfast, lunch, dinner, snack.

</details>

---

### Screen Shots
<details>
<summary>Click to expand</summary>

![Screen Shots of Website ](./docs/screenshot1.png)
![Screen Shots of Website ](./docs/screenshot2.png)
![Screen Shots of Website ](./docs/screenshot3.png)
![Screen Shots of Website ](./docs/screenshot4.png)
![Screen Shots of Website ](./docs/screenshot5.png)
![Screen Shots of Website ](./docs/screenshot6.png)
![Screen Shots of Website ](./docs/screenshot7.png)


</details>

---

### Tech stack
<details><summary>Click to expand</summary>

* **React JS** -
* **Node JS** -
* **HTML5**  -
* **CSS3** -
* **JavaScript** -
* **AWS s3** - (Profile Image Upload)
* **MongoDB** -
* **Spoonacular API** -
* **Heroku**  - (Deployment Server)
* **Netlify** - (Deployment Client)
* **GitHub** - (Version Control)

</details>

---

### Libraries and Dependencies

<details>
<summary>Click to expand</summary>

**Server**

* **express 4.17.1** - description
* **mongoose 5.7.1** - description
* **mongoose-bcrypt ^1.9.0** - description
* **express-session 1.17.1** - description
* **connect-mongo 3.2.0** - description
* **cors 2.8.5** - description
* **passport 0.4.1** - description
* **passport-jwt  4.0.0** - description
* **passport-local 1.0.0** - description
* **dotenv 8.2.0** - description
* **body-parser 1.19.0** - description
* **cookie-parser 1.4.5** - description
* **axios 0.21.1** - description
* **aws-sdk ^2.805.0** - description
* **multer 1.4.2** - description
* **multer-s3 2.9.0** - description
* **celebrate 13.0.4** - description
* **express-validator 6.8.0** - description
* **jsonwebtoken 8.5.1** - description
* **nodemailer 6.4.17** - description

**Server Development** 

* **nodemon 1.19.2** - description
* **mocha 6.2.0** - description
* **expect 24.9.0** - description
* **nyc 15.1.0** - description
* **supertest 6.0.1** - description


**Client**

* **react 17.0.1** - description
* **react-dom 17.0.1** - description
* **react-router-dom 5.2.0** - description
* **react-scripts 4.0.1** - description
* **formik 2.2.5** - description
* **history 5.0.0** - description
* **axios 0.21.1** - description
* **react-redux 7.2.2** - description
* **@reduxjs/toolkit** - description
* **redux-thunk 2.3.0** - description
* **react-helmet 6.1.0** - description
* **react-modal 3.12.1** - description
* **react-loading 2.0.3** - description
* **react-reveal 1.2.2** - description
* **react-toastify 6.2.0** - description
* **react-spring 8.0.27** - description
* **material-auto-rotating-carousel 3.0.2** - description
* **react-swipeable-view 0.13.9** - description
* **material UI** - description
* **@material-ui/core 4.11.2** - description
* **@material-ui/icons 4.11.2** - description
* **@material-ui/lab 4.0.0-alpha.57** - description

* **@testing-library/jest-dom 5.11.4** - description
* **@testing-library/react 11.1.0** - description
* **@testing-library/user-event 12.1.10** - description

**Client Development**

* **cypress 6.2.1** - description
* **@babel/core 7.12.9** - description
* **@babel/preset-env 7.12.7** - description
* **@babel/preset-react 7.12.7** - description
* **babel-jest 26.6.3** - description
* **identity-obj-proxy 3.0.0** - description
* **jest-transform-stub 2.0.0** - description

</details>

---

### API Endpoints

<details>
<summary>Click to expand</summary>

| User | Ingredients | Preferences| Recipes| 
|:---:|:---:|:---:|:---:|
|POST user/register |GET ingredients/:username/fridge| GET preferences/:username| GET recipes/browse|
|POST user/login |POST ingredients/:username/fridge/new|PATCH preferences/:username/edit|GET recipes/saved-recipes|
|GET user/logout |DELETE ingredients/:username/fridge/delete|   |GET recipes/:id|
|GET user/:username/account-settings |DELETE ingredients/:username/fridge/clear-all|   |POST recipes/add|
|PATCH user/:username/account-settings |GET ingredients/:username/pantry|    |DELETE recipes/:id|
|POST user/forgot-password|POST ingredients/:username/pantry/new|||
|GET user/reset-password|DELETE ingredients/:username/pantry/delete|||
|PUT user/update-password|DELETE ingredients/:username/pantry/clear-all|||
|POST user/:username/add-profile-picture||| |

</details>

---

## Testing

This application has been testing in both Chrome and FireFox on Mac OS Big Sur 11.1.

Our application has gone through comprehensive testing with Mocha for the Server and Cypress for the client. Along with countless manual tests using Postman and the console. 

### Manual Testing Log - Development

#### Server 

<details>
<summary>Click to expand</summary>

| Date | Feature | Test | Notes| 
|:---:|:---:|:---:|:---:|
| 16/12/2020 | https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken,+cheese&number=25&apiKey={API KEY HERE} | Correct | Spooancular FIND BY INGREDIENTS API Endpoint test via Postman |
| 16/12/2020 | https://api.spoonacular.com/recipes/complexSearch?includeIngredients=lemon,strawberries&fillIngredients=true&intolerances=gluten&number=25&apiKey={API KEY HERE} | Correct | Spooancular COMPLEX SEARCH API Endpoint test via Postman |
| 16/12/2020 | https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey={API KEY HERE}| Correct | Spooancular API Endpoint test via Postman |
| 16/12/2020 | https://api.spoonacular.com/recipes/informationBulk?ids=715538,716429&apiKey={API KEY HERE} |Correct | Spooancular BULK RECIPE SEARCH VIA ID API Endpoint test via Postman |
| 16/12/2020 | https://api.spoonacular.com/recipes/random?number=2&apiKey={API KEY HERE} | test | Spooancular RANDOM RECIPE SEARCH API Endpoint test via Postman |
| 16/12/2020 | FUNCTION -  ingredientJoiner() | Console Test | First Tested via console with dummy data, before incorporating into Mocha Unit Testing|
| 16/12/2020 | FUNCTION -  preferenceSeparator() | Console Test | First Tested via console with dummy data, before incorporating into Mocha Unit Testing| 
| 16/12/2020 | FUNCTION -  queryEditor() | Console Test | First Tested via console with dummy data, before incorporating into Mocha Unit Testing|
| 16/12/2020 | FUNCTION -  userQueryBuilder() | Console Test | First Tested via console with dummy data, before incorporating into Mocha Unit Testing|
| 24/12/2020 | FUNCTION -  recipeIdGetter() | Console Test | First Tested via console with dummy data, before incorporating into Mocha Unit Testing|
| Date | Feature | Test | Notes| 


</details>

#### Client

<details>
<summary>Click to expand</summary>

| Date | Feature | Test |
|:---:|:---:|:---:|
| 07/12/2020 | Preferences creates false/true object | Form completed manually, able to console log returned object showing { "vegetarian": true, "vegan": false ...} |
| 08/12/2020 | Log in and Register Modals | Able to click on Log in or Register, modal appears. Able to click on Log in or Register within modal to switch forms. |
| 24/12/2020 | User register | Manual Testing via the console checking if the redux state, and local storage was updated on register then login. |
| 24/12/2020 | User login | Manual Testing via the console checking if the redux state, and local storage was updated on login. Additionally checking the JWT storage as cookie.|
| 24/12/2020 | User Logout | Manual Testing via the console. |
| 25/12/2020 | User Settings | Manual Testing via the console checking if the redux state, and local storage was updated on useEffect calling the DB get request and returning the user data.|
| 25/12/2020 | User Settings Update | Manual Testing via the console. |
| 28/12/2020 | Browse Recipe Page| Json File of test data used to load the page |
| 28/12/2020 | Browse Recipe Page| Manual Testing via the console checking if the redux state, and local storage was updated. |
| 06/01/2021 | Fridge Page| Manual Testing via the console. |
| 06/01/2021 | Pantry Page| Manual Testing via the console. |
| 06/01/2021 | Add New Fridge Ingredient | Manual Testing via the console.|
| 06/01/2021 | Add New Pantry Ingredient | Manual Testing via the console.|
| 06/01/2021 | Delete Fridge Ingredient | Manual Testing via the console.|
| 06/01/2021 | Delete Pantry Ingredient | Manual Testing via the console.|
| 06/01/2021 | Delete All Fridge Ingredients | Manual Testing via the console.|
| 06/01/2021 | Delete All Pantry Ingredients | Manual Testing via the console.|
| 11/01/2021 | Forgot Password | Test Account created to send forgot password request. |
| 11/01/2021 | Reset Password | Manual Testing via the console. |
| 11/01/2021 | Update Password | Manual Testing via the console. |
| 07/01/2021 | Saved Recipe Page| Json File of test data used to load the page |
| 12/01/2021 | Add Saved Recipe | Manual Testing via the console. |
| 12/01/2021 | Delete Saved Recipe | Manual Testing via the console. |

</details>

---

### Automated Testing Log - Development

#### Server 

<details>
<summary>Click to expand</summary>

  
![Image of tests](./docs/testhtml.png)

#### Expecting Tests
| Date | Feature | Test | Notes| 
|:---:|:---:|:---:|:---:|
| 01/12/2020 | GET Register User | Passing |   |
| 01/12/2020 | POST Register User | Passing |   |
| 01/12/2020 | GET Login User | Passing |   |
| 01/12/2020 | POST Login User | Passing |   |
| 08/12/2020 | GET Logout User | Passing |   |
| 01/12/2020 | Find a User from DB | Passing |   |
| 06/12/2020 | GET User Settings | Passing | Passes, but being able to test with this middleware (passport.authenticate('jwt', {session: false})) not in place |
| 06/12/2020 | PATCH Edit User Settings | Passing |   |
| 07/12/2020 | GET User Preferences  | Passing | Passes, but being able to test with this middleware (passport.authenticate('jwt', {session: false})) not in place  |
| 07/12/2020 | PATCH Edit User Preferences  | Passing  | Ensure req.body.preference is updated in codebase  |
| 07/12/2020 | GET Fridge Ingredients | Passing |  Passes, but being able to test with this middleware (passport.authenticate('jwt', {session: false})) not in place |
| 07/12/2020 | POST New Fridge Ingredient | Passing |   |
| 08/12/2020 | DELETE Fridge Ingredient | Passing |   |
| 10/12/2020 | DELETE ALL Fridge Ingredients | Passing |   |
| 08/12/2020 | GET Pantry Ingredients | Passing |  Passes, but being able to test with this middleware (passport.authenticate('jwt', {session: false})) not in place |
| 08/12/2020 | POST New Pantry Ingredient| Passing |   |
| 08/12/2020 | DELETE Pantry Ingredient | Passing |   |
| 10/12/2020 | DELETE ALL Pantry Ingredients | Passing |   |
| 09/12/2020 | POST Upload profile picture to s3 | Passing |   |
| 16/12/2020 | GET - Browse Recipes- via Recipe Utils  returnRecipesToBrowse(req) | Passes, but being able to test with this middleware (passport.authenticate('jwt', {session: false})) not in place | This function tests finding a User in Db per params, builds the query info per the data from user, uses that data to axios request Spoonacular API for recipes based off ingredients, then collect those recipes IDs, sanitize the data, then use the IDS for another API call to get the detailed recipe information. |
| 20/12/2020 | Recipe Controller  displayRecipes(req) | Passing |  |
| 21/12/2020 | GET All Saved Recipes | Passing | Passes, but being able to test with this middleware (passport.authenticate('jwt', {session: false})) not in place && Line 27 of recipe utils allowed me to test it using test user |
| 21/12/2020 | GET Single Saved Recipes if in DB | Passing | Passes, but being able to test with this middleware (passport.authenticate('jwt', {session: false})) not in place |
| 21/12/2020 | GET Single Saved Recipes if not in DB- use Spoonacular | Passing | Passes, but being able to test with this middleware (passport.authenticate('jwt', {session: false})) not in place && Double check this- async promise |
| 22/12/2020 | POST Add new saved recipe | Passing | Line 74 of recipe controller allowed me to test using test user |
| 22/12/2020 | DELETE A saved recipe | Passing |  |
| 11/01/2020 | POST Forgot Password | &cross; | Notes| 
| 11/01/2020 | GET Reset Password with token | &cross; | Notes| 
| 11/01/2020 | GET Reset Password with token- expired link| Passing | Notes| 
| 11/01/2020 | PUT Reset Password in DB | &cross; | Notes| 

#### Expect to Fail Tests

| Date | Feature | Test | Notes| 
|:---:|:---:|:---:|:---:|
| 09/12/2020 | POST Login User- Incorrect Password  | Passing |   |
| 09/12/2020 | POST Register User- Incorrect Email and Password Format  | Passing |   |
| 09/12/2020 | GET User Settings- Incorrect Params  | Passing |   |
| 09/12/2020 | PATCH User Settings- Incorrect  Email, Password, Name Format  | Passing |   |
| 22/12/2020 | GET Single Saved Recipes- Recipe ID not found  | Passing |  |
| 11/01/2020 | POST Register Create- username already existing| Passing | Notes| 
| 11/01/2020 | POST Register Create- if Error is thrown when creating user | Passing | Notes| 
| 11/01/2020 | GET All Ingredients-Fridge- if Error is thrown 500 | Passing | Notes| 
| 11/01/2020 | GET All Ingredients-Pantry- if Error is thrown 500 | Passing | Notes| 
| 11/01/2020 | POST New Ingredient-Fridge-- if Error is thrown 500 | Passing | Notes| 
| 11/01/2020 | POST New Ingredient-Pantry-- if Error is thrown 500 | Passing | Notes| 
| 11/01/2020 | DELETE A Ingredient-Fridge- if Error is thrown 500 | Passing | Notes| 
| 11/01/2020 | DELETE A Ingredient-Pantry- if Error is thrown 500 | Passing | Notes| 
| 11/01/2020 | DELETE All Ingredients-Pantry- if Error is thrown 500 | Passing | Notes| 
| 11/01/2020 | DELETE All Ingredients-Fridge- if Error is thrown 500 | Passing | Notes| 
| 11/01/2020 | GET Browse Recipes- if Error is thrown 500 | &cross; | Notes| 
| 11/01/2020 | GET Saved Recipes- if Error is thrown 500 | &cross; | Notes| 
| 11/01/2020 | GET A Recipe- if Error is thrown 500 | &cross; | Notes| 
| 11/01/2020 | DELETE A Recipe- if Error is initially thrown | &cross; | Notes| 
| 11/01/2020 | DELETE A Recipe- if Error is thrown 500 | &cross; | Notes| 
| 11/01/2020 | POST Forgot Password- if Error is thrown 500 | &cross; | Notes| 
| 11/01/2020 | GET Reset Password with token- if Error is thrown 500 | &cross; | Notes| 
| 11/01/2020 | PUT Reset Password in DB- if Error is thrown 500 | &cross; | Notes| 
</details>

#### Client

<details>
<summary>Click to expand</summary>

| Feature | Test |
|:---:|:---:|
| test | test |

</details>

---
###  Testing  - Production

#### Server

<details>
<summary>Click to expand</summary>

| Date | Feature | Test | Notes | Refactored |
|:---:|:---:|:---:|:---:|:---:|
|  |  |  | |  |


</details>

#### Client
<details>
<summary>Click to expand</summary>

| Date | Feature | Test | Notes | Refactored |
|:---:|:---:|:---:|:---:|:---:|
| 11/01/2020 | Register | Register an Account | Password validation too complex, simplify | &cross; |
| 11/01/2020 | Home Page | Initial Application View | Onboarding needed for application explanation | &cross; |
| 11/01/2020 | Home Page | Initial Application View | Onboarding needed for application explanation | &cross; |
| 11/01/2020 | Fridge Page | Initial View | Description/prompt needed for adding ingredients | Yes |
| 11/01/2020 | Pantry Page | Initial View | Description/prompt needed for adding Staples | Yes |
| 11/01/2020 | Preferences Page | Initial View | Description/prompt needed for choosing preferences | Yes |
| 11/01/2020 | Home | Initial View | Help button needed in navigation | Yes |
| 11/01/2020 | Browse Recipes | Page Load | Additional loading time needed for recipes to return from DB | Yes |


</details>

---


### Planning & Project Management

<details>
<summary>Click to expand</summary>

##### Initial Management Set Up

As shown below we organised our planning based cards showing the rubric, testing, server, client and nice to have. With additional cards for development and production for any notes or tasks needed to be recorded at a later date. 

<img src="./docs/trello/firstplan.png" alt="initial planning" width="500" height="400"/>
<img src="./docs/trello/firstplan-2.png" alt="initial planning"  width="500" height="400"/>


We determined that setting weekly/fortnightly sprints was an ideal format for our project. We created a card in Trello that organised them by date and we were able to form checklists of what we wanted to have completed at the end of each sprint for the front-end and back-end. Whilst working we have a current doing card and then a completed card which we are able to distinguish each feature/component being worked on and what is completed. Additionally a card for revision proved helpful as we would have tasks completed, but they would in turn need revising/additional testing later on.

<img src="./docs/trello/sprintplanning.png" alt="sprint planning" width="60%" />

In the initial planning stages we planned our Trello for the server/client based off features which would be the names of the branches. Our first feature for server/client was the user and during the first Sprint it was decided Shelby would complete the back-end code and testing and Adrienne would complete the front-end code and testing.  Each morning we begin with our own stand up in which we show what we have worked on, explained our code, listed any challenges and also any wins. Since we are working on back-end and front-end separate, this ensures we are both know what is happening on each feature. 

Initially we were going to switch front-end and back-end for each feature, but we decided for the MVP product that Shelby would stick to the back-end and Adrienne on the front-end to ensure we delivered a great MVP product on time. This plan tailored to each of our strengths. This being said, once the MVP is completed all our nice to have features that we want to implement, we will switch roles for the implementation of these features. Mid-way during the projects timeline, Shelby did start completing the client side styling code along with the code which connects the front-end and the back-end, this allowed for Adrienne to continue completing the client-side testing and main react code for the features. 


</details>

#### Sprint 1- 30/11- 6/12

<details>
<summary>Click to expand</summary>

<img src="./docs/trello/sprint1-1.png" alt="sprint 1 card 1" width="80%" />
<img src="./docs/trello/sprint1-2.png" alt="sprint 1 card 1" width="80%" />
<img src="./docs/trello/sprint1-3.png" alt="sprint 1 card 1"  width="80%" />

###### USER BRANCH

At this start of this Sprint, Shelby set up the initial back-end server code and all the express/mongo/mongoose connections and tested it was all set up correctly. Then the first component worked on was the implementation of passport, passport-JWT and jsonwebtoken for user account and authorisation. The implementation of this involved using the express session to pass around the JWT. Alongside this was the initial user account routes , the setting up of the testing of these API end points was a steep initial learning curve. This began with researching testing frameworks in which Mocha along with super test was chosen. Shelby decided on constructing the tests with a description of each Http request eg. 'GET /ingredients/:username/fridge’. The get requests were test with expecting a 200 code back along with JSON content, the post/patch requests tested by sending dummy data through the test database and testing the response matching, and the delete requests were tested with a 204 response code. The biggest hurdles during the process were setting up the correct dummy data, the tear down data functions and deciding on the structure of the tests. 

Some issues were the concern of updating the user via account settings page and then the whole data being overridden, however this issue was solved for the moment since the whole user model is being sent to the account settings page, so there for can be returned with the new data. However this solution is ok for the level the project is at now, for future scalabilty this would need to be altered.


</details>

#### Sprint 2- 7/12- 13/12
<details>
<summary>Click to expand</summary>

<img src="./docs/trello/sprint2-1.png" alt="sprint 2 card 1" width="80%" />
<img src="./docs/trello/sprint2-2.png" alt="sprint 2 card 1"  width="80%" />


###### FRIDGE/PANTRY BRANCH

During this sprint the CRUD for ingredients was implemented. Shelby managed to keep the codebase dry by not doing Fridge and Pantry CRUD, rather just implementing an Ingredient CRUD base and using conditionals checking the path name, which then determines which part of the user model gets updated. 

###### USER BRANCH

When implementing s3 and Multer for profile image upload, some blockers were incorrect set up of IAM policy, the use of .single with multer (use .any to ensure the image would upload.)

Shelby also began implementing validation using express-validator starting with validation for the email, password and user information on registering, account settings page and login. 

Started writing passing fail tests to test the end points when errors arise. This pair with using validation I was able to test the results of invalid data being input for the user model. 

Current blockers are implementation of persisting cookies with mocha/supertest testing so tests can be run even with authenticated routes. eg. with the middleware of "passport.authenticate('jwt', {session: false})". Currently all  tests are based with this middleware not being implemented. Code that was tried includes, using superagent, setting headers, setting a beforeAll function of logging in the user and trying to manually set the cookies. The closest to success was using a beforeAll function of logging in the user, however accessing the cookies from that Http request response was not successful. This task will be moved to next sprint. 

###### CLIENT

Completed the initial styling for the home/nav/login/register to start the basis of styling, to enable easier implementation of the react client-side.


</details>


#### Sprint 3- 14/12-27/12
<details>
<summary>Click to expand</summary>

<img src="./docs/trello/sprint3-1.png" alt="sprint 3 card 1" width="80%" />
<img src="./docs/trello/sprint3-2.png" alt="sprint 3 card 1"  width="80%" />


###### RECIPE BRANCH

Began Work on this feature branch on the server client. Initial routes set up. The biggest challenge was the code required for the process of getting the user data from the DB (being ingredients and preferences), error handling, sanitising the data (functions checking if null, processing booleans into an array then finally a string), then sending the correct data to the Spoonacular API calls. During the code process of the helper functions a lot of manual testing done via the console was done with some dummy data, to ensure that the JS functions were working as intended. Additionally testing Spoonacular API via postman was done to determine with Http request URLs were the right ones to use for this application. 

Through Automatic testing coupled with some manual testing the main utility function for return recipe data for the browse page is:
finding a User in Db per params, builds the query info per the data from user, uses that data to axios request Spoonacular API for recipes based off ingredients, then collect those recipes IDs, sanitize the data, then use the IDS for another API call to get the detailed recipe information. 

In my testing of the main function in which makes all the API calls and data validation, I had some trouble testing with getting the data. I was trying to return it as a variable, then I used await outside the main async function (even though the test function was async). What you was needed was to wrap the await call inside an async function, and then call that async function in the top-level of your script. Immediately outputting the result just returned a promise pending, then using the given code with another await to return the promise returned undefined. The below is the serious of options:

In my first test call:

````js
const recipes = returnRecipesToBrowse(req);
console.log(recipes); // will give you something like Promise {pending}
````
Then this was tried:
````js
const recipes = await returnRecipesToBrowse(req);; // will error
console.log(recipes); //undefined
````
What was the final result was:
````js
const returnRecipesToBrowse = async (req) => {
   const recipes = await User.findOne({ username: req.user.username })
    .then(recipes =>  userQueryBuilder(recipes))
    .then(queryItems =>  sanitizeDataForIngredientQuery(queryItems))
    .then(recipesObject => recipeIdGetter(recipesObject.data))
    .then(data => detailedRecipeAPISearch(data))
    .then(recipes =>  {return recipes})
    .catch(error => {return error})
  return recipes
};  
 
returnRecipesToBrowse(req); // run the async function at the top-level, since top-level await is not currently supported in Node

````
I did not need to await on the final returnRecipesToBrowse(req) call, since Node won't exit until its event loop is empty.

When implementing the main code for displaying recipes for browsing, it was discovered that there were certain limitations with using the Spoonacular API. The 'search recipes' which enables a complex search with ingredients and other query parameters like diet and intolerances, proved not useful as it only displays recipes that have all the ingredients in the query not recipes that include one or more of the ingredients. This search was much too specific as we needed to return recipes with one or more of the query ingredients. To supplement the above option, it was decided to use the 'search recipes by ingredients', which will return recipes that include one or more the ingredients in the query, however the returned object is not detailed. Using the object returned above, the recipe ID's were extracted to then use in another query which is ' get recipe information bulk' which returns detailed recipe information using the recipe ID's as the parameters. The returned object from this query though I believe was limited by the paid tiers of the API. Which meant the preferences list was reduced down to just include vegetarian, vegan, gluten-free, dairy-free, very healthy, cheap, popular, sustainable, and low-fod-map. In future the payment tier may not opted to increase which would enable more preference options. 

To overcome the blocker of needing the information from the ingredient search query, but also the information from the get recipe bulk query, the used and missed ingredients were filtered out from the first lot of returned data, then passed onto the next function, so that after the bulk recipe query was returned the two objects could be joined and returned. 

###### CLIENT

The initial connecting of the front-end and back-end was started. This started a learning curve with how having the JWT in a cookie works. To begin with registering a user was connected, and logging in a user, this followed some blockers including the register user function on the back-end not signing a JWT, and on the front-end determining how to keep a user logged in. Local storage was implemented for this issue with the storage housing the username and at the moment the JWT (which is not necessary, but just in place for manual testing). Along with local storage is the state manager being redux. 

</details>

#### Sprint 4- 28/12/20 - 10/1/21

<details>
<summary>Click to expand</summary>

<img src="./docs/trello/sprint4-1.png" alt="sprint 4 card 1" width="80%" />
<img src="./docs/trello/sprint4-2.png" alt="sprint 4 card 2" width="80%" />
<img src="./docs/trello/sprint4-3.png" alt="sprint 4 card 3" width="80%" />
<img src="./docs/trello/sprint4-4.png" alt="sprint 4 card 4"  width="80%" />

###### STYLING

Foundational styling was done as I went to ensure easy readability of the pages being worked on. This involved implementing a Grid layout from Material UI for styling. The main components used from Material UI include the autocomplete component, Grid, Paper and Buttons. Additional usage will be put in place once the final in depth styling is completed. 
Initial set up React Toastify for Notifications was put in place for later use. 
Some refining of a basic footer and the top logo for linking back to the home page was completed. 
Adjusted the user profile image styling as Adrienne was going to be implementing this code. 
Not found page was implementing and styled.

Loading screen was implemented with React Loading to enable a loading time frame for browse recipes, fridge, pantry and eventually saved recipes. To ensure the data has loaded correctly. The initial of adding transitions and effects for better user experience was started. 

###### BROWSE RECIPES

Browse Recipe component was created and some test data was put in place via a JSON file to enable to initially styling of the recipe cards. Like the separate ingredient component, using a separate recipe card component means it can be reused when it comes to displaying the saved recipes pages. 

Then the start of the coding process for calling the backend to return the recipes for browsing. The services code for calling the DB route was implementing quite quickly, initially with the idea that the DB would be called by clicking the search recipe button. This may be changed back to this. However right now it was changed that that button takes you to the browse recipe page, then a useEffect calls the DB and returns the browse data IF the local storage is empty. If the local storage has browse recipes in it. A major blocker during this project was the object coming up with [object, object]. This was discovered that local storage, in order to pass it around from page to page, requires the data to be stringified then parsed back. Once this was implementing the data displayed from local storage no issue.

The next step is being able to refactor the code to allow for if the user was to do a refresh search, that the browse recipe DB route will  be called again and then update local storage. Also to make it obvious to the user that if it was a search with no ingredients, that a random search was made just to show some random recipes. 

Issue: check if the server code is working correctly with taking fridge and pantry ingredients for the recipe search.

###### FRIDGE PANTRY

Adrienne implemented the foundational code for the fridge and pantry components and the functions for connecting to the back end, alongside was some great code for being able to save the state of multiple ingredients for adding to the DB. I just did some refactoring as instead of manually coding the add multiple ingredients, Material UI has this available in the autocomplete component. Additional I was able to incorporate the ingredient services methods.

The connecting of the backend to the frontend was completed for the fridge and pantry for adding, deleting and deleting all ingredients. Some issues along the way were being able to take the array of ingredients from autocomplete and adding them to the array in the DB. Initially it was adding the array to the array in DB, this was able to be resolved by updating on the server side the following:  

````js
from (newItem)

to (...newItem)

````

Then was the issue of duplicates being able to be added to the list. Adrienne is currently working on a fix for this issue, because as it stands you can add duplicates, but when you delete one, it deletes all as that is the server method of deleting. So to overcome this, a function for stopping duplicates is needed. 

###### USER

A blocker which was causing issues when finding by username and updating for settings and preferences, was this:

````js
//ISSUE
User.findOneAndUpdate(req.params.username)

//FIXED
User.findOneAndUpdate({ username:  req.params.username })

````

This above caused issue with for example it would update the wrong users profile image, and I believe it was updating the first user in the DB. 

A fix was made for the Regex for registering a user and the username, this was fixed so as to allow for usernames of 5 letters or more. 

A major blocker was the user password being rehashed each log in/update. It was thought that this was fixed with a pre mongoose model method, however it was discovered it was just the ingredients adding and saving that was overriding the current users information and rehashing the password. When they was changed to findOneAndUpdate instead of FindByID this issue was fixed.  

Another issue was on initial login the users current profile image was not loaded until navigating to the settings page, this was due to the DB not loading the profile on initial home page render. This was fixed by doing a single DB call to get the profile image and save in redux so that it would load on first login. 

###### INGREDIENTS

A conditional was implementing that if no ingredients for fridge or pantry were present it would render a white space filler letting the user know that there are no ingredients present. 

###### DEPLOYMENT

Server code was successfully deployed to Heroku. The client code however was deployed to netlify, but some issues are remaining. Keep working on deployment. 

###### APP

A private route function was set up so that it could be utilised with any routes that require logging in. This then redirects the user to the home page. 

###### HOME

A json file with random food jokes was created and utilised on the home page to display random food jokes. This was done as a JSON file to enable new jokes to be added later.

###### RESET PASSWORD

For a fuller user experience, I implementing a reset password feature via nodemailer and a built in module in Node.js called crypto which will hash a unique token.
This was implemented relatively quickly with an initial post route for clicking reset password, which opens a modal in React with a form which the user enters their email, then on submit it fires a function on the server which will check if the user is in the DB, sending back errors if not, then created a random token via crypto, then inserting this and a token expiring into the users document in MongoDB. Then via Nodemailer using a gmail accounted created for this application, it sends a basic template outlining the instructions for resetting their password with a link that will take the user to a reset password form. The get request for this form involves checking that the token in the link is in the users DB first before allowing the user to see the page. This subsequently the user can enter their new password in the form, which then submits a request to the DB to update the password, using the username, token and date less then expiring to ensure the correct user's password is updated. The main blockers during the process was determining the correct was the insert a field into a document, upsert was not working so after some research and trial and error the below was the correct code:

````js
{ 
            returnNewDocument: true,
            new: true,
            strict: false
          }
````
The strict: false allowed me to insert a field that was not in the current schema. 
Additionally some other blockers, were ensuring there was enough time on the loading screen to make sure the server can fulfill the request, the function which sends the nodemailer can load slow at times, so ensuring there were enough seconds to allow for this was key. 


</details>


#### Sprint 5- 10/01- 19/01
<details>
<summary>Click to expand</summary>

<img src="./docs/trello/sprint5-1.png" alt="sprint 5 card 1" width="80%" />

###### REVIEWING TESTING

Current sitting at 75% test coverage. 
![Image of tests](./docs/testhtml.png)

Following a review using Istanbul of the server side test coverage, it was determined additional tests would need to be written to increase test coverage, another 10 tests were put in place, most of which were testing for if errors occurred. This increased our back-end test coverage to approximately 75%.

###### RECIPES

During this final sprint the implementation of connecting the back-end to the front-end for browsing recipes, viewing saved recipes, adding, deleting and viewing a single recipe was completed. For the features such as user settings, a API call was done on initial page load due to the sensitive nature of the data, but for the lists of recipes, we wanted to utilise local storage to minimize database calls. In a production setting of the DB, at any time the recipes returned could be set up to 100 (depending on the limits set), so saving in local storage meant that the API calls would not need to be done each render. The API call gets made again if the User presses 'Search Again'. Even during production usage, our browse recipe data returned will be set at a reduced limit, due to a the payment tiers of the Spoonacular API call. 

The users 'Saved Recipe' page was connected to the server next. Utlising the same listed recipe component to display the recipe cards the same as the search recipe page. Then connecting the back-end to the single recipe page next was trickier. This page is set up to display the ID in the URL parameters, however if the recipe is from the users DB it will be an ObjectID from MongoDB, and if the recipe is just being view from the search the ID will be the ID from Spoonacular API. The back-end determines if the ID is a Object and returns the data based off this check, either returning DB data or calling the Spoonacular API which the recipe ID. Both sets of Data are handled the same on the front end, since they both contain the same key properties for displaying. The code that took some time to implement correctly was storing the single recipe in Local Storage, then a checker which determines by ID from the URL if it is a Local, then if so display that data, before trying to call the DB. 

Removals: From the saved recipe page, the feature of having categories for breakfast, lunch and dinner was removed due to the time frame and placed in nice to have for future. Additionally the major filter components for the browse recipe page was removed again due to the time frame, this is a large complex component/feature which requires the needed time and effort to implement correctly. 

</details>

---

### Pending Updates

<details>
<summary>Click to expand</summary>



</details>