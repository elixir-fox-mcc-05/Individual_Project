# Individual_Project

## Gridiron Fantasy Team Builder

Pernahkan kamu memainkan NFL Fantasy Football ?? 
App ini dibuat untuk membangun tim fantasy NFL berdasarkan data pemain real yang di ambil dari public REST API dari [Football Nerd API](https://www.fantasyfootballnerd.com/fantasy-football-api).

Dalam app ini kamu dapat membangun dan memodifikasi satu atau lebih dari NFL Fantasy mock tim untuk mempersiapkan dirimu menghadapi musim Fantasy Football yang akan datang. Selamat mencoba!


# API Documentation

  **User Register**
----
  New user registration to gridiron fantasy app

* **URL**

  /users/register

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | name | <YOUR_NAME> | true |
  | username | <YOUR_USERNAME> | true |
  | email | <YOUR_EMAIL> | true |
  | password | <YOUR_PASSWORD_HERE> | true |

* **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "id": 5,
    "username": "heroman25",
    "email": "heroman@mail.com"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **User Login**
----
  Login to user account (if user already register)

* **URL**

  /users/login

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | email | <YOUR_EMAIL> | true |
  | password | <YOUR_PASSWORD_HERE> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "access_token": "<YOUR_TOKEN_HERE>"
    }
    ```
 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

    OR

    * **Code:** 401 UNAUTHORIZED <br />
        **Content:** 
        ```json
        { "error" : "Invalid email/password" }
        ``` 

        OR

        ```json
        { "error" : "Invalid email/password" }
        ```

----
  **User Login Google**
----
  Login to Gridiron Fantasy app via google account

* **URL**

  /users/google_login

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | google_token | <YOUR_GOOGLE_TOKEN> | true |
  
* **URL Params**

   none

* **Data Params**

    none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "accessToken": "<YOUR_TOKEN_HERE>"
    }
    ```
 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

----
**Create New Team**
----
  Create new Fantasy Football team

* **URL**

  /teams

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | access_token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | name | <YOUR_TEAM_NAME> | true |

* **Success Response:**
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "team": {
        "id": 9,
        "number_of_player": 0,
        "name": "RedSeaResider",
        "UserId": 1,
        "updatedAt": "2020-05-10T07:58:37.512Z",
        "createdAt": "2020-05-10T07:58:37.512Z"
        }
    }
    ```
 
* **Error Response:**
  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You do not have the authority to do this action" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Show All My Teams**
----
  Show all teams owned by the user along with data of team player.

* **URL**

  /teams

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | access_token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   none

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "teams": [
        {
                "id": 1,
                "name": "RainCityRenegades",
                "number_of_player": 3,
                "UserId": 1,
                "createdAt": "2020-05-10T05:53:18.519Z",
                "updatedAt": "2020-05-10T07:24:20.079Z",
                "User": {
                    "id": 1,
                    "name": "Huey McMeow",
                    "username": "hueyguey",
                    "email": "hueyguey@mail.com",
                    "createdAt": "2020-05-10T05:51:24.165Z",
                    "updatedAt": "2020-05-10T05:51:24.165Z"
                },
                "Players": [
                    {
                        "id": 1,
                        "name": "Dak Prescott",
                        "position": "QB",
                        "team": "DAL",
                        "status": "Starter",
                        "TeamId": 1,
                        "createdAt": "2020-05-10T05:54:50.411Z",
                        "updatedAt": "2020-05-10T05:54:50.411Z"
                    },
                    {
                        "id": 3,
                        "name": "TJ Hockenson",
                        "position": "TE",
                        "team": "DET",
                        "status": "Bench",
                        "TeamId": 1,
                        "createdAt": "2020-05-10T06:01:19.222Z",
                        "updatedAt": "2020-05-10T06:01:19.222Z"
                    },
                    {
                        "id": 15,
                        "name": "Adam Thielen",
                        "position": "WR",
                        "team": "MIN",
                        "status": "Starter",
                        "TeamId": 1,
                        "createdAt": "2020-05-10T07:24:20.071Z",
                        "updatedAt": "2020-05-10T07:24:20.071Z"
                    }
                ]
            },
            {
                "id": 9,
                "name": "RedSeaResider",
                "number_of_player": 0,
                "UserId": 1,
                "createdAt": "2020-05-10T07:58:37.512Z",
                "updatedAt": "2020-05-10T07:58:37.512Z",
                "User": {
                    "id": 1,
                    "name": "Huey McMeow",
                    "username": "hueyguey",
                    "email": "hueyguey@mail.com",
                    "createdAt": "2020-05-10T05:51:24.165Z",
                    "updatedAt": "2020-05-10T05:51:24.165Z"
                },
                "Players": []
            },
            {
                "id": 10,
                "name": "NorthPoleDefender",
                "number_of_player": 0,
                "UserId": 1,
                "createdAt": "2020-05-10T08:01:35.022Z",
                "updatedAt": "2020-05-10T08:01:35.022Z",
                "User": {
                    "id": 1,
                    "name": "Huey McMeow",
                    "username": "hueyguey",
                    "email": "hueyguey@mail.com",
                    "createdAt": "2020-05-10T05:51:24.165Z",
                    "updatedAt": "2020-05-10T05:51:24.165Z"
                },
                "Players": []
            }
        ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You do not have the authority to do this action" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Show All Teams**
----
  Show all teams that have been created by all user.

* **URL**

  /teams/all

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | access_token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   none

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "teams": [
        {
                "id": 1,
                "name": "RainCityRenegades",
                "number_of_player": 3,
                "UserId": 1,
                "createdAt": "2020-05-10T05:53:18.519Z",
                "updatedAt": "2020-05-10T07:24:20.079Z",
                "User": {
                    "id": 1,
                    "name": "Huey McMeow",
                    "username": "hueyguey",
                    "email": "hueyguey@mail.com",
                    "createdAt": "2020-05-10T05:51:24.165Z",
                    "updatedAt": "2020-05-10T05:51:24.165Z"
                },
                "Players": [
                    {
                        "id": 15,
                        "name": "Adam Thielen",
                        "position": "WR",
                        "team": "MIN",
                        "status": "Starter",
                        "TeamId": 1,
                        "createdAt": "2020-05-10T07:24:20.071Z",
                        "updatedAt": "2020-05-10T07:24:20.071Z"
                    },
                    {
                        "id": 3,
                        "name": "TJ Hockenson",
                        "position": "TE",
                        "team": "DET",
                        "status": "Bench",
                        "TeamId": 1,
                        "createdAt": "2020-05-10T06:01:19.222Z",
                        "updatedAt": "2020-05-10T06:01:19.222Z"
                    },
                    {
                        "id": 1,
                        "name": "Dak Prescott",
                        "position": "QB",
                        "team": "DAL",
                        "status": "Starter",
                        "TeamId": 1,
                        "createdAt": "2020-05-10T05:54:50.411Z",
                        "updatedAt": "2020-05-10T05:54:50.411Z"
                    }
                ]
            },
            {
                "id": 9,
                "name": "RedSeaResider",
                "number_of_player": 0,
                "UserId": 1,
                "createdAt": "2020-05-10T07:58:37.512Z",
                "updatedAt": "2020-05-10T07:58:37.512Z",
                "User": {
                    "id": 1,
                    "name": "Huey McMeow",
                    "username": "hueyguey",
                    "email": "hueyguey@mail.com",
                    "createdAt": "2020-05-10T05:51:24.165Z",
                    "updatedAt": "2020-05-10T05:51:24.165Z"
                },
                "Players": []
            },
            {
                "id": 10,
                "name": "NorthPoleDefender",
                "number_of_player": 0,
                "UserId": 1,
                "createdAt": "2020-05-10T08:01:35.022Z",
                "updatedAt": "2020-05-10T08:01:35.022Z",
                "User": {
                    "id": 1,
                    "name": "Huey McMeow",
                    "username": "hueyguey",
                    "email": "hueyguey@mail.com",
                    "createdAt": "2020-05-10T05:51:24.165Z",
                    "updatedAt": "2020-05-10T05:51:24.165Z"
                },
                "Players": []
            },
            {
                "id": 11,
                "name": "SeaSideWarriors",
                "number_of_player": 1,
                "UserId": 5,
                "createdAt": "2020-05-10T08:05:32.572Z",
                "updatedAt": "2020-05-10T08:05:54.743Z",
                "User": {
                    "id": 5,
                    "name": "Hero McMeow",
                    "username": "heroman25",
                    "email": "heroman@mail.com",
                    "createdAt": "2020-05-10T07:54:33.451Z",
                    "updatedAt": "2020-05-10T07:54:33.451Z"
                },
                "Players": [
                    {
                        "id": 16,
                        "name": "Brandon McManus",
                        "position": "K",
                        "team": "DEN",
                        "status": "Bench",
                        "TeamId": 11,
                        "createdAt": "2020-05-10T08:05:49.810Z",
                        "updatedAt": "2020-05-10T08:05:49.810Z"
                    }
                ]
            }
        ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You do not have the authority to do this action" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Show Teams By Id**
----
  Show teams selected by Id along with the player on it.

* **URL**

  /teams/:id

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | access_token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
        "team": {
            "id": 1,
            "name": "RainCityRenegades",
            "number_of_player": 3,
            "UserId": 1,
            "createdAt": "2020-05-10T05:53:18.519Z",
            "updatedAt": "2020-05-10T07:24:20.079Z",
            "Players": [
                {
                    "id": 1,
                    "name": "Dak Prescott",
                    "position": "QB",
                    "team": "DAL",
                    "status": "Starter",
                    "TeamId": 1,
                    "createdAt": "2020-05-10T05:54:50.411Z",
                    "updatedAt": "2020-05-10T05:54:50.411Z"
                },
                {
                    "id": 3,
                    "name": "TJ Hockenson",
                    "position": "TE",
                    "team": "DET",
                    "status": "Bench",
                    "TeamId": 1,
                    "createdAt": "2020-05-10T06:01:19.222Z",
                    "updatedAt": "2020-05-10T06:01:19.222Z"
                },
                {
                    "id": 15,
                    "name": "Adam Thielen",
                    "position": "WR",
                    "team": "MIN",
                    "status": "Starter",
                    "TeamId": 1,
                    "createdAt": "2020-05-10T07:24:20.071Z",
                    "updatedAt": "2020-05-10T07:24:20.071Z"
                }
            ]
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You do not have the authority to do this action" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Show All NFL Teams**
----
  Show all real NFL teams, get it from Fantasy Football Nerd as 3rd party Api's

* **URL**

  /teams/nfl

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | access_token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   none

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "teams": {
        "NFLTeams": [
                {
                    "code": "ARI",
                    "fullName": "Arizona Cardinals",
                    "shortName": "Arizona"
                },
                {
                    "code": "ATL",
                    "fullName": "Atlanta Falcons",
                    "shortName": "Atlanta"
                },
                {
                    "code": "BAL",
                    "fullName": "Baltimore Ravens",
                    "shortName": "Baltimore"
                },
                {
                    "code": "BUF",
                    "fullName": "Buffalo Bills",
                    "shortName": "Buffalo"
                },
                {
                    "code": "CAR",
                    "fullName": "Carolina Panthers",
                    "shortName": "Carolina"
                },
                {
                    "code": "CHI",
                    "fullName": "Chicago Bears",
                    "shortName": "Chicago"
                },
                {
                    "code": "CIN",
                    "fullName": "Cincinnati Bengals",
                    "shortName": "Cincinnati"
                },
                {
                    "code": "CLE",
                    "fullName": "Cleveland Browns",
                    "shortName": "Cleveland"
                },
                {
                    "code": "DAL",
                    "fullName": "Dallas Cowboys",
                    "shortName": "Dallas"
                },
                {
                    "code": "DEN",
                    "fullName": "Denver Broncos",
                    "shortName": "Denver"
                },
                {
                    "code": "DET",
                    "fullName": "Detroit Lions",
                    "shortName": "Detroit"
                },
                {
                    "code": "GB",
                    "fullName": "Green Bay Packers",
                    "shortName": "Green Bay"
                },
                {
                    "code": "HOU",
                    "fullName": "Houston Texans",
                    "shortName": "Houston"
                },
                {
                    "code": "IND",
                    "fullName": "Indianapolis Colts",
                    "shortName": "Indianapolis"
                },
                {
                    "code": "JAC",
                    "fullName": "Jacksonville Jaguars",
                    "shortName": "Jacksonville"
                },
                {
                    "code": "KC",
                    "fullName": "Kansas City Chiefs",
                    "shortName": "Kansas City"
                },
                {
                    "code": "MIA",
                    "fullName": "Miami Dolphins",
                    "shortName": "Miami"
                },
                {
                    "code": "MIN",
                    "fullName": "Minnesota Vikings",
                    "shortName": "Minnesota"
                },
                {
                    "code": "NE",
                    "fullName": "New England Patriots",
                    "shortName": "New England"
                },
                {
                    "code": "NO",
                    "fullName": "New Orleans Saints",
                    "shortName": "New Orleans"
                },
                {
                    "code": "NYG",
                    "fullName": "New York Giants",
                    "shortName": "N.Y. Giants"
                },
                {
                    "code": "NYJ",
                    "fullName": "New York Jets",
                    "shortName": "N.Y. Jets"
                },
                {
                    "code": "LV",
                    "fullName": "Las Vegas Raiders",
                    "shortName": "Las Vegas"
                },
                {
                    "code": "PHI",
                    "fullName": "Philadelphia Eagles",
                    "shortName": "Philadelphia"
                },
                {
                    "code": "PIT",
                    "fullName": "Pittsburgh Steelers",
                    "shortName": "Pittsburgh"
                },
                {
                    "code": "LAC",
                    "fullName": "Los Angeles Chargers",
                    "shortName": "L.A. Chargers"
                },
                {
                    "code": "SEA",
                    "fullName": "Seattle Seahawks",
                    "shortName": "Seattle"
                },
                {
                    "code": "SF",
                    "fullName": "San Francisco 49ers",
                    "shortName": "San Francisco"
                },
                {
                    "code": "LAR",
                    "fullName": "Los Angeles Rams",
                    "shortName": "L.A. Rams"
                },
                {
                    "code": "TB",
                    "fullName": "Tampa Bay Buccaneers",
                    "shortName": "Tampa Bay"
                },
                {
                    "code": "TEN",
                    "fullName": "Tennessee Titans",
                    "shortName": "Tennessee"
                },
                {
                    "code": "WAS",
                    "fullName": "Washington Redskins",
                    "shortName": "Washington"
                }
            ]
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You do not have the authority to do this action" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Delete Team**
----
  Delete existing fantasy football team, selected by id

* **URL**

  /teams/:id

* **Method:**
  
  `DELETE`
  
* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | access_token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    { "msg": "Success delete team with id 5" }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You do not have the authority to do this action" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    { "error" : "no team with id <id> found" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Add New Player**
----
  Add new player to user's team.

* **URL**

  /players/:team_id

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | access_token | <YOUR_TOKEN_HERE> | true |
  
* **URL Params**

   **Required:**
 
   `team_id=[integer]`

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | name | <NEW_PLAYER_NAME> | true |
  | position | <NEW_PLAYER_POSITION> | true |
  | team | <NEW_PLAYER_REAL_TEAM> | true |
  | status | <NEW_PLAYER_STATUS> | true |

* **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
        "player": {
            "id": 18,
            "name": "Jameis Winston",
            "position": "QB",
            "status": "Bench",
            "team": "NO",
            "TeamId": 9,
            "updatedAt": "2020-05-10T08:26:42.966Z",
            "createdAt": "2020-05-10T08:26:42.966Z"
        }
    }
    ```
 
* **Error Response:**
  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You do not have the authority to do this action" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Delete Player**
----
  Delete player from fantasy football team

* **URL**

  /players/:id

* **Method:**
  
  `DELETE`
  
* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | access_token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    { "msg": "Success delete player with id 11" }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You do not have the authority to do this action" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    { "error" : "no team with id <id> found" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```


----
  **Show NFL Player**
----
  Show all real NFL player, filtered by position and team. Get it from Fantasy Football Nerd as 3rd party Api's

* **URL**

  /players/:position/:team

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | access_token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   **Required:**
 
   `position=[string]`

    AND

   `team=[string]`

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
        "player": [
            {
                "playerId": "1391",
                "active": "1",
                "jersey": "14",
                "lname": "Dalton",
                "fname": "Andy",
                "displayName": "Andy Dalton",
                "team": "DAL",
                "position": "QB",
                "height": "6-2",
                "weight": "220",
                "dob": "1987-10-29",
                "college": "TCU"
            },
            {
                "playerId": "4198",
                "active": "1",
                "jersey": "6",
                "lname": "DiNucci",
                "fname": "Ben",
                "displayName": "Ben DiNucci",
                "team": "DAL",
                "position": "QB",
                "height": "6-3",
                "weight": "210",
                "dob": "1996-11-24",
                "college": "James Madison"
            },
            {
                "playerId": "3036",
                "active": "1",
                "jersey": "4",
                "lname": "Prescott",
                "fname": "Dak",
                "displayName": "Dak Prescott",
                "team": "DAL",
                "position": "QB",
                "height": "6-2",
                "weight": "235",
                "dob": "1993-07-29",
                "college": "Mississippi State"
            },
            {
                "playerId": "3478",
                "active": "1",
                "jersey": "7",
                "lname": "Rush",
                "fname": "Cooper",
                "displayName": "Cooper Rush",
                "team": "DAL",
                "position": "QB",
                "height": "6-3",
                "weight": "225",
                "dob": "1993-11-21",
                "college": "Central Michigan"
            },
            {
                "playerId": "3870",
                "active": "1",
                "jersey": "5",
                "lname": "Thorson",
                "fname": "Clayton",
                "displayName": "Clayton Thorson",
                "team": "DAL",
                "position": "QB",
                "height": "6-4",
                "weight": "225",
                "dob": "1995-06-15",
                "college": "Northwestern"
            }
        ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You do not have the authority to do this action" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```
