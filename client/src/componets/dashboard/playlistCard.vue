<template>
    <div class="card" id="playlistCard">
        <h4>{{ playlist.name }}</h4>
    </div>
</template>

<script>
export default {
    name : "playlistCard",
    props : ['playlist']
}
</script>

<style>
#playlistCard{
 width: 200px;
 height: 200px;
 /* background-image: url('https://picsum.photos/200?grayscale&blur=2'); */
 display: flex;
 justify-content: center;
 align-items: center;
 color: #ff004cff;
 margin-right: 20px;
}

</style>