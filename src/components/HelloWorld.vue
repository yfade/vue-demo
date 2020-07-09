<template>
    <div>
        <p class="p">{{msg}}</p>
    </div>
</template>

<script>
    export default {    //配置对象（与Vue一致）
        data() {    //可以是对象也可以是函数，当使用组件时必须为函数
            return {
                msg: 'Hello Vue Component!'
            }
        }
    }
</script>

<style>
    .p {
        color: red;
        font: 20px bolder;
    }
</style>