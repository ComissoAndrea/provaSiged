<template>
  <n-grid x-gap="12" :y-gap="8" :cols="1" class="container">
    <n-gi :span="12" style="padding-left: 8%;">
    
      <n-row>
        <h1 >DOCUMENTI</h1>
      </n-row>
      <n-row style="padding-top: 15px; width: 100%;" >
        <DocumentiButton/>
      </n-row>
      <n-card class="cardOggetto">
        <n-row  style="padding-top: 15px; width: 100%;" >
          <SearchDocument/>
        </n-row>
        <n-row  style="padding-top: 15px; width: 100%;" >
          <DocumentView/>
        </n-row>
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
  import { NGrid,NGi,NRow, NCard} from 'naive-ui'
  import DocumentiButton from './DocumentHome/DocumentiButton.vue'
  import SearchDocument from './DocumentHome/SearchDocument.vue'
  import DocumentView from "./DocumentHome/DocumentView.vue";
</script>

<style>

.container {
  display: flex;
  height: 100px;
}

.cardOggetto{
  margin-right: 75px;
}

</style>