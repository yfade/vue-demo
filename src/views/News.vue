<template>
    <div>
        <div>News</div>
        <div>{{$route.params.id}}</div>
        <button @click="toMessage(2)">消息</button>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            toMessage(id) {
                this.$router.push('/home/message/' + id);
            }
        }
    }
</script>

<style>

</style>