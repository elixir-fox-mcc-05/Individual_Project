**Register**
----

* **URL**

  /users/register

* **Method:**
  
  `POST` 
  
*  **URL Params**

   none

* **Data Params**

  {
      "email": "agus@gmail.com",
      "password": "123456"
  }

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** `
        {
            "id": 15,
            "email": "agus@gmail.com"
        }
    `
 
* **Error Response:**

    * **Code:** 400 <br />
    **Content:** `{
      "code": "400",
      "type": "Bad Request",
      "errors": "Email already exists"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---
**Login**
----
  
* **URL**

  /users/login

* **Method:**
  
  `POST` 

*  **URL Params**

   none

* **Data Params**

  {
      "email": "agus@gmail.com",
      "password": "123456"
  }

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
}`
 
* **Error Response:**

    * **Code:** 400 <br />
    **Content:** `{
      "code": "400",
      "type": "Bad Request",
      "errors": "email atau password salah"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---

**Show Popular Movies**
----

* **URL**

  /movie/popular

* **Method:**
  
  `GET`

    **Required:**
 
    Headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
    }

*  **URL Params**

    none

* **Data Params**

    none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `
    {
      "popularity": 458.421,
      "vote_count": 3295,
      "video": false,
      "poster_path": "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
      "id": 419704,
      "adult": false,
      "backdrop_path": "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
      "original_language": "en",
      "original_title": "Ad Astra",
      "genre_ids": [
        18,
        878
      ],
      "title": "Ad Astra",
      "vote_average": 6,
      "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
      "release_date": "2019-09-17"
    }
    `
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---

**Show Top Rated Movies**
----

* **URL**

  /movie/toprated

* **Method:**
  
  `GET`

    **Required:**
 
    Headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
    }

*  **URL Params**

    none

* **Data Params**

    none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `
    {
      "popularity": 458.421,
      "vote_count": 3295,
      "video": false,
      "poster_path": "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
      "id": 419704,
      "adult": false,
      "backdrop_path": "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
      "original_language": "en",
      "original_title": "Ad Astra",
      "genre_ids": [
        18,
        878
      ],
      "title": "Ad Astra",
      "vote_average": 6,
      "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
      "release_date": "2019-09-17"
    }
    `
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---

**Show Now Playing Movie**
----

* **URL**

  /movie/nowplaying

* **Method:**
  
  `GET`

    **Required:**
 
    Headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
    }

*  **URL Params**

    none

* **Data Params**

    none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `
    {
      "popularity": 458.421,
      "vote_count": 3295,
      "video": false,
      "poster_path": "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
      "id": 419704,
      "adult": false,
      "backdrop_path": "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
      "original_language": "en",
      "original_title": "Ad Astra",
      "genre_ids": [
        18,
        878
      ],
      "title": "Ad Astra",
      "vote_average": 6,
      "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
      "release_date": "2019-09-17"
    }
    `
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---

**Show Popular TV Series**
----

* **URL**

  /tv/popular

* **Method:**
  
  `GET`

    **Required:**
 
    Headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
    }

*  **URL Params**

    none

* **Data Params**

    none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `
    {
      "original_name": "The Flash",
      "genre_ids": [
        18,
        10765
      ],
      "name": "The Flash",
      "popularity": 193.578,
      "origin_country": [
        "US"
      ],
      "vote_count": 4287,
      "first_air_date": "2014-10-07",
      "backdrop_path": "/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg",
      "original_language": "en",
      "id": 60735,
      "vote_average": 7.2,
      "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
      "poster_path": "/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
    }
    `
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

--- 

**Show Top Rated TV Series**
----

* **URL**

  /tv/toprated

* **Method:**
  
  `GET`

    **Required:**
 
    Headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
    }

*  **URL Params**

    none

* **Data Params**

    none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `
    {
      "original_name": "The Flash",
      "genre_ids": [
        18,
        10765
      ],
      "name": "The Flash",
      "popularity": 193.578,
      "origin_country": [
        "US"
      ],
      "vote_count": 4287,
      "first_air_date": "2014-10-07",
      "backdrop_path": "/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg",
      "original_language": "en",
      "id": 60735,
      "vote_average": 7.2,
      "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
      "poster_path": "/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
    }
    `
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---

**Show Search Result**
----

* **URL**

  /tv/search

* **Method:**
  
  `GET`

    **Required:**
 
    Headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
    }

*  **URL Params**

    none

* **Data Params**

    none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `
      {
  "Title": "Batman",
  "Year": "1989",
  "Rated": "PG-13",
  "Released": "23 Jun 1989",
  "Runtime": "126 min",
  "Genre": "Action, Adventure",
  "Director": "Tim Burton",
  "Writer": "Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)",
  "Actors": "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl",
  "Plot": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
  "Language": "English, French, Spanish",
  "Country": "USA, UK",
  "Awards": "Won 1 Oscar. Another 8 wins & 26 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "7.5/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "72%"
    },
    {
      "Source": "Metacritic",
      "Value": "69/100"
    }
  ],
  "Metascore": "69",
  "imdbRating": "7.5",
  "imdbVotes": "326,682",
  "imdbID": "tt0096895",
  "Type": "movie",
  "DVD": "25 Mar 1997",
  "BoxOffice": "N/A",
  "Production": "Warner Bros. Pictures",
  "Website": "N/A",
  "Response": "True"
}
    `
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---