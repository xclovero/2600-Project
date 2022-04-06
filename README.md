# Simple Game Rating API

## Overview

This game rating API allows players to rate the games. They can create a game company and create the games they want to rate under that company's directory and give  score.

## Link to the Application

[Game Rating API](https://cpsc2600-chao-xu.herokuapp.com/)

## Instructions for Building and Running

This project require Node.js.

1. Install Game API
```bash
$ git clone https://github.com/xclovero/2600-Project.git
$ cd 2600-Project
```
2. Build API
```bash
$ npm install
```
3. Running API
```bash
$ npm start
```
## Features

1. For every 10 seconds, application will display a random game which score is greater or equal than 7 on the top of the page.
2. When user create a game which have already existed in the database, application will calculate the average score for that game and update it.
3. Whne user create a game which have already existed in the database and the platforms of new post is different from the one have existed, it will check the array of it. If elements in new platforms are not in the previous platforms array, application will update the platforms array of that game.

## Instructions for Using Game Rating API Application

1. For every 10 seconds, application will display a random game which score is greater or equal than 7 on the top of the page.
2. Users can create a new game company using "Create Company" feature, if new company has existed, it will display error message.
3. Users can rate a game using "Create Game" feature. User should enter the game's name, choose a company as game's developer, choose at least one platform, and input their score for that game.
4. At the bottom of the page, there is an area that user can choose a company, then all games belong to that company will display in that area in alphabetical order.

## URL and Method

* **URL**

  https://cpsc2600-chao-xu.herokuapp.com/

* **Method:**
  
  <_The request type_>

  `GET` | `POST`

* **Response format:**

1. GET https://cpsc2600-chao-xu.herokuapp.com/GameAPI/company Fetch all companies

`[{"_id": *********, "name": company1, "games": [{"name": game1, "developer": company1, "platforms"" [], "score": 6, "count": 2}]}, {"_id": *********, "name": company2, "games": [{"name": game2, "developer": company1, "platforms"" [], "score": 6, "count": 2}]}]`

2. GET https://cpsc2600-chao-xu.herokuapp.com/GameAPI/company/<compant-name> Fetch a specific company

`[{"_id": *********, "name": company1, "games": [{"name": game1, "developer": company1, "platforms"" [], "score": 6, "count": 2}, {"name": game2, "developer": company1, "platforms"" [], "score": 7, "count": 3}]}]`

3. GET https://cpsc2600-chao-xu.herokuapp.com/GameAPI/games Fetch all games

`[{"_id":"*********,","name":"game1","developer":"company1","platforms":["PC","PS4","PS5"],"score":6,"count":3,"__v":0},{"_id":"*********,","name":"game2","developer":"company2","platforms":["NS"],"score":5,"count":1,"__v":0}]`

4. GET https://cpsc2600-chao-xu.herokuapp.com/GameAPI/games/high-score Fetch all games that score of that game are greater or equal than 7

`[{"_id":"*********,","name":"game1","developer":"company1","platforms":["PC","PS4","PS5"],"score":8,"count":3,"__v":0},{"_id":"*********,","name":"game2","developer":"company2","platforms":["NS"],"score":9,"count":1,"__v":0}]`

* **Post Body Format:**

1. POST https://cpsc2600-chao-xu.herokuapp.com/GameAPI/company Create a new company
`{"name": string}`

2. POST https://cpsc2600-chao-xu.herokuapp.com/GameAPI/games Create a new game
`{"name": string, "developer": string, "platforms": [""], score: number}`

* **Example:**

1. GET https://cpsc2600-chao-xu.herokuapp.com/GameAPI/company

`[{"_id":"624cbd091bb94f3698e58bc6","name":"Square Enix","games":[{"name":"Final Fantasy XIV","developer":"Square Enix","platforms":["PC","PS4","PS5"],"score":8,"count":3,"_id":"624cbd301bb94f3698e58d9e"}],"__v":1},{"_id":"624cbd3e1bb94f3698e58e4f","name":"EA Sports","games":[],"__v":0}]`


2. GET https://cpsc2600-chao-xu.herokuapp.com/GameAPI/company/<compant-name>

`{"_id":"624cbd091bb94f3698e58bc6","name":"Square Enix","games":[{"name":"Final Fantasy XIV","developer":"Square Enix","platforms":["PC","PS4","PS5"],"score":8,"count":3,"_id":"624cbd301bb94f3698e58d9e"}],"__v":1}`

3. GET https://cpsc2600-chao-xu.herokuapp.com/GameAPI/games

`[{"_id":"624cbd301bb94f3698e58d9e","name":"Final Fantasy XIV","developer":"Square Enix","platforms":["PC","PS4","PS5"],"score":8,"count":3,"__v":0},{"_id":"624e071369bf9cd00d275b8e","name":"Super Mario 3","developer":"Nintendo","platforms":["NS"],"score":10,"count":1,"__v":0},{"_id":"624e0a1169bf9cd00d275bc2","name":"Final Fantasy XI","developer":"Square Enix","platforms":["PC"],"score":6,"count":1,"__v":0}]`

4. GET https://cpsc2600-chao-xu.herokuapp.com/GameAPI/games/high-score

`[{"_id":"624cbd301bb94f3698e58d9e","name":"Final Fantasy XIV","developer":"Square Enix","platforms":["PC","PS4","PS5"],"score":8,"count":3,"__v":0},{"_id":"624e071369bf9cd00d275b8e","name":"Super Mario 3","developer":"Nintendo","platforms":["NS"],"score":10,"count":1,"__v":0}]`