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
