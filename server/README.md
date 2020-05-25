## **REST API DOCUMENTATION**
---------

**INTRODUCTION**

Rest api documentation of server for individual project from *Hacktiv8*

----
## **Users**
----
Represents for register user data and for user login as a requirements before using this Website.

### **Register User**

Create user data

* **Method:**

  `POST`

* **URL**

  /users/register
  
*  **URL Params**

    None

* **Data Params**

    | Params       | Description                          |
    |--------------|--------------------------------------|
    | name         | name of the user  |
    | email        | E-mail of the user, must be unique   |
    | password     | Password of the user                 |

* **Success Response:**

  * **Code:** 201 <br />
  **Content:** 

        {
            "id": 1,
            "name": "example",
            "email": "example@gmail.com"
        }

* **Error Response:**

  * **Code:** 400 Bad Request <br />
  **Content:**

        {
          "name": "BadRequest",
          "errors": [
            {
                "message": "E-mail must be filled"
            },
            {
                "message": "E-mail must be in e-mail format <youremail@mail.com>"
            },
            {
                "message": "Password must be filled"
            },
            {
                "message": "Name must be filled"
            },
            {
                "message": "Your Name must be 1-15 characters long"
            },
            {
                "message": "Email already registered"
            }
          ]
        }

### **Login User**

Login using user data that already created/registerd

* **Method:**

  `POST`

* **URL**

  /users/login

*  **URL Params**

    None

* **Data Params**

    | Params   | Description                                                      |
    |----------|------------------------------------------------------------------|
    | email    | E-mail of the user, must be already register                     |
    | password | Password of the user, must be already register, pair with e-mail |

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 

        {
            "token": "---< your token code >---",
            "id": 1,
            "name": "example",
            "email": "example@gmail.com",
        }  

* **Error Response:**

  * **Code:** 400 Bad Request <br />
  **Content:**

        {
          "name": "BadRequest",
          "errors": [
            {
                "message": "Invalid E-Mail/Password"
            }
          ]
        }

----
## **Favorites**
----
Represents for favorites musician that all users save

### **Add Favorite**

Create favorite data for spesific userId

* **Method:**

  `POST`

* **URL**

  /products

*  **URL Params**
 
    None

*  **Headers**
    
    token

* **Data Params**

    | Params       | Description                                                   |
    |--------------|---------------------------------------------------------------|
    | name         | favorite musician name, must be unique in spesific userId     |

* **Success Response:**

  * **Code:** 201 Created<br />
  **Content:** 

        {
            "product": {
                "id": 1,
                "name": "example 1",
                "userId": 1,
                "updatedAt": "2020-05-13T17:58:28.831Z",
                "createdAt": "2020-05-13T17:58:28.831Z"
            }
        }

* **Error Response:**

  * **Code:** 401 Unauthorized <br />
  **Content:**

        {
          "name": "Unauthorized",
          "errors": [
                {
                    "message": "Unauthorized. Please login first"
                },
          ]
        }

    OR

  * **Code:** 400 Bad Request <br />
  **Content:**

        {
          "name": "BadRequest",
          "errors": [
                {
                    "message": "Name must be filled"
                },
                {
                    "message": "example 1 already in your favorite"
                },
          ]
        }
    
    OR

  * **Code:** 500 Internal Server Error <br />
  **Content:**

        {
          "name": "InternalServerError",
          "errors": [
                {
                    "message": "WHERE parameter \"name\" has invalid \"undefined\" value"
                },
          ]
        }

### **Read All Favorites**

Read all favorites data with spesific userId

* **Method:**

  `GET`

* **URL**

  /products

*  **URL Params**
 
    None

*  **Headers**
    
    token

* **Data Params**

    none

* **Success Response:**

  * **Code:** 200 Ok<br />
  **Content:** 

        {
            "products": [
                {
                    "id": 1,
                    "name": "example 1",
                    "userId": 1,
                    "updatedAt": "2020-05-13T17:58:28.831Z",
                    "createdAt": "2020-05-13T17:58:28.831Z"
                },
                {
                    "id": 2,
                    "name": "2 example",
                    "userId": 1,
                    "updatedAt": "2020-05-13T17:58:28.831Z",
                    "createdAt": "2020-05-13T17:58:28.831Z"
                }
            ]
        }

* **Error Response:**

  * **Code:** 401 Unauthorized <br />
  **Content:**

        {
          "name": "Unauthorized",
          "errors": [
                {
                    "message": "Unauthorized. Please login first"
                },
          ]
        }

### **Delete Favorite**

Delete favorite data with spesific userId by favoriteId

* **Method:**

  `DELETE`

* **URL**

  /products/:favoriteId

*  **URL Params**
 
    favoriteId = [integer]

*  **Headers**
    
    token

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 Ok<br />
  **Content:** 

            {
                "message": "Favorite with id 9 delete"
            }

* **Error Response:**

    * **Code:** 401 Unauthorized <br />
    **Content:**

            {
                "name": "Unauthorized",
                "errors": [
                        {
                            "message": "Unauthorized. Please login first"
                        },
                ]
            }

    * **Code:** 404 Not Found <br />
    **Content:**

            {
                "name": "NotFound",
                "errors": [
                        {
                            "message": "Favorite with id 9 not found"
                        },
                ]
            }
