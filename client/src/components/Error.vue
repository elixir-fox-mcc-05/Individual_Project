<template>
    <div class="alert alert-danger" role="alert" id="alert">
        <span>{{ alertMessage }}</span>
    </div>
</template>

<script>

export default {
    name: 'Error',
    props: ['alertMessage']
}
</script>

<style scoped>
    .alert {
        margin: 3px;
        padding: 2px;
        text-align: center;
    }
</style>