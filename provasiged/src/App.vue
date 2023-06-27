<script setup lang="ts">
import MenuBar from './components/MenuBar.vue';
import HomePage from './components/HomePage.vue';

import {NLayout, NLayoutHeader, NGi,NGrid} from 'naive-ui'
</script>

<template>
 <n-grid x-gap="0" :cols="1">
    <n-gi class="header">
      <n-layout position="absolute">
          <MenuBar />
      </n-layout>
      </n-gi>
  </n-grid>
</template>


<style>

.header{
  display: inline-flex;
}

.home{
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
