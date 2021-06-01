<template>
    <div>
        <input v-model="text">

        <span>{{ text }}</span>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'HelloWorld',
        data() {
            return {
                text: '',
            };
        },
        created() {
            debugger;
            console.log(this.text);
        }
    });
</script>

<style scoped>
    a {
        color: #42b983;
    }

    label {
        margin: 0 0.5em;
        font-weight: bold;
    }

    code {
        background-color: #eee;
        padding: 2px 4px;
        border-radius: 4px;
        color: #304455;
    }
</style>
