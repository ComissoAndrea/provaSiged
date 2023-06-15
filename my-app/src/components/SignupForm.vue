<script setup lang="ts">
import { NewUser } from '../user';
import UserForm from './UserForm.vue';
import {useUsers} from '../stores/user'
import { useModal } from '../composable/modal';


const usersStore=useUsers()
const modal=useModal()


async function handleSignUp(newUser:NewUser){
 await usersStore.createUser(newUser)
 modal.hideModal()
}
</script>

<template>
<UserForm @submit="handleSignUp"/>

</template>