<template>
    <div>
        <router-link to="/home">Home</router-link><br>
        <router-link to="/about">About</router-link>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>