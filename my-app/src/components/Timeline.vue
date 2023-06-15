<script setup lang="ts">
//import {computed} from 'vue'// per rendere le vaiabili reattive let p=ref("pippo")  p.value="tommy"
//type Period= "Today" | "This Week" | "This Month" | "This Year" per definire un nuovo tipo  
import TimelineItem from './Timelineitem.vue'
import {usePosts} from '../stores/posts'
import{  periods} from '../constants'

const postsStore=usePosts()
await postsStore.fetchPost()
</script>

<template>
 <nav class="is-primary panel">
  <span class="panel-tabs">
   <a v-for="period of periods" :class="{'is-active' : period===postsStore.selectedPeriod}" v-bind:key="period" @click="postsStore.setSelectedPeriod(period)">
    {{ period }}
   </a>
  </span>
  <TimelineItem v-for="post of postsStore.filterPosts" :key="post.id" :post="post"/>  
 </nav>
</template>

<style>

</style>