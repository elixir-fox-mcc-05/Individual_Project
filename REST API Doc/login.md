**Title**
----
  Login 

* **URL**

  /login

* **Method:**

  `POST`

* **Data Params**

  `email:[string]`
  `password:[string]`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhc2RAYXNkLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaWF0IjoxNTg5MDc4MjAwfQ.T3wzEvAwsWHzS9zw99e1K8sFjKXjxpVu5XcAmsiKiS}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{{
                    "error": "invalid password"
                  } }`


* **Sample Call:**

  axios({
        method: 'post',
        url : 'http://localhost:3000/login',
        data : {
            email : data.email,
            password : data.password
        }
    })

