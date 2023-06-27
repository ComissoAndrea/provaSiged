<template>
  <n-grid :x-gap="12" :y-gap="8" :cols="2" style="margin-left: 75px;">
    <n-grid-item :span="2">
      <div  class="titolo">
        <h1>DOCUMENTO {{post.id}}</h1>
      </div>
    </n-grid-item>
    <n-grid-item  :span="2" >
      <n-card class="cardOggetto">
        <n-grid :x-gap="12" :y-gap="8" :cols="2">
          <n-grid-item  class="descrizioneCard">
            DOCUMENTO {{post.id}}
          </n-grid-item>
          <n-grid-item  class="descrizioneCard">
            DOC. PRINCIPALE
          </n-grid-item>
  
  
          <n-grid-item class="DescrizioneOggetto">
            <DocumentoOggetto/>
          </n-grid-item>
          <n-grid-item>
            <n-icon size="40">
              <DocumentPdf style="color:blue" />
            </n-icon>
          </n-grid-item>
        </n-grid>
      </n-card>
    </n-grid-item>  
  
  
  
  
  
    <n-grid-item  :span="2" >
      <n-card class="cardOggetto">
        <n-grid :x-gap="12" :y-gap="8" :cols="4">
          <n-grid-item :span="4"  class="descrizioneCard">
            DESTINATARIO
          </n-grid-item>
          <n-grid-item >
            Destinatario
          </n-grid-item>
          <n-grid-item>
            {{post.destinatario}}<br/>
            {{post.destinatario}}<br/>
            {{post.destinatario}}
          </n-grid-item>
          <n-grid-item>
              Per conoscenza <br/>
              Note Anagrafica
          </n-grid-item>
          <n-grid-item>
            -<br/>
            -
          </n-grid-item>
        </n-grid>
      </n-card>
    </n-grid-item>
  
  
  
  
  
  
    <n-grid-item >
      <n-card  class="cardOggetto" style="height: 250px;">
        <n-grid :x-gap="12" :y-gap="8" :cols="1">
          <n-grid-item class="descrizioneCard">
            ALLEGATI
          </n-grid-item>
          <n-grid-item>
            <n-icon size="25">
              <DocumentPdf style="color:blue" />
            </n-icon>
            Nome allegato.pdf
          </n-grid-item>
          <n-grid-item>
            <n-icon size="25">
              <DocumentPdf style="color:blue" />
            </n-icon>
            Nome allegato.pdf
          </n-grid-item>
          <n-grid-item>
            <n-icon size="25">
              <DocumentPdf style="color:blue" />
            </n-icon>
            Nome allegato.pdf
          </n-grid-item>
          <n-grid-item>
            <n-icon size="25">
              <DocumentPdf style="color:blue" />
            </n-icon>
            Nome allegato.pdf
          </n-grid-item>
          <n-grid-item>
            <n-icon size="25">
              <DocumentPdf style="color:blue" />
            </n-icon>
            Nome allegato.pdf
          </n-grid-item>
        </n-grid>
  
  
      </n-card>
    </n-grid-item>
    <n-grid-item >
      <n-card  class="cardOggetto" style="height: 250px;">
        <n-grid :x-gap="12" :y-gap="8" :cols="1">
          <n-grid-item  class="descrizioneCard">
            FASCICOLI COLLEGATI
          </n-grid-item>
          <n-grid-item>
            <n-icon size="25">
              <Book style="color:blue" />
            </n-icon>
            {{post.stato}}
          </n-grid-item>
          
          <n-grid-item>
            <n-icon size="25">
              <Book style="color:blue" />
            </n-icon>
            Fascicolo
          </n-grid-item>
          
          <n-grid-item>
            <n-icon size="25">
              <Book style="color:blue" />
            </n-icon>
            Fascicolo 
          </n-grid-item>
        </n-grid>
      </n-card>
    </n-grid-item>
  
  
  
  
    <n-grid-item :span="2">
      <n-card class="cardOggetto">
        
      <n-row gutter="24">
        <n-col :span="4">
            <div class="descrizioneCard" >
              CLASSIFICAZIONE
            </div>
          </n-col>
          <n-col :span="20">
            <n-space vertical  >
              <n-select v-model:value="value" :options="options"  />
            </n-space>
          </n-col>
        </n-row>
      </n-card>
    </n-grid-item>
  
  
    <n-grid-item :span="2">
      <RedattoriOggetto/>
    </n-grid-item>
    
  </n-grid>
  
  </template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { type Document, get } from '../documents';
import {NGrid,NGridItem, NCard, NIcon, NSpace,NSelect , NRow,NCol} from 'naive-ui'

import { DocumentPdf, Book} from '@vicons/carbon'

const route = useRoute();
const id = route.params.id as string;
console.log(id)
const post = get(parseInt(id));
console.log(post)

</script>

<style>
</style>
