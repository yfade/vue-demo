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
    </div>
</template>

<script>
    import Add from './components/Add'
    import List from './components/List'

    export default {
        components: {Add, List},
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
        }
    }
</script>

<style>

</style>