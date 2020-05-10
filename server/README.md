# Individual Project

## User Login

- **URL**

  /login

- **Method:**

  `POST`

- **URL Params**

  NONE

- **Data Params**

  email=[string]<br>
  password=[string]

- **Success Response:**

  - **Code:** 200 OK<br />
    **Content:** `{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJhbmdlbGluYUBtYWlsLmNvbSIsImlhdCI6MTU4OTA3NjM5OX0._UofwrSJrH3tSN0fuEIEr-8iIpmk_XpEi4bGraXH3LI", "UserAnimes": [] }`

- **Error Response:**

  - **Code:** 400 <br />
    **Content:** `{ error : "Validate Error" }`

    OR

  - **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

- **Sample Call:**

  http://localhost:3000/login

## User Register

- **URL**

  /register

- **Method:**

  `POST`

- **URL Params**

  NONE

- **Data Params**

  first_name=[string]
  last_name=[string]
  email=[string]
  password=[string]

- **Success Response:**

  - **Code:** 201 Created<br />
    **Content:** `{ "User": { "id": 1, "first_name": "Yosa", "last_name": "Alfiqie", "email": "yosa@mail.com", "password": "$2a$10$2Vc.Uwk9.Bar7cvJBC46vua7CotA3VE8uNVvZV856TG/24awOgiba", "updatedAt": "2020-05-05T10:24:51.180Z", "createdAt": "2020-05-05T10:24:51.180Z" } }`

- **Error Response:**

  - **Code:** 400 <br />
    **Content:** `{ error : "Validate Error" }`

    OR

  - **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

- **Sample Call:**

  http://localhost:3000/register

## GET ANIME LIST

- **URL**

  /anime

- **Method:**

  `GET`

- **URL Params**

  NONE

- **Data Params**

  NONE

- **Success Response:**

  - **Code:** 200 OK<br />
    **Content:** `{ "anime": [ { "mal_id": 1049, "url": "https://myanimelist.net/anime/1049/Cello_Hiki_no_Gauche_1982", "image_url": "https://cdn.myanimelist.net/images/anime/9/36627.jpg?s=374d2845a51bee248eb4e1412ca3990e", "title": "Cello Hiki no Gauche (1982)", "airing": false, "synopsis": "The story concerns Gauche, a professional cellist. During rehearsals for a performance, he is scolded by the conductor because his playing is not good enough. His timing is off and he seems to have no...", "type": "Movie", "episodes": 1, "score": 6.94, "start_date": "1982-01-23T00:00:00+00:00", "end_date": "1982-01-23T00:00:00+00:00", "members": 10795, "rated": "G" } ] }`

- **Error Response:**

  - **Code:** 400 <br />
    **Content:** `{ error : "Validate Error" }`

    OR

  - **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

- **Sample Call:**

  http://localhost:3000/anime

## GET USER LIST

- **URL**

  /users

- **Method:**

  `GET`

- **URL Params**

  NONE

- **Data Params**

  NONE

- **Success Response:**

  - **Code:** 200 OK<br />
    **Content:** `{ "Users": [ { "id": 8, "first_name": "Angelina", "last_name": "Christy", "email": "angelina@mail.com" } ] }`

- **Error Response:**

  - **Code:** 400 <br />
    **Content:** `{ error : "Validate Error" }`

    OR

  - **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

- **Sample Call:**

  http://localhost:3000/users

## GET CURRENT USER INFO

- **URL**

  /user

- **Method:**

  `GET`

- **URL Params**

  NONE

- **Data Params**

  NONE

- **Success Response:**

  - **Code:** 200 OK<br />
    **Content:** `{ "User": { "id": 8, "first_name": "Angelina", "last_name": "Christy", "email": "angelina@mail.com", "UserAnimes": [] } }`

- **Error Response:**

  - **Code:** 400 <br />
    **Content:** `{ error : "Validate Error" }`

    OR

  - **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

- **Sample Call:**

  http://localhost:3000/user

## GET ANIME LIST

- **URL**

  /anime

- **Method:**

  `GET`

- **URL Params**

  NONE

- **Data Params**

  NONE

- **Success Response:**

  - **Code:** 200 OK<br />
    **Content:** `{ "anime": [ { "mal_id": 1049, "url": "https://myanimelist.net/anime/1049/Cello_Hiki_no_Gauche_1982", "image_url": "https://cdn.myanimelist.net/images/anime/9/36627.jpg?s=374d2845a51bee248eb4e1412ca3990e", "title": "Cello Hiki no Gauche (1982)", "airing": false, "synopsis": "The story concerns Gauche, a professional cellist. During rehearsals for a performance, he is scolded by the conductor because his playing is not good enough. His timing is off and he seems to have no...", "type": "Movie", "episodes": 1, "score": 6.94, "start_date": "1982-01-23T00:00:00+00:00", "end_date": "1982-01-23T00:00:00+00:00", "members": 10795, "rated": "G" } ] }`

- **Error Response:**

  - **Code:** 400 <br />
    **Content:** `{ error : "Validate Error" }`

    OR

  - **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

- **Sample Call:**

  http://localhost:3000/anime

## Add to Favorite

- **URL**

  /anime/favorite/id

- **Method:**

  `POST`

- **URL Params**

  id=[integer]

- **Data Params**

  NONE

- **Success Response:**

  - **Code:** 200 OK<br />
    **Content:** `{ "UserAnimes": [ { "UserId": 8, "AnimeId": 3 } ] }`

- **Error Response:**

  - **Code:** 400 <br />
    **Content:** `{ error : "Validate Error" }`

    OR

  - **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

- **Sample Call:**

  http://localhost:3000/favorite/1
