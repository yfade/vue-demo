<template>
    <li class="list-group-item">
        <a href="javascript:;" @click="testPS">测试发布订阅</a>
        <div class="handle">
            <a href="javascript:;" @click="deleteItem">删除</a>
        </div>
        <p class="user"><span>{{item.userName}}</span><span>说:</span></p>
        <p class="centence">{{item.comment}}</p>
    </li>
</template>

<script>
    import Pubsub from 'pubsub-js'
    export default {
        props: ['item','deleteComment','index'],
        methods:{
            deleteItem(){
                const {item,deleteComment,index} =this;
                if (window.confirm('确定要删除' + item.userName + '吗')) {
                    deleteComment(index)
                }
            },
            testPS(){
                Pubsub.publish('testPubsub','hello pubsub');
            }
        },
    }
</script>

<style>
    li {
        transition: .5s;
        overflow: hidden;
    }

    .handle {
        width: 40px;
        border: 1px solid #ccc;
        background: #fff;
        position: absolute;
        right: 10px;
        top: 1px;
        text-align: center;
    }

    .handle a {
        display: block;
        text-decoration: none;
    }


    .list-group-item .centence {
        padding: 0px 50px;
    }

    .user {
        font-size: 22px;
    }
</style>