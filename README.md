# Individual_Project
Deploy url : https://g-meals.web.app/
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



## **Search Meals**

* **URL:**

​			/findall/:name

* **Method:**

​		`GET`

- **URL Params**

  **Required:**

  `name`

- **Data Headers**

  **Required:**

   ` none`

- **Success Response:**

  - **Code:** 200 
    **Content:** 

    ```json
    {
      "meals": [
        {
          "idMeal": "52955",
          "strMeal": "Egg Drop Soup",
          "strDrinkAlternate": null,
          "strCategory": "Vegetarian",
          "strArea": "Chinese",
          "strInstructions": "In a wok add chicken broth and wait for it to boil.\r\nNext add salt, sugar, white pepper, sesame seed oil.\r\nWhen the chicken broth is boiling add the vegetables to the wok.\r\nTo thicken the sauce, whisk together 1 Tablespoon of cornstarch and 2 Tablespoon of water in a bowl and slowly add to your soup until it's the right thickness.\r\nNext add 1 egg slightly beaten with a knife or fork and add it to the soup slowly and stir for 8 seconds\r\nServe the soup in a bowl and add the green onions on top.",
          "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/1529446137.jpg",
          "strTags": "Soup,Baking,Calorific",
          "strYoutube": "https:\/\/www.youtube.com\/watch?v=9XpzHm9QpZg",
          "strIngredient1": "Chicken Stock",
          "strIngredient2": "Salt",
          "strIngredient3": "Sugar",
          "strIngredient4": "Pepper",
          "strIngredient5": "Sesame Seed Oil",
          "strIngredient6": "Peas",
          "strIngredient7": "Mushrooms",
          "strIngredient8": "Cornstarch",
          "strIngredient9": "Water",
          "strIngredient10": "Spring Onions",
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
          "strMeasure1": "3 cups ",
          "strMeasure2": "1\/4 tsp",
          "strMeasure3": "1\/4 tsp",
          "strMeasure4": "pinch",
          "strMeasure5": "1 tsp ",
          "strMeasure6": "1\/3 cup",
          "strMeasure7": "1\/3 cup",
          "strMeasure8": "1 tbs",
          "strMeasure9": "2 tbs",
          "strMeasure10": "1\/4 cup",
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
          "strSource": "https:\/\/sueandgambo.com\/pages\/egg-drop-soup",
          "dateModified": null
        },
        {
          "idMeal": "52975",
          "strMeal": "Tuna and Egg Briks",
          "strDrinkAlternate": null,
          "strCategory": "Seafood",
          "strArea": "Tunisian",
          "strInstructions": "Heat 2 tsp of the oil in a large saucepan and cook the spring onions over a low heat for 3 minutes or until beginning to soften. Add the spinach, cover with a tight-fitting lid and cook for a further 2–3 minutes or until tender and wilted, stirring once or twice. Tip the mixture into a sieve or colander and leave to drain and cool.\r\nUsing a saucer as a guide, cut out 24 rounds about 12.5 cm (5 in) in diameter from the filo pastry, cutting 6 rounds from each sheet. Stack the filo rounds in a pile, then cover with cling film to prevent them from drying out.\r\nWhen the spinach mixture is cool, squeeze out as much excess liquid as possible, then transfer to a bowl. Add the tuna, eggs, hot pepper sauce, and salt and pepper to taste. Mix well.\r\nPreheat the oven to 200°C (400°F, gas mark 6). Take one filo round and very lightly brush with some of the remaining oil. Top with a second round and brush with a little oil, then place a third round on top and brush with oil.\r\nPlace a heaped tbsp of the filling in the middle of the round, then fold the pastry over to make a half-moon shape. Fold in the edges, twisting them to seal, and place on a non-stick baking sheet. Repeat with the remaining pastry and filling to make 8 briks in all.\r\nLightly brush the briks with the remaining oil. Bake for 12–15 minutes or until the pastry is crisp and golden brown.\r\nMeanwhile, combine the tomatoes and cucumber in a bowl and sprinkle with the lemon juice and seasoning to taste. Serve the briks hot with this salad and the chutney.",
          "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/2dsltq1560461468.jpg",
          "strTags": null,
          "strYoutube": "https:\/\/www.youtube.com\/watch?v=C5n1fN8TGHs",
          "strIngredient1": "Olive Oil",
          "strIngredient2": "Spring Onions",
          "strIngredient3": "Spinach",
          "strIngredient4": "Filo Pastry",
          "strIngredient5": "Tuna",
          "strIngredient6": "Eggs",
          "strIngredient7": "Hotsauce",
          "strIngredient8": "Tomatoes",
          "strIngredient9": "Cucumber",
          "strIngredient10": "Lemon Juice",
          "strIngredient11": "Apricot Jam",
          "strIngredient12": "",
          "strIngredient13": "",
          "strIngredient14": "",
          "strIngredient15": "",
          "strIngredient16": "",
          "strIngredient17": "",
          "strIngredient18": "",
          "strIngredient19": "",
          "strIngredient20": "",
          "strMeasure1": "2 tbs",
          "strMeasure2": "8",
          "strMeasure3": "200g",
          "strMeasure4": "4",
          "strMeasure5": "1 can ",
          "strMeasure6": "2",
          "strMeasure7": "Dash",
          "strMeasure8": "4 Chopped",
          "strMeasure9": "1\/4 ",
          "strMeasure10": "1 tbs",
          "strMeasure11": "4 tbs",
          "strMeasure12": " ",
          "strMeasure13": " ",
          "strMeasure14": " ",
          "strMeasure15": " ",
          "strMeasure16": " ",
          "strMeasure17": " ",
          "strMeasure18": " ",
          "strMeasure19": " ",
          "strMeasure20": " ",
          "strSource": "http:\/\/allrecipes.co.uk\/recipe\/3096\/tunisian-tuna-and-egg-briks.aspx",
          "dateModified": null
        },
        {
          "idMeal": "52962",
          "strMeal": "Salmon Eggs Eggs Benedict",
          "strDrinkAlternate": null,
          "strCategory": "Breakfast",
          "strArea": "American",
          "strInstructions": "First make the Hollandaise sauce. Put the lemon juice and vinegar in a small bowl, add the egg yolks and whisk with a balloon whisk until light and frothy. Place the bowl over a pan of simmering water and whisk until mixture thickens. Gradually add the butter, whisking constantly until thick – if it looks like it might be splitting, then whisk off the heat for a few mins. Season and keep warm.\r\n\r\nTo poach the eggs, bring a large pan of water to the boil and add the vinegar. Lower the heat so that the water is simmering gently. Stir the water so you have a slight whirlpool, then slide in the eggs one by one. Cook each for about 4 mins, then remove with a slotted spoon.\r\n\r\nLightly toast and butter the muffins, then put a couple of slices of salmon on each half. Top each with an egg, spoon over some Hollandaise and garnish with chopped chives.",
          "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/1550440197.jpg",
          "strTags": "Bun,Brunch",
          "strYoutube": "https:\/\/www.youtube.com\/watch?v=Woiiet4vQ58",
          "strIngredient1": "Eggs",
          "strIngredient2": "White Wine Vinegar",
          "strIngredient3": "English Muffins",
          "strIngredient4": "Butter",
          "strIngredient5": "Smoked Salmon",
          "strIngredient6": "Lemon Juice",
          "strIngredient7": "White Wine Vinegar",
          "strIngredient8": "Egg",
          "strIngredient9": "Unsalted Butter",
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
          "strMeasure1": "4",
          "strMeasure2": "2 tbs",
          "strMeasure3": "2",
          "strMeasure4": "To serve",
          "strMeasure5": "8 slices",
          "strMeasure6": "2 tsp",
          "strMeasure7": "2 tsp",
          "strMeasure8": "3 Yolkes",
          "strMeasure9": "125g",
          "strMeasure10": " ",
          "strMeasure11": " ",
          "strMeasure12": " ",
          "strMeasure13": " ",
          "strMeasure14": " ",
          "strMeasure15": " ",
          "strMeasure16": " ",
          "strMeasure17": " ",
          "strMeasure18": " ",
          "strMeasure19": " ",
          "strMeasure20": " ",
          "strSource": "https:\/\/www.bbcgoodfood.com\/recipes\/73606\/eggs-benedict-with-smoked-salmon-and-chives",
          "dateModified": null
        },
        {
          "idMeal": "52816",
          "strMeal": "Roasted Eggplant With Tahini, Pine Nuts, and Lentils",
          "strDrinkAlternate": null,
          "strCategory": "Vegetarian",
          "strArea": "American",
          "strInstructions": "\r\nFor the Lentils: Adjust oven rack to center position and preheat oven to 450°F to prepare for roasting eggplant. Meanwhile, heat 2 tablespoons olive oil in a medium saucepan over medium heat until shimmering. Add carrots, celery, and onion and cook, stirring, until softened but not browned, about 4 minutes. Add garlic and cook, stirring, until fragrant, about 30 seconds. Add lentils, bay leaves, stock or water, and a pinch of salt. Bring to a simmer, cover with the lid partially ajar, and cook until lentils are tender, about 30 minutes. (Top up with water if lentils are at any point not fully submerged.) Remove lid, stir in vinegar, and reduce until lentils are moist but not soupy. Season to taste with salt and pepper, cover, and keep warm until ready to serve.\r\n\r\n2.\r\nFor the Eggplant: While lentils cook, cut each eggplant in half. Score flesh with the tip of a paring knife in a cross-hatch pattern at 1-inch intervals. Transfer to a foil-lined rimmed baking sheet, cut side up, and brush each eggplant half with 1 tablespoon oil, letting each brushstroke be fully absorbed before brushing with more. Season with salt and pepper. Place a rosemary sprig on top of each one. Transfer to oven and roast until completely tender and well charred, 25 to 35 minutes. Remove from oven and discard rosemary.\r\n\r\n3.\r\nTo Serve: Heat 2 tablespoons olive oil and pine nuts in a medium skillet set over medium heat. Cook, tossing nuts frequently, until golden brown and aromatic, about 4 minutes. Transfer to a bowl to halt cooking. Stir half of parsley and rosemary into lentils and transfer to a serving platter. Arrange eggplant halves on top. Spread a few tablespoons of tahini sauce over each eggplant half and sprinkle with pine nuts. Sprinkle with remaining parsley and rosemary, drizzle with additional olive oil, and serve.",
          "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/ysqrus1487425681.jpg",
          "strTags": "Vegetarian,Pulse,Nutty",
          "strYoutube": "https:\/\/www.youtube.com\/watch?v=HkywCtna9t0",
          "strIngredient1": "Olive Oil",
          "strIngredient2": "Carrots",
          "strIngredient3": "Celery",
          "strIngredient4": "Onion",
          "strIngredient5": "Garlic",
          "strIngredient6": "Brown Lentils",
          "strIngredient7": "Bay Leaves",
          "strIngredient8": "Water",
          "strIngredient9": "Salt",
          "strIngredient10": "Apple Cider Vinegar",
          "strIngredient11": "Pepper",
          "strIngredient12": "Egg Plants",
          "strIngredient13": "Rosemary",
          "strIngredient14": "Pine nuts",
          "strIngredient15": "Parsley",
          "strIngredient16": "",
          "strIngredient17": "",
          "strIngredient18": "",
          "strIngredient19": "",
          "strIngredient20": "",
          "strMeasure1": "2 tablespoons",
          "strMeasure2": "2 small cut into chunks",
          "strMeasure3": "2 small stalks",
          "strMeasure4": "1 medium finely diced",
          "strMeasure5": "6 medium cloves sliced",
          "strMeasure6": "12 ounces (340g)",
          "strMeasure7": "2",
          "strMeasure8": "4 cups",
          "strMeasure9": "Pinch",
          "strMeasure10": "2 teaspoons (10ml)",
          "strMeasure11": "Pinch",
          "strMeasure12": "2 large",
          "strMeasure13": "4 sprigs",
          "strMeasure14": "1\/4 cup ",
          "strMeasure15": "2 tablespoons",
          "strMeasure16": "",
          "strMeasure17": "",
          "strMeasure18": "",
          "strMeasure19": "",
          "strMeasure20": "",
          "strSource": "http:\/\/www.seriouseats.com\/recipes\/2016\/03\/roasted-eggplant-tahini-pine-nut-lentil-vegan-experience-recipe.html",
          "dateModified": null
        },
        {
          "idMeal": "52817",
          "strMeal": "Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt",
          "strDrinkAlternate": null,
          "strCategory": "Vegetarian",
          "strArea": "American",
          "strInstructions": "Heat the oil in a 12-inch skillet over high heat until shimmering. Add the eggplants and lower the heat to medium. Season with salt and pepper as you rotate the eggplants, browning them on all sides. Continue to cook, turning regularly, until a fork inserted into the eggplant meets no resistance (you may have to stand them up on their fat end to finish cooking the thickest parts), about 20 minutes, lowering the heat and sprinkling water into the pan as necessary if the eggplants threaten to burn or smoke excessively.\r\n\r\n2.\r\nMix the harissa, chickpeas and tomatoes together, then add to the eggplants. Cook until the tomatoes have blistered and broken down, about 5 minutes more. Season with salt and pepper and add water as necessary to thin to a saucy consistency. Meanwhile, combine the yogurt and cumin in a serving bowl. Season with salt and pepper.\r\n\r\n3.\r\nTop the eggplant mixture with the parsley, drizzle with more extra virgin olive oil, and serve with the yogurt on the side.",
          "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/yqwtvu1487426027.jpg",
          "strTags": "Vegetarian",
          "strYoutube": "https:\/\/www.youtube.com\/watch?v=uYB-1xJp4lg",
          "strIngredient1": "Olive Oil",
          "strIngredient2": "Egg Plants",
          "strIngredient3": "Harissa",
          "strIngredient4": "Chickpeas",
          "strIngredient5": "Cherry Tomatoes",
          "strIngredient6": "Greek yogurt",
          "strIngredient7": "Ground cumin",
          "strIngredient8": "Parsley",
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
          "strMeasure1": "4 tablespoons",
          "strMeasure2": "6 small",
          "strMeasure3": "½ tablespoon",
          "strMeasure4": "1 can",
          "strMeasure5": "2 cups halved",
          "strMeasure6": "1 1\/2 cups",
          "strMeasure7": "1 tablespoon",
          "strMeasure8": "½ cup ",
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
          "strSource": "http:\/\/www.seriouseats.com\/2014\/09\/one-pot-wonders-stovetop-eggplant-harissa-chickpeas-cumin.html",
          "dateModified": null
        }
      ]
    }
    ```

    

  

  

- **Sample Call:**

  ```
  axios({
      method:"GET",
      url:"/findall/:name"
  })
  ```



