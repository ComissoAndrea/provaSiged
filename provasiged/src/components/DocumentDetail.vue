<template>
<n-grid :x-gap="12" :y-gap="8" :cols="2" style="margin-left: 75px;">
  <n-grid-item :span="2">
    <div  class="titolo">
      <h1>DOCUMENTO 456</h1>
    </div>
  </n-grid-item>
  <n-grid-item  :span="2" >
    <n-card class="cardOggetto">
      <n-grid :x-gap="12" :y-gap="8" :cols="2">
        <n-grid-item  class="descrizioneCard">
          DOCUMENTO 456
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
          Destinatario<br/>
          Destinatario<br/>
          Destinatario
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
          Fascicolo
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
import {NGrid,NGridItem, NCard, NIcon, NSpace,NSelect , NRow,NCol} from 'naive-ui'
import DocumentoOggetto from './DocumentDetail/DocumentoOggetto.vue'
import { DocumentPdf, Book} from '@vicons/carbon'
import { ref } from 'vue';
import RedattoriOggetto from './DocumentDetail/RedattoriOggetto.vue';

const value= ref(null)
const options= [
        {
          label: "UD",
          value: 'Udine',
        },
        {
          label: "MI",
          value: 'Milano',
        },
        {
          label: "NA",
          value: 'Napoli',
        },
        {
          label: "BO",
          value: 'Bologna',
        },

]

</script>

<style>

.DescrizioneOggetto{
margin-right: 30px;

}

:root {

  /* Colors: */
  --verde-sez4-primario: #5EAC8E;
  --verde-sez4-secondario: #307E60;
  --viola-sez3-primario: #AA427D;
  --viola-sez3-secondario: #7B2455;
  --azzurro-sez2-primario: #1FBFC7;
  --azzurro-sez2-secondario: #008E95;
  --pesca-sez1-primario: #F57B71;
  --pesca-sez1-secondario: #A54139;
  --blu-principale: #1177B6;
  --unnamed-color-272727: #272727;
  --unnamed-color-344051: #344051;

  /* Font/text values */
  --unnamed-font-family-open-sans: Open Sans;
  --unnamed-font-style-normal: normal;
  --unnamed-font-weight-600: 600px;
  --unnamed-font-weight-normal: normal;
  --unnamed-font-size-12: 12px;
  --unnamed-font-size-32: 16px;
  --unnamed-character-spacing-0: 0px;
  --unnamed-line-spacing-17: 17px;
  --unnamed-line-spacing-43: 43px;
}




.cardOggetto{
  font-family: var(--unnamed-font-family-open-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-normal);
  font-size: var(--unnamed-font-size-12);
  line-height: var(--unnamed-line-spacing-17);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-344051);
  margin-bottom: 25px;
  box-shadow: 0 2px 4px rgba(0.3,0.3,0.3,0.3 );
}


.titolo{  
  font-family: var(--unnamed-font-family-open-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-600);
  font-size: var(--unnamed-font-size-32);
  line-height: var(--unnamed-line-spacing-43);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-272727);
}

.descrizioneCard{
  color:rgb(189, 179, 179);
  font-size: larger;
  font-weight: bolder;
}

</style>