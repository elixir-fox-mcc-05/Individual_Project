<template>
    <div class="row container center">
        <div class="col m6">
            <button v-if="page > 1" class="btn" @click.prevent="updatePage(page-1)">Previous</button>
        </div>
        <div class="col m6">
            <button class="btn" @click.prevent="updatePage(page+1)">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'previousNextButton',
    props: ['listSection', 'page'],
    data(){
        return {
            
        }
    },
    methods: {
        updatePage(pageNumber) {
            this.$emit('updatePage', pageNumber, this.listSection)
        }
    }
}
</script>

<style>

</style>