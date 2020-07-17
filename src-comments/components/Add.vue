<template>
    <div class="col-md-4">
        <form class="form-horizontal">
            <div class="form-group">
                <label>用户名</label>
                <input v-model="userName" type="text" class="form-control" placeholder="用户名">
            </div>
            <div class="form-group">
                <label>评论内容</label>
                <textarea v-model="comment" class="form-control" rows="6" placeholder="评论内容"></textarea>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="button" class="btn btn-default pull-right" @click="submitComment">提交</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        props: {
            /*addComment: {
                type: Function,
                required: true
            }*/
        },
        data() {
            return {
                userName: '',
                comment: '',
            }
        },
        methods: {
            submitComment() {
                const userName = this.userName.trim();
                const comment = this.comment.trim();
                //1.验证输入数据合法性
                if (!userName || !comment){
                    alert('用户名和内容不能为空')
                    return;
                }
                //2.将输入数据封装为comment对象
                const item={
                    userName,
                    comment
                };

                //3.添加到comments中
                // this.addComment(item);
                this.$emit('addComment',item)

                //4.清空输入数据
                this.userName='';
                this.comment='';

            },

        }
    }
</script>

<style>

</style>