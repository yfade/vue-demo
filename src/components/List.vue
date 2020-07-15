<template>
    <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 v-show="comments.length===0">暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
            <Item v-for="(item,index) in comments" :key="index" :item="item" :deleteComment="deleteComment" :index="index"></Item>
        </ul>
    </div>
</template>

<script>
    import Item from './Item'
    export default {
        components: {Item},
        props:['comments','deleteComment']

    }
</script>

<style>
    .reply {
        margin-top: 0px;
    }
</style>