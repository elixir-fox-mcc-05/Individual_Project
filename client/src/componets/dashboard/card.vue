<template>
    <div class="card" id="card">
        <img class="card-img-top" src="https://i.imgur.com/GrkPDIK.jpg" alt="Card image cap">
        <div class="card-body" id="card-body">
            <h6 class="card-title">With me</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
</template>

<script>
export default {
    name : "card"
}
</script>


<style>
    #card {
        background-color:transparent;
        width: 200px;
        height: 200px;
        font-size: 10px;
        padding: 0;
        margin-right: 20px;
    }

    #card-body{
        padding: 15px 0 0 0;
    }
</style>