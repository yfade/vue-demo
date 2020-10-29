<template>
    <div>
        <p v-if="!repoUrl">loading...</p>
        <p v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></p>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'App',
        data() {
            return {
                repoUrl: '',
                repoName: ''
            }
        },
        mounted() {
            const url = "https://api.github.com/search/repositories?q=vu&sort=stars";
            axios.get(url).then(
                response => {
                    const item = response.data.items[0];
                    this.repoUrl = item.owner.html_url;
                    this.repoName = item.name;
                }
            ).catch(error => {
                alert(error)
            })
        }
    }
</script>

<style>

</style>