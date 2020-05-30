<template>
    <div>
        <div class="card-body">
            <p class="card-title">Title : {{top.title}}</p>
            <p class="card-text">Rating Score : {{top.rating}}</p>
            <a :href="top.url" style="color:red;"> Url : {{top.url}} </a><br>
            <a class="btn btn-primary" role="button" @click.prevent="remove(top)">Remove</a>
            <a class="btn btn-primary" role="button" @click.prevent="watched(top)">{{top.status ? "Unwatched" : "Watched"}}</a>
        </div>
  </div>
</template>

<script>
export default {
    name : "userList",
    props : ["top"],
    methods : {
        watched(item){
            const payload = {
                id : item.id
            };
            item.status ? payload.status = false : payload.status = true;
            this.$emit("watched", payload);
        },
        remove(item){
            const data = {
                id : item.id
            };
            this.$emit("remove", data)
        }
    }
}
</script>

<style>

</style>