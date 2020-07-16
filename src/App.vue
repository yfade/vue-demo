<template>
    <div>
        <header class="site-header jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h1>请发表对React的评论</h1>
                    </div>
                </div>
            </div>
        </header>
        <div class="container">
            <!--通过自定义事件试子组件可以调用父组件函数-->
            <Add @addComment="addComment"></Add>
            <!--通过prop向子组件传递函数，适合多级-->
            <List :comments="comments" :deleteComment="deleteComment"></List>
        </div>

        <!--测试插槽-->
        <SlotTest>
            <template v-slot:header>aaaaaaaaaaa</template>
            <template v-slot:footer>ccc</template>
            <template v-slot:main>bbb</template>
            <p>ddddddd</p>
            <p>eeeeeeeeeeeeeeee</p>
        </SlotTest>

    </div>
</template>

<script>
    import Add from './components/Add'
    import List from './components/List'
    import PubSub from 'pubsub-js'
    import SlotTest from './components/SlotTest'
    //绑定事件监听---订阅消息
    //触发事件---发布消息

    export default {
        components: {Add, List,SlotTest},
        data() {
            return {
                comments: [ //数据在那个组件，更新数据的函数就应该定义在哪个组件
                    {userName: 'Tom', comment: 'hello Jerry!'},
                    {userName: 'Jerry', comment: 'hello Tom!'},
                ]
            }
        },
        methods: {
            addComment(comment) {
                this.comments.unshift(comment);
            },
            deleteComment(index) {
                this.comments.splice(index, 1);
            }
        },
        mounted() {
            PubSub.subscribe('testPubsub',function (msg, data) {
                alert(msg+'------'+data)
            })
        }
    }
</script>

<style>

</style>