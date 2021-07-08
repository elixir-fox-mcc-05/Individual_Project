<template>
<div class="modal is-active" v-if="showError">
  <div class="modal-background"></div>
  <div class="modal-card">
    <section class="modal-card-body">
    <article class="message is-danger">
      <div class="message-header ">
        <p>Error</p>
        <button class="delete" aria-label="delete" @click.prevent="closeError"></button>
      </div>
      <div class="message-body">
        {{errorText}}
      </div>
    </article>
    </section>
  </div>
</div>
</template>


<script>
export default {
    name : 'Error' ,
    props : ['errorText','showError'],
    methods: {
      closeError(){
        this.showError = !this.showError
      }
    },
}
</script>

<style>

</style>