<template>
    <div>
        ParamTest
        {{id}}
        <div>{{$route.params.id}}</div>
    </div>
</template>

<script>
    export default {
        name: "param-test",
        props:['id']
    }
</script>

<style scoped>

</style>