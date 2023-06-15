<script setup lang="ts">
import { DateTime } from 'luxon';
import PostWriter from '../components/PostWriter.vue';
import { TimelinePost ,Post } from '../posts';
import { useUsers } from '../stores/user';
import { useRouter } from 'vue-router';
import { usePosts } from '../stores/posts';

const usersStore =useUsers()
const router = useRouter()
const postsStore=usePosts()


if(!usersStore.currentUserId){
        throw Error('user was not found') 
}

const post: TimelinePost={
    
    id:"-1",
    title:"title",
    authorId:usersStore.currentUserId,
    created:DateTime.now(),
    markdown:"## title",
    html:"<h2>TITLE</h2>"
}


async function handleSubmit(post:Post){
  await postsStore.createPost(post)
  router.push('/')
}
</script>

<template>
    New Post
    <PostWriter :post="post" @submit="handleSubmit" />
</template>