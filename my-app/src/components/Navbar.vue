<script setup lang="ts">

import { useRouter } from 'vue-router';
import { useModal } from '../composable/modal';
import { useUsers } from '../stores/user';
const modal=useModal()
const usersStore=useUsers()
const router=useRouter()

async function logout() {
    await usersStore.logout()
    router.push({path:'/'})
}

</script>

<template>
    <div class="navbar">
        <div class="navbar-end">
            <div v-if="usersStore.currentUserId" class="buttons">
                <RouterLink to="/posts/new" class="button">New Posts</RouterLink>    
                <button class="button" id="logout" @click="logout()">Log out</button>
            </div>
            <div v-else class="buttons">
                <button id="sign-ip" class="button" @click="modal.showModal('signUp')">sign up</button>
                <button data-testid="sign-in" class="button" @click="modal.showModal('signIn')">sign in</button>  
            </div>
        </div>
    </div>
    <Teleport to="#modal">
        <component :is="modal.component.value"/>
    </Teleport>
</template>