# Individual_Project

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

**Title**
----
  Show Random Recipe

* **URL**

  /foods

* **Method:**

  `GET` 
  

* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{
                    "meals": [
                        {
                            "idMeal": "53011",
                            "strMeal": "Chicken Quinoa Greek Salad",
                            "strDrinkAlternate": null,
                            "strCategory": "Chicken",
                            "strArea": "Greek",
                            "strInstructions": "Cook the quinoa following the pack instructions, then rinse in cold water and drain thoroughly.\r\n\r\nMeanwhile, mix the butter, chilli and garlic into a paste. Toss the chicken fillets in 2 tsp of the olive oil with some seasoning. Lay in a hot griddle pan and cook for 3-4 mins each side or until cooked through. Transfer to a plate, dot with the spicy butter and set aside to melt.\r\n\r\nNext, tip the tomatoes, olives, onion, feta and mint into a bowl. Toss in the cooked quinoa. Stir through the remaining olive oil, lemon juice and zest, and season well. Serve with the chicken fillets on top, drizzled with any buttery chicken juices.",
                            "strMealThumb": "https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg",
                            "strTags": null,
                            "strYoutube": "https://www.youtube.com/watch?v=akcrkXYr61M",
                            "strIngredient1": "Quinoa",
                            "strIngredient2": "Butter",
                            "strIngredient3": "Red Chilli",
                            "strIngredient4": "Garlic",
                            "strIngredient5": "Chicken Breast",
                            "strIngredient6": "Olive Oil",
                            "strIngredient7": "Black Olives",
                            "strIngredient8": "Red Onions",
                            "strIngredient9": "Feta",
                            "strIngredient10": "Mint",
                            "strIngredient11": "Lemon",
                            "strIngredient12": "",
                            "strIngredient13": "",
                            "strIngredient14": "",
                            "strIngredient15": "",
                            "strIngredient16": "",
                            "strIngredient17": "",
                            "strIngredient18": "",
                            "strIngredient19": "",
                            "strIngredient20": "",
                            "strMeasure1": "225g",
                            "strMeasure2": "25g",
                            "strMeasure3": "1 chopped",
                            "strMeasure4": "1 clove finely chopped",
                            "strMeasure5": "400g",
                            "strMeasure6": "2 tbs",
                            "strMeasure7": "Handful",
                            "strMeasure8": "1 chopped",
                            "strMeasure9": "100g ",
                            "strMeasure10": "Chopped",
                            "strMeasure11": "Juice of 1/2",
                            "strMeasure12": " ",
                            "strMeasure13": " ",
                            "strMeasure14": " ",
                            "strMeasure15": " ",
                            "strMeasure16": " ",
                            "strMeasure17": " ",
                            "strMeasure18": " ",
                            "strMeasure19": " ",
                            "strMeasure20": " ",
                            "strSource": "https://www.bbcgoodfood.com/recipes/griddled-chicken-quinoa-greek-salad",
                            "dateModified": null
                        }
                    ]
                }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "INTERNAL SERVER ERROR" }`


* **Sample Call:**

  axios({
            method:'get',
            url:'http://localhost:3000/foods'
        })


**Title**
----
  Search Food Recipe

* **URL**

  /foods/search

* **Method:**
  
  `POST`
  
*  **URL Params**

   **Required:**
 
   `token=[string]`


* **Data Params**

  `searchname=[string]`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `
    "meals": [
                {
                    "idMeal": "52768",
                    "strMeal": "Apple Frangipan Tart",
                    "strDrinkAlternate": null,
                    "strCategory": "Dessert",
                    "strArea": "British",
                    "strInstructions": "Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, crème fraiche or ice cream.",
                    "strMealThumb": "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
                    "strTags": "Tart,Baking,Fruity",
                    "strYoutube": "https://www.youtube.com/watch?v=rp8Slv4INLk",
                    "strIngredient1": "digestive biscuits",
                    "strIngredient2": "butter",
                    "strIngredient3": "Bramley apples",
                    "strIngredient4": "butter, softened",
                    "strIngredient5": "caster sugar",
                    "strIngredient6": "free-range eggs, beaten",
                    "strIngredient7": "ground almonds",
                    "strIngredient8": "almond extract",
                    "strIngredient9": "flaked almonds",
                    "strIngredient10": "",
                    "strIngredient11": "",
                    "strIngredient12": "",
                    "strIngredient13": "",
                    "strIngredient14": "",
                    "strIngredient15": "",
                    "strIngredient16": null,
                    "strIngredient17": null,
                    "strIngredient18": null,
                    "strIngredient19": null,
                    "strIngredient20": null,
                    "strMeasure1": "175g/6oz",
                    "strMeasure2": "75g/3oz",
                    "strMeasure3": "200g/7oz",
                    "strMeasure4": "75g/3oz",
                    "strMeasure5": "75g/3oz",
                    "strMeasure6": "2",
                    "strMeasure7": "75g/3oz",
                    "strMeasure8": "1 tsp",
                    "strMeasure9": "50g/1¾oz",
                    "strMeasure10": "",
                    "strMeasure11": "",
                    "strMeasure12": "",
                    "strMeasure13": "",
                    "strMeasure14": "",
                    "strMeasure15": "",
                    "strMeasure16": null,
                    "strMeasure17": null,
                    "strMeasure18": null,
                    "strMeasure19": null,
                    "strMeasure20": null,
                    "strSource": null,
                    "dateModified": null
                }
            ]
        }`
 
* **Error Response:**


  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "searchname is empty" }`

  

* **Sample Call:**

  axios({
            method:'post',
            url:'http://localhost:3000/foods/search',
            data : {
                searchname : name
            }
        })

