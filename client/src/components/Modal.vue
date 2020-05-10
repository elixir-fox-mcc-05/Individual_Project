<template>
    <div class="modal-bg">
        <Detail
            v-if="content === 'detail'"
            :starter="starter"
            :bench="bench"
            :teamName="teamName"
            @cancel="$emit('cancel')"
        ></Detail>
        <Warn
            v-if="content === 'warn'"
            :deleted="deleted"
            @reset="$emit('reset')"
            @cancel="$emit('cancel')"
        ></Warn>
    </div>
</template>

<script>
import Detail from './Detail';
import Warn from './Warning';

export default {
    name: 'Modal',
    props: ['content', 'detail', 'starter', 'bench', 'teamName'],
    components: {
        Detail, Warn
    }
}
</script>

<style>
    .modal-bg {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden; 
        opacity: 0;
        transition: visibility 0.5s, opacity 0.5s;
    }
</style>