<script setup lang="ts">
import {  useRoute, useRouter } from 'vue-router';
import { usePosts } from '../stores/posts';
import PostWriter from '../components/PostWriter.vue';
import { Post } from '../posts';


const router=useRouter()
const route=useRoute()
const postsStore=usePosts()


const id =route.params.id as string 
const post=postsStore.all.get(id)


if(!post){
    throw Error(`l'id :${id} non corrisponde a nessun post`)
}

async function handleSubmit(post: Post ){
  await postsStore.updatePost(post)
  router.push('/')
}

</script>


<template>
Edit Post 
<PostWriter :post="post" @submit="handleSubmit" />

</template>