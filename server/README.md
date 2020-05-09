# **MUSIC FANS LIBRARY**

get all information about your favorite musician here

-----
## **REST API DOCUMENTATION**

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

   **Required:**
 
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
                "message": "Name character must be Min 1 and Max 20 characters"
            },
            {
                "message": "Email already registered"
            }
          ]
        }
    
    OR

  * **Code:** 500 Internal Server Error <br />   

### **Login User**

Login using user data that already created/registerd

* **Method:**

  `POST`

* **URL**

  /users/login

*  **URL Params**

   **Required:**
 
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
      
    OR

  * **Code:** 500 Internal Server Error <br /> 