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

| Date Completed | Tasks Allocated | Completed? | Alocated to? |
|:---:|:---:|:---:|:---:|
|| Research Spoonacular API and test. | &cross; | Shelby |
| 07/12/2020 | User/Auth/Settings/Pref Back-end Code/Testing. | &check; | Shelby |
| 08/12/2020 | Ingredient/Fridge/Pantry Back-end Code/Testing. | &check; |Shelby |
|| Browse Recipe Back-end Code/Testing. | &cross; | Shelby |
|| Single Recipe Back-end Code/Testing. | &cross; | Shelby |
|| Saved Recipe Back-end Code/Testing. | &cross; | Shelby |

</details>

---

### Manual Testing Log - Development
<details>
<summary>Click to expand</summary>

| Date | Feature | Test |
|:---:|:---:|:---:|
| test | test | test |
</details>

---
### Automated Testing Log - Development

<details>
<summary>Click to expand</summary>

| Date | Feature | Test | Notes| 
|:---:|:---:|:---:|:---:|
| 01/12/2020 | GET Register User | Passing |   |
| 01/12/2020 | POST Register User | Passing |   |
| 01/12/2020 | GET Login User | Passing |   |
| 01/12/2020 | POST Login User | Passing |   |
| 08/12/2020 | GET Logout User | Passing |   |
| 01/12/2020 | Find a User from DB | Passing |   |
| 06/12/2020 | GET User Settings | Passing |  |
| 06/12/2020 | PATCH Edit User Settings | Passing |   |
| 07/12/2020 | GET User Preferences  | Passing |   |
| 07/12/2020 | PATCH Edit User Preferences  | Passing | Ensure req.body.preference is updated in codebase  |
| 07/12/2020 | GET Fridge Ingredients | Passing |   |
| 07/12/2020 | POST New Fridge Ingredient | Passing |   |
| 08/12/2020 | DELETE Fridge Ingredient | Passing |   |
| 10/12/2020 | DELETE ALL Fridge Ingredients | Passing |   |
| 08/12/2020 | GET Pantry Ingredients | Passing |   |
| 08/12/2020 | POST New Pantry Ingredient| Passing |   |
| 08/12/2020 | DELETE Pantry Ingredient | Passing |   |
| 10/12/2020 | DELETE ALL Pantry Ingredients | Passing |   |

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

FRIDGE/PANTRY BRANCH

##### Shelby:

Shelby managed to keep the codebase dry by not doing Fridge and Pantry CRUD, rather just implemented and Ingredient CRUD base and using conditionals checking the path name, which then determines which part of the user model gets updated. 

</details>


#### Sprint 3- 14/12-27/12
<details>
<summary>Click to expand</summary>



</details>