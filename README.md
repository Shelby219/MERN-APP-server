## MERN-server

|Shelby El-rassi|Adrienne Smith|
|:-------------:|:-------------:|
|[www.shelby-el-rassi.com](www.shelby-el-rassi.com)  |[adriennesmith-portfolio.netlify.app/](https://adriennesmith-portfolio.netlify.app/) |
|[github.com/Shelby219](https://github.com/Shelby219)  |[github.com/aes89](https://github.com/aes89) |

---

Deployed App:

##### Documentation Repository: https://github.com/CA-MERN/MERN-Part-A-Docs

##### Client Repository: https://github.com/CA-MERN/MERN-client

##### Server Repository: https://github.com/CA-MERN/MERN-server

---

### Tasks
<details>
<summary>Click to expand</summary>
Collaboratively tracked in Trello, see <a href="#trellologs">Trello Screen Shots</a>.
&check;
&cross; 

| Date Completed | Tasks Allocated | Completed? | Allocated to? |
|:---:|:---:|:---:|:---:|
|16/12/2020| Research Spoonacular API and test. | &check; | Shelby |
| 07/12/2020 | User/Auth/Settings/Pref Back-end Code/Testing. | &check; | Shelby |
| 08/12/2020 | Ingredient/Fridge/Pantry Back-end Code/Testing. | &check; |Shelby |
|24/12/2020 | Browse Recipe Back-end Code/Testing. |  &check; | Shelby |
|24/12/2020 | Single Recipe Back-end Code/Testing. |  &check; | Shelby |
|17/12/2020 | Saved Recipe Back-end Code/Testing. |  &check; | Shelby |
|24/12/2020 | Connecting of Back and Front End. |  &cross;  | Shelby |
|24/12/2020 | Browse Recipe Components React Front-end . |  &cross; | Shelby |
|24/12/2020 | Saved Recipe Components React Front-end . |  &cross; | Shelby |
|24/12/2020 | Single Recipe Components React Front-end . |  &cross; | Shelby |
|24/12/2020 | Single Recipe Components React Front-end . |  &cross; | Shelby |

</details>

---

### Manual Testing Log - Development
<details>
<summary>Click to expand</summary>

| Date | Feature | Test | Notes| 
|:---:|:---:|:---:|:---:|
| 16/12/2020 | https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken,+cheese&number=25&apiKey={API KEY HERE} | Correct | Spooancular FIND BY INGREDIENTS API Endpoint test via Postman |
| 16/12/2020 | https://api.spoonacular.com/recipes/complexSearch?includeIngredients=lemon,strawberries&fillIngredients=true&intolerances=gluten&number=25&apiKey={API KEY HERE}| Correct | Spooancular COMPLEX SEARCH API Endpoint test via Postman |
| 16/12/2020 | https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
&apiKey={API KEY HERE}| Correct | Spooancular API Endpoint test via Postman |
| 16/12/2020 | https://api.spoonacular.com/recipes/informationBulk?ids=715538,716429&apiKey={API KEY HERE} | Correct | Spooancular BULK RECIPE SEARCH VIA ID API Endpoint test via Postman |
| 16/12/2020 | https://api.spoonacular.com/recipes/random?number=2&apiKey={API KEY HERE} | test | Spooancular RANDOM RECIPE SEARCH API Endpoint test via Postman |
| 16/12/2020 | FUNCTION -  ingredientJoiner() | Console Test | First Tested via console with dummy data, before incorporating into Mocha Unit Testing|
| 16/12/2020 | FUNCTION -  preferenceSeparator() | Console Test | First Tested via console with dummy data, before incorporating into Mocha Unit Testing| 
| 16/12/2020 | FUNCTION -  queryEditor() | Console Test | First Tested via console with dummy data, before incorporating into Mocha Unit Testing|
| 16/12/2020 | FUNCTION -  userQueryBuilder() | Console Test | First Tested via console with dummy data, before incorporating into Mocha Unit Testing|
| 24/12/2020 | FUNCTION -  recipeIdGetter() | Console Test | First Tested via console with dummy data, before incorporating into Mocha Unit Testing|
| 24/12/2020 | FUNCTION -  basedOnPreferenceExtractor() | Console Test | First Tested via console with dummy data, before incorporating into Mocha Unit Testing|
| Date | Feature | Test | Notes| 
| Date | Feature | Test | Notes| 
| Date | Feature | Test | Notes| 

</details>

---
### Automated Testing Log - Development

<details>
<summary>Click to expand</summary>

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

#### Expect to Fail Tests
| Date | Feature | Test | Notes| 
|:---:|:---:|:---:|:---:|
| 09/12/2020 | POST Login User- Incorrect Password  | Passing |   |
| 09/12/2020 | POST Register User- Incorrect Email and Password Format  | Passing |   |
| 09/12/2020 | GET User Settings- Incorrect Params  | Passing |   |
| 09/12/2020 | PATCH User Settings- Incorrect  Email, Password, Name Format  | Passing |   |
| 22/12/2020 | GET Single Saved Recipes- Recipe ID not found  | Passing |  |


</details>

---
### Manual Testing Log - Production
<details>
<summary>Click to expand</summary>

| Date | Feature | Test |
|:---:|:---:|:---:|
| test | test | test |

</details>

---
### Automated Testing Log - Production
<details>
<summary>Click to expand</summary>

| Date | Feature | Test |
|:---:|:---:|:---:|
| test | test | test |

</details>

---

### Sprint Planning

<details>
<summary>Click to expand</summary>

We determined that setting weekly sprints was an ideal format for our project. We created a card in Trello that organised them by date and we were able to form checklists of what we wanted to have completed at the end of each sprint for the front-end and back-end. Whilst working we have a current doing card and then a completed card which we are able to distinguish each feature/component being worked on and what is completed.

In the initial planning stages we planned our Trello for the server/client based off features which would be the names of the branches. Our first feature for server/client was the user and during the first Sprint it was decided Shelby would complete the back-end code and testing and Adrienne would complete the front-end code and testing.  Each morning we begin with our own stand up in which we show what we have worked on, explained our code, listed any challenges and also any wins. Since we are working on back-end and front-end seperate, this ensures we are both know what is happening on each feature. 

Initially we were going to switch front-end and back-end for each feature, but we decided for the MVP product that Shelby would stick to the back-end and Adrienne on the front-end to ensure we delivered a great MVP product on time. This plan tailored to each of our strengths. This being said, once the MVP is completed all our nice to have features that we want to implement, we will switch roles for the implementation of these features. In the planning stage we decided to pair programme when it comes for connecting the server and client, which we are planning on doing at the end of each feature branch. 

Additionally when it comes time to styling we will likely do a mixture of pair programming and allocation of components to style as we both really enjoy styling.

</details>

#### Sprint 1- 30/11- 6/12

<details>
<summary>Click to expand</summary>

USER BRANCH

##### Shelby:

At this start of this Sprint, Shelby set up the initial back-end server code and all the express/mongo/mongoose connections and tested it was all set up correctly. Then the first component worked on was the implementation of passport, passport-JWT and jsonwebtoken for user account and authorisation. The implementation of this involved using the express session to pass around the JWT. Alongside this was the initial user account routes , the setting up of the testing of these API end points was a steep initial learning curve. This began with researching testing frameworks in which Mocha along with super test was chosen. Shelby decided on constructing the tests with a description of each Http request eg. 'GET /ingredients/:username/fridge’. The get requests were test with expecting a 200 code back along with JSON content, the post/patch requests tested by sending dummy data through the test database and testing the response matching, and the delete requests were tested with a 204 response code. The biggest hurdles during the process were setting up the correct dummy data, the tear down data functions and deciding on the structure of the tests. 

Some issues were the concern of updating the user via account settings page and then the whole data being overridden, however this issue was solved for the moment since the whole user model is being sent to the account settings page, so there for can be returned with the new data. However this solution is ok for the level the project is at now, for future scalabilty this would need to be altered.


</details>

#### Sprint 2- 7/12- 13/12
<details>
<summary>Click to expand</summary>

##### Shelby:

FRIDGE/PANTRY BRANCH

During this sprint the CRUD for ingredients was implemented. Shelby managed to keep the codebase dry by not doing Fridge and Pantry CRUD, rather just implementing an Ingredient CRUD base and using conditionals checking the path name, which then determines which part of the user model gets updated. 

USER BRANCH

When implementing s3 and Multer for profile image upload, some blockers were incorrect set up of IAM policy, the use of .single with multer (use .any to ensure the image would upload.)

Shelby also began implementing validation using express-validator starting with validation for the email, password and user information on registering, account settings page and login. 

Started writing passing fail tests to test the end points when errors arise. This pair with using validation I was able to test the results of invalid data being input for the user model. 

Current blockers are implementation of persisting cookies with mocha/supertest testing so tests can be run even with authenticated routes. eg. with the middleware of "passport.authenticate('jwt', {session: false})". Currently all  tests are based with this middleware not being implemented. Code that was tried includes, using superagent, setting headers, setting a beforeAll function of logging in the user and trying to manually set the cookies. The closest to success was using a beforeAll function of logging in the user, however accessing the cookies from that Http request response was not successful. This task will be moved to next sprint. 

CLIENT

Completed the intial styling for the home/nav/login/register to start the basis of styling, to enable easier implementation of the react client-side.


</details>


#### Sprint 3- 14/12-27/12
<details>
<summary>Click to expand</summary>

RECIPE BRANCH

Began Work on this feature branch on the server client. Initial routes set up. The biggest challenge was the code required for the process of getting the user data from the DB (being ingredients and preferences), error handling, sanitising the data (functions checking if null, processing booleans into an array then finally a string), then sending the correct data to the Spoonacular API calls. During the code process of the helper functions a lot of manual testing done via the console was done with some dummy data, to ensure that the JS functions were working as intended. Additionally testing Spoonacular API via postman was done to determine with Http request URLs were the right ones to use for this application. 

Through Automatic testing coupled with some manual testing the main utility function for return recipe data for the browse page is:
finding a User in Db per params, builds the query info per the data from user, uses that data to axios request Spoonacular API for recipes based off ingredients, then collect those recipes IDs, sanitize the data, then use the IDS for another API call to get the detailed recipe information. 

In my testing of the main function in which makes all the API calls and data validation, I had some trouble testing with getting the data. I was trying to return it as a variable, then I used await outside the main async function (even though the test function was async). What you was needed was to wrap the await call inside an async function, and then call that async function in the top-level of your script. Immediately outputting the result just returned a promise pendings, then using the given code with another await to return the promise returned undefined. The below is the serious of options:

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

When implementing the main code for displaying recipes for browsing, it was discovered that there were certain limitations with using the Spoonacular API. The 'search recipes' which enables a complex search with ingredients and other query parameters like diet and intolerances, proved not useful as it only displays recipes that have all the ingredients in the query not recipes that include one or more of the ingredients. This search was much too specific as we needed to return recipes with one or more of the query ingredients. To supplement the above option, it was decided to use the 'search recipes by ingredients', which will return recipes that include one or more the ingredients in the query, however the returned object is not detailed. Using the object returned above, the recipe ID's were extracted to then use in another query which is ' get recipe information bulk' which returns details recipe information using the recipe ID's as the parameters. The returned object from this query though I believe was limited by the paid tiers of the API. Which meant the preferences list was reduced down to just include vegetarian, vegan, gluten-free, dairy-free, very healthy, cheap, popular, sustainable, and low-fod-map. In future the payment tier may not opted to increase which would enable more preference options. 

To overcome the blocker of needing the information from the ingredient search query, but also the information from the get recipe bulk query, the used and missed ingredients were filtered out from the first lot of returned data, then passed onto the next function, so that after the bulk recipe query was returned the two objects could be joined and returned. 

CLIENT-SIDE

The initial connecting of the front-end and back-end was started. This started a learning curve with how having the JWT in a cookie works. To begin with registering a user was connected, and logging in a user, this followed some blockers including the register user function on the back-end not signing a JWT, and on the front-end determining how to keep a user logged in. Local storage was implemented for this issue with the storage housing the username and at the moment the JWT (which is not necessary, but just in place for manual testing). Along with local storage is the state manager being redux. 

</details>



#### Sprint 3- 28/12/20 - 10/1/21

<details>
<summary>Click to expand</summary>


STYLING

Foundational styling was done as I went to ensure easy readability of the pages being worked on. This involved implementing a Grid layout from Material UI for styling. The main components used from Material UI include the autocomplete component, Grid, Paper and Buttons. Additional usage will be put in place once the final in depth styling is completed. 
Initial set up React Toastify for Notifications was put in place for later use. 
Some refining of a basic footer and the top logo for linking back to the home page was completed. 
Adjusted the user profile image styling as Adrienne was going to be implementing this code. 
Not found page was implementing and styled.

Loading screen was implemented with React Loading to enable a loading time frame for browse recipes, fridge, pantry and eventually saved recipes. To ensure the data has loaded correctly. 

BROWSE RECIPES

Browse Recipe component was created and some test data was put in place via a JSON file to enable to initially styling of the recipe cards. Like the separate ingredient component, using a separate recipe card component means it can be reused when it comes to displaying the saved recipes pages. 

Then the start of the coding process for calling the backend to return the recipes for browsing. The services code for calling the DB route was implementing quite quickly, initially with the idea that the DB would be called by clicking the search recipe button. This may be changed back to this. However right now it was changed that that button takes you to the browse recipe page, then a useEffect calls the DB and returns the browse data IF the local storage is empty. If the local storage has browse recipes in it. A major blocker during this project was the object coming up with [object, object]. This was discovered that local storage, in order to pass it around from page to page, requires the data to be stringified then parsed back. Once this was implementing the data displayed from local storage no issue.

The next step is being able to refactor the code to allow for if the user was to do a refresh search, that the browse recipe DB route will  be called again and then update local storage. Also to make it obvious to the user that if it was a search with no ingredients, that a random search was made just to show some random recipes. 

Issue: check if the server code is working correctly with taking fridge and pantry ingredients for the recipe search.

FRIDGE PANTRY

Adrienne implemented the foundational code for the fridge and pantry components and the functions for connecting to the back end, alongside was some great code for being able to save the state of multiple ingredients for adding to the DB. I just did some refactoring as instead of manually coding the add multiple ingredients, Material UI has this available in the autocomplete component. Additional I was able to incorporate the ingredient services methods.

The connecting of the backend to the frontend was completed for the fridge and pantry for adding, deleting and deleting all ingredients. Some issues along the way were being able to take the array of ingredients from autocomplete and adding them to the array in the DB. Initially it was adding the array to the array in DB, this was able to be resolved by updating on the server side the following:  

````js
from (newItem)

to (...newItem)

````

Then was the issue of duplicates being able to be added to the list. Adrienne is currently working on a fix for this issue, because as it stands you can add duplicates, but when you delete one, it deletes all as that is the server method of deleting. So to overcome this, a function for stopping duplicates is needed. 

USER

A blocker which was causing issues when finding by username and updating for settings and preferences, was this:

````js
//ISSUE
User.findOneAndUpdate(req.params.username)

//FIXED
User.findOneAndUpdate({ username:  req.params.username })

````

This above caused issue with for example it would update the wrong users profile image, and I believe it was updating the first user in the DB. 

A fix was made for the Regex for registering a user and the username, this was fixed so as to allow for usernames of 5 letters or more. 

A major blocker was the user password being rehashed each log in/update. This was able to be fixed with a model pre function which checked if the password was modified, and hashes the new one, as opposed to rehashing the hashed one. This code fixed the issue, but that are some ongoing problems with updating the user settings from client, which may need some loading time for this back end code to operate successfully.

INGREDIENTS

A conditional was implementing that if no ingredients for fridge or pantry were present it would render a white space filler letting the user know that there are no ingredients present. 

DEPLOYMENT

Server code was successfully deployed to Heroku. The client code however was deployed to netlify, but some issues are remaining. Keep working on deployment. 

APP

A private route function was set up so that it could be utilised with any routes that require logging in. This then redirects the user to the home page. 

Blockers:

Password being hashed on hash.
Local storage holding JSON file, needed to pass string and then parse back our to JSON for render


RESET PASSWORD:

Node.js has a built in module called Crypto, which provides cryptographic functionality, which is a fancy way of saying, I can generate a unique hash token easily using the command .







</details>



