<template>
    <HelloWorld/>
</template>

<script lang="ts">
    import HelloWorld from './components/HelloWorld.vue';
    import Vue from 'vue';

    export default Vue.extend({
        name: 'App',
        created() {
            debugger;
            console.log('qwe')
        }
    });
</script>
