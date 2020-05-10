<template>
<div v-if="loggedIn">
    <Search :searchName="searchName" @search="search"></Search>
    <FoodList :foods="foods"></FoodList>
</div>
</template>


<script>
import Search from '../layout/Search'
import FoodList from '../ui/FoodList'
export default {
    name : 'Menu',
    components : {
        Search,
        FoodList
    },
    props:['searchName','loggedIn','foods'],
    methods: {
        search(name){
            // console.log(name)
            this.$emit('search',name)
        }
    },
}
</script>

<style>
</style>