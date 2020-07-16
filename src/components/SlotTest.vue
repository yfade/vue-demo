<template>
    <div>
        <div id="div1">
            <slot name="header"></slot>
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
    export default {}
</script>

<style>

</style>