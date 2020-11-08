<template>
    <div>
        QueryTest
        {{$route.query.name}}
        {{$route.query.age}}
    </div>
</template>

<script>
    export default {
        name: "QueryTest",
    }
</script>

<style scoped>

</style>