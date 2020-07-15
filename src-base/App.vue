<template>
    <div>
        <hello-world></hello-world>
        <img class="imgC" src="./assets/logo.png">
        <p>时间：{{now}}</p>
    </div>
</template>

<script>
    import HellowWorld from './components/HelloWorld'

    export default {
        components: {'hello-world': HellowWorld},
        data() {
            return {
                now:new Date()
            }
        }
    }
</script>

<style>
    .imgC {
        width: 100px;
        height: 100px;
    }
</style>