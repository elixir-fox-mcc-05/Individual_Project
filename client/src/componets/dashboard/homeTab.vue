<template>
    <div id="main">
        <div id="section">
            <br> <h3>Made For You</h3> 
            <div id="cardbox">
                <card></card>
                <card></card>
            </div>
        </div>
        <div>
            <br> <h3>Charts</h3> 
            <div id="cardbox">
                <card></card>
                <card></card>
            </div>
        </div>
    </div>
</template>

<script>
import card from './card'
export default {
    name : "homeTab",
    components : {
        card,
    }
}
</script>

<style>


h3 {
    border-bottom: 1px solid gray;
    padding-bottom:5px ;
}

#cardbox {
    display: flex;
    flex-direction: row;
}

#main {
    background-color: rgb(15, 15, 15);
    height: 90vh;
    overflow: scroll;
    padding-left: 30px;
}

#section {
    margin-bottom: 100px;
}

</style>