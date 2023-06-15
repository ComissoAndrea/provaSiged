<script setup lang="ts">
import { NewUser } from '../user';
import UserForm from './UserForm.vue';
import {useUsers} from '../stores/user'
import { useModal } from '../composable/modal';
import { ref } from 'vue';


const usersStore=useUsers()
const modal=useModal()
const error=ref('')

async function handleSignIn(newUser:NewUser){
    
    const body=JSON.stringify(newUser) 
    const res=await  window.fetch("/api/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body
        })
        if([401,404].includes(res.status)){
            error.value="USername or password was incorrect"
        }else{
            usersStore.authenticate()
            modal.hideModal()
        }

}
</script>

<template>
<UserForm id="signin-form" @submit="handleSignIn" :error="error"/>

</template>