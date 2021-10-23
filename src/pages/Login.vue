<template>
    <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" type="text"/>
        <input v-model="password" placeholder="Password" type="text"/>
        <button type="submit">Login</button>
    </form>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        data(){
            return{
                username: "thomas",
                password: "thomas"
            }
        },
        methods:{
            ...mapActions({
                signin: 'user/login'
            }),
            login(){
               this.signin({
                   username: this.username,
                   password: this.password
               }) 
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>