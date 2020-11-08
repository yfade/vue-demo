<template>
    <div>
        <div id="div1">
            <slot name="header" :user="user">
                {{user.lastName}}
            </slot>
        </div>
        <div id="div2">
            <slot name="main"></slot>
        </div>
        <div id="div4">
            <slot></slot>
        </div>
        <div id="div3">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    firstName: 'wc',
                    lastName: 'ps'
                }
            }
        }
    }
</script>

<style>

</style>