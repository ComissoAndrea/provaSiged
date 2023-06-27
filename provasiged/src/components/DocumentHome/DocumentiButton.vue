<template>
<n-space class="documentButton">
    <n-button  class="homeButton" color="#007FFF" @click="submit('/document_detail')">
      Tutti
    </n-button>
    <n-button class="homeButton" color="#007FFF">
      In lavorazione
    </n-button>
    <n-button class="homeButton" color="#007FFF">
      Da completare
    </n-button>
    <n-button class="homeButton" color="#007FFF">
      In apprevazioen
    </n-button>
    <n-button class="homeButton" color="#007FFF">
      Da Protocollare
    </n-button>
  </n-space>


</template>

<script setup lang="ts">
import { NButton,NSpace} from 'naive-ui'
import {useRouter} from 'vue-router'



const router=useRouter()

function submit(route:string){
router.push(route)
}





</script>

<style>
.homeButton{
  padding: 8px;
  border: 1px solid #ccc;
}

</style>