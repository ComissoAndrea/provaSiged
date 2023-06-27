
<template>

  <n-collapse class="collapse">
    <n-collapse-item title="REDATTORI DEL DOCUMENTO" class="collapseItem" arrow-placement='right' name="1" >
      <n-row gutter="24" class="collapseItem1">
        <n-col :span="8">
          <div class="chiave"> Autore</div>
          <div class="valore">pippo</div>
        </n-col>
        <n-col :span="16">
          <div  class="chiave"> Data</div>
          <div class="valore">pippo</div>
        </n-col>
      </n-row>
      <n-row gutter="24" class="collapseItem1">
        <n-col :span="8">
          <div  class="chiave"> Ultima modifica</div>
          <div  class="valore">pippo</div>
        </n-col>
        <n-col :span="16">
          <div  class="chiave"> Data</div>
          <div class="valore">pippo</div>
        </n-col>
      </n-row>

        
    </n-collapse-item>
  </n-collapse>

</template>


<script setup lang="ts">
import {NCollapse,NCollapseItem, NRow, NCol} from 'naive-ui'

</script>

<style>

.chiave{
  float: left;
}

.valore{
  text-align:right;
}



.collapseItem{
    background-color: blue;
    padding: 5px;
}

.collapseItem1{
    text-align: center;
    font-size:large ;
    background-color: aliceblue;
    height: 100%;
}



</style>
