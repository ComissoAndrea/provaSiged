<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { usePosts } from '../stores/posts';
import { useUsers } from '../stores/user';
import { computed } from 'vue';


const route=useRoute()
const postsStore=usePosts()
const usersStore=useUsers()

const id =route.params.id as string 
const post=postsStore.all.get(id)


if(!post){
    throw Error(`l'id :${id} non corrisponde a nessun post`)
}

const canEdit=computed(()=>{

    if(!usersStore.currentUserId){
        return false
    }

    if(usersStore.currentUserId !== post.authorId){
        return false
    }
    return true
    
})

</script>


<template>
    <div class="columns">
        <div class="column">
            <div class="column is-two-thirds">
                <RouterLink :to="`/`">
                 <button>back</button>
                </RouterLink>
                <RouterLink v-if="canEdit" class="is-link button is-rounded" :to="`/post/${id}/edit`">Edit Post</RouterLink>
                <h1>{{ post.title }}</h1>
                <div v-html="post.html"/>
                
            </div>
            <div class="column"> 

            </div>
        </div>
    </div>


</template>