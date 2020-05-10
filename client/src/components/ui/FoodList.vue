<template>
<div id="foodlist" class="is-flex-desktop-only" style="height:700px;overflow:auto;">
<FoodCard v-for="(meal,i) in foods" :key="i" :meal="meal"></FoodCard>
</div>
</template>


<script>
import FoodCard from './FoodCard'
export default {
    name : 'FoodList',
    props : ['foods'],
    components : {
        FoodCard
    }
}
</script>

<style>
#foodlist {
   background-image : url("https://img.pngio.com/food-background-images-94-images-in-co-381169-png-images-pngio-food-png-background-1440_619.png");
   background-repeat : no-repeat ;
}
</style>