# Individual_Project

Source Api : https://www.themealdb.com/api.php
email : api@hacktiv8.com,  password: test



## **REGISTER**

* **URL:**

​			/register

* **Method:**

​		`POST`

- **URL Params**

  **Required:**

  `None`

- **Data Headers**

  **Required:**

  `None`

  **Data Params**

  **Required:**

  `email:string`

  `password:string`

- **Success Response:**

  - **Code:** 200 
    **Content:** 

    ```json
    {  
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJpZ3VuIiwiaWF0IjoxNTg2NTI1Mjg4fQ.H6FYpX5AIJpa5MOPR3iR9-NE0vTEvx2KF76c9_wkzzY"
    }
    ```

    

- **Error Response:**

  - **Code:** 400 Bad Request
    **Content:** 

    ```json
    {
      "msg": "add user fail",
      "error": {
        "name": "SequelizeValidationError",
        "errors": [     
          {
            "message": "User.email cannot be null",
            "type": "notNull Violation",
            "path": "email",
            "value": null,
            "origin": "CORE",
            "instance": {
              "id": null,
              "updatedAt": "2020-04-10T15:41:58.487Z",
              "createdAt": "2020-04-10T15:41:58.487Z"
            },
            "validatorKey": "is_null",
            "validatorName": null,
            "validatorArgs": []
          },
          {
            "message": "User.password cannot be null",
            "type": "notNull Violation",
            "path": "password",
            "value": null,
            "origin": "CORE",
            "instance": {
              "id": null,
              "updatedAt": "2020-04-10T15:41:58.487Z",
              "createdAt": "2020-04-10T15:41:58.487Z"
            },
            "validatorKey": "is_null",
            "validatorName": null,
            "validatorArgs": []
          }
        ]
      }
    }
    ```

    

- **Sample Call:**

  ```
    axios({
              method:"POST",
              url:"/register",
              data:{
                  email:this.form.email,
                  password:this.form.password
            		}
          })
  ```







## **LOGIN**

* **URL:**

​			/login

* **Method:**

​		`POST`

- **URL Params**

  **Required:**

  `None`

- **Data Headers**

  **Required:**

  `none`

- **Data Params**

  **Required:**

  `email:string`

  `password:string`

- **Success Response:**

  - **Code:** 200 
    **Content:** 

    ```json
    {
      "id": 1,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJpZ3VuIiwiaWF0IjoxNTg2NTMzNTQ3fQ.TUjn0MVoXqgzPtz44G5pRCGxB4cN2wzBN2veoxzzOtw"
    }
    ```

    

- **Error Response:**

  - **Code:** 401 Unauthorized
    **Content:** 

    ```json
    {
      "msg": "username/password not found"
    }
    ```

    

    

- **Sample Call:**

  ```
    axios({
        method:"POST",
        url:"/login",
        data:{
            username:this.username,
            password:this.password
        }
    })
  ```



## **Find Random Meals**

* **URL:**

​			/

* **Method:**

​		`GET`

- **URL Params**

  **Required:**

  `None`

- **Data Headers**

  **Required:**

   ` none`

- **Success Response:**

  - **Code:** 200 
    **Content:** 

    ```json
    {
      "msg": "find random success",
      "data": {
        "meals": [
          {
            "idMeal": "52859",
            "strMeal": "Key Lime Pie",
            "strDrinkAlternate": null,
            "strCategory": "Dessert",
            "strArea": "American",
            "strInstructions": "Heat the oven to 160C/fan 140C/gas 3. Whizz the biscuits to crumbs in a food processor (or put in a strong plastic bag and bash with a rolling pin). Mix with the melted butter and press into the base and up the sides of a 22cm loose-based tart tin. Bake in the oven for 10 minutes. Remove and cool.\r\nPut the egg yolks in a large bowl and whisk for a minute with electric beaters. Add the condensed milk and whisk for 3 minutes then add the zest and juice and whisk again for 3 minutes. Pour the filling into the cooled base then put back in the oven for 15 minutes. Cool then chill for at least 3 hours or overnight if you like.\r\nWhen you are ready to serve, carefully remove the pie from the tin and put on a serving plate. To decorate, softly whip together the cream and icing sugar. Dollop or pipe the cream onto the top of the pie and finish with extra lime zest.",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/qpqtuu1511386216.jpg",
            "strTags": "Cake,Pie,Desert,Fruity,Sour",
            "strYoutube": "https://www.youtube.com/watch?v=q4Rz7tUkX9A",
            "strIngredient1": "Digestive Biscuits",
            "strIngredient2": "Butter",
            "strIngredient3": "Condensed Milk",
            "strIngredient4": "Egg Yolks",
            "strIngredient5": "Lime",
            "strIngredient6": "Double Cream",
            "strIngredient7": "Icing Sugar",
            "strIngredient8": "Lime",
            "strIngredient9": "",
            "strIngredient10": "",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": "",
            "strIngredient17": "",
            "strIngredient18": "",
            "strIngredient19": "",
            "strIngredient20": "",
            "strMeasure1": "300g",
            "strMeasure2": "150g",
            "strMeasure3": "400g",
            "strMeasure4": "3",
            "strMeasure5": "4",
            "strMeasure6": "300ml ",
            "strMeasure7": "1 tbls",
            "strMeasure8": "to serve",
            "strMeasure9": "",
            "strMeasure10": "",
            "strMeasure11": "",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "strMeasure16": "",
            "strMeasure17": "",
            "strMeasure18": "",
            "strMeasure19": "",
            "strMeasure20": "",
            "strSource": "https://www.bbcgoodfood.com/recipes/2155644/key-lime-pie",
            "dateModified": null
          }
        ]
      }
    }
    ```

    

  

  

- **Sample Call:**

  ```
  axios({
      method:"GET",
      url:"/"
  })
  ```

## 

