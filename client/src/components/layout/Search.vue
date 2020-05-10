<template>
    <section class="hero is-info">
        <div class="section">
            <div class="box">
                <div class="field has-addons">
                    <div class="control is-expanded">
                        <input  v-model="searchName" class="input has-text-centered" type="search" placeholder="» » » » » » Search Name « « « « « «">
                    </div>
                    <div class="control">
                        <a @click.prevent="search" class="button is-info">Search</a>
                    </div>
                </div>
            </div>
</section>
</template>


<script>
export default {
    name : 'Search',
    data(){
        return {
            searchName : ''
        }
    },
    methods: {
        search(){
            let name = this.searchName
            // console.log(name)
            // let data = this.searchName
            this.$emit('search',name)
            this.searchName = ''
        }
    },

}
</script>

<style>
</style>