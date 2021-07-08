<template>
<div id="foodcard" class="column">
        <div class="column is-8 is-offset-2">
            <!-- <div class="box"> -->
                <div class="card"   style="overflow:auto;height:200px;">
                <div class="media">
                <div class="media-left"  style="position: sticky;">
            <figure class="image is-128x128">
                <img v-bind:src="meal.strMealThumb" style="width: 128px;height:128px;">
              </figure>
              </div>
            <div class="media-content">
                
            <h3 class="title is-4">{{meal.strMeal}}</h3>
            <hr class="login-hr">
            <p>Category : {{meal.strCategory}}</p>
            <p>Area : {{meal.strArea}}</p>
            <p>Ingredients : </p>
            <p>Instructions : {{meal.strInstructions}}</p>
            <hr class="login-hr">
            </div>
        </div>
    </div>
    </div>
    </div>
</template>


<script>
export default {
    name:'FoodCard',
    props:['meal']
}
</script>

<style>

</style>