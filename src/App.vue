<template>
    <div>
        <router-link to="/home">Home</router-link><br>
        <router-link to="/about">About</router-link><br>
        <router-link :to="{name:'ParamTest',params:{id:12}}">ParamTest</router-link><br>
        <button @click="toParamTest(3)">testParam</button><br>
        <router-link to="/querytest?name=zs&age=13">QueryTest</router-link>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            toParamTest(id){
                this.$router.push({
                    name:'ParamTest',
                    params:{
                        id:id
                    }
                })
            }
        }

    }
</script>