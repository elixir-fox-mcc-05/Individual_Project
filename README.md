# Individual_Project server API documentation

* **URL:**
/

* **Method:**
GET

* **URL Params:**
none

* **Data Params:**
none

* **Success Response:**
{
  "restaurants": [
    {
      "name": "Restoran Sederhana",
      "address": "Sampoerna Strategic Square, Lantai Lower Ground, Jl. Jenderal Sudirman, Sudirman, Jakarta",
      "img": "https://b.zmtcdn.com/data/pictures/0/7423580/423825abe00af8a880c2169bcff70e86.jpg",
      "url": "https://www.zomato.com/jakarta/restoran-sederhana-2-sudirman?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
    },
    {
      "name": "de' Belango",
      "address": "Jl. Karbela Barat No. 43, Setiabudi, Jakarta",
      "img": "https://b.zmtcdn.com/data/pictures/7/19168397/7a8bef458c2cbadaaf1f159574453f80.jpg",
      "url": "https://www.zomato.com/jakarta/de-belango-setiabudi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
    },
    .
    .
  ]
}

* **Error Response:**
  * **code:** 500 <br />
  * **Content:** {error: Internal Server Error}

--------------------------------------------------------------------------------------------------

 **URL:**
/login

* **Method:**
POST

* **URL Params:**
none

* **Data Params:**
  * **email:** string <br />
  * **password:** string

* **Success Response:**
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJsb2NrZG93bkB0ZXN0LmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJEs0WUxkM1k4VGJZa1ZhR29wVkZab3VjZHRVbFRjYml4Y0w0RzVoT2RNSUtVYkd0NC42MkxpIiwiaWF0IjoxNTg4MDA1NzQzfQ.XwHm238w633qa09LZiyU78_Zm52JvCYouXfNUa8BLVc"
}

* **Error Response:**
  * **code:** 400 <br />
  * **Content 1:** {"error": "password not match"}<br />
  * **Content 2:** {"error": "Invalid email or password"}