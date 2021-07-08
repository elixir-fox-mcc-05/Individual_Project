<template>
<section class="hero is-info">
<div class="section is-offset-6">
<div class="column is-half is-offset-4">
<a @click.prevent="openArtstation"><img src="../img/artstation button.png" style="height:60px;width:200px;"></a>
<a @click.prevent="openLinkedIn"><img src="../img/linkedin button.png" style="height:60px;width:200px;"> </a>
</div>
<p class="has-text-centered">@2020 MergeLine </p>
</div>
</section>
</template>

<script>
export default {
    name : "Footer",
    methods: {
        openLinkedIn(){
            window.open("https://www.linkedin.com/in/grady-wicoady-60b732173s"
)
        },
        openArtstation(){
             window.open("https://www.artstation.com/laevenx")
        }
    },
}
</script>

<style>
</style>