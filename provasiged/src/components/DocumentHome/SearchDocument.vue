<template>
  <n-row gutter="24">
    <n-col :span="19">
      <n-space class="searchButton">
          <n-button type="info" ghost>
            <template #icon>
              <n-icon>
                <search />
              </n-icon>
            </template>
            Ricerca
          </n-button>
      </n-space>
    </n-col>
    <n-col :span="5">
      <n-space class="filter">
        <n-button type="info" ghost>
          <template #icon>
            <n-icon>
              <Reset />
            </n-icon>
          </template>
          Reset Filtri
        </n-button>
        <n-button type="info" ghost>
          <template #icon>
            <n-icon>
              <Filter />
            </n-icon>
          </template>
          Filtri
        </n-button>
      </n-space>
    </n-col>
  </n-row>
</template>


<script setup lang="ts">
import { NButton,NSpace, NIcon, NRow,NCol} from 'naive-ui'
import { Search } from '@vicons/ionicons5'
import { Reset, Filter} from '@vicons/carbon'




</script>

<style>
.searchButton {
  display: inline;
}

.filter{
  width: 100%;
}

</style>