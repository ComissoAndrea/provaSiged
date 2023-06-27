<template>
<n-grid x-gap="12" :cols="1">
    <n-gi class="menuBar">
      <img  class="logo" src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" />   
      <n-menu  v-model:value="activeKey" mode="horizontal" :options="menuOptions"  />
    </n-gi>
  </n-grid>
  <n-grid :x-gap="0" :y-gap="12" :cols="12"  class="content">
    <n-gi :span="2" >
      <nav-bar/>
    </n-gi>
    <n-gi style="width: 100%;" :span="10">
      <div class="router-content">
        <router-view />
      </div>
    </n-gi>
  </n-grid>



</template>
  
<script lang="ts" setup>

  import { defineComponent, h, ref, type Component } from 'vue'
  import { NIcon, NMenu , NGrid,NGi, NCol, NRow} from 'naive-ui'
  import type { MenuOption } from 'naive-ui'
  import {RouterLink, useRouter} from 'vue-router'
  import HomePage from './HomePage.vue';
  import NavBar from "./NavBar.vue";
  import DocumentDetail from './DocumentDetail.vue';

  const router=useRouter()
  
  import {
    BookOutline as BookIcon,
    PersonOutline as PersonIcon,
    WineOutline as WineIcon
  } from '@vicons/ionicons5'


function renderIcon (icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
  }

  
const menuOptions: MenuOption[] = [
    {
      label: 'Gestione Documentale',
      key: 'Gestione Documentale',
      icon: renderIcon(BookIcon),
      children: [
        {
          key: 'Protocollo Generale',
          label: () =>
          h(
            RouterLink,
            {
              to: {
                name: '/'//name della rotta
              }
            },
            () => 'Protocollo Generale'//label da visualizzare
          ) 
        }
      ]
    },
    {
      label: 'Procedimenti',
      key: 'Procedimenti',
      icon: renderIcon(BookIcon),
      children: [
        {
          key: 'Determinazioni',
          label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'document_list'//name della rotta
              }
            },
            () => 'Protocollo Generale'//label da visualizzare
          ) 
        },{
          key:"pippo",
          label:"pippo"
        }
      ],
    },
    {
      label: 'Libro Firma',
      key: 'Libro Firma',
      icon: renderIcon(BookIcon),
      children: [
        {
          label: 'Determinazioni',
          key: 'Determinazioni',
        }
      ],
    },
    {
      label: 'Rubbrica',
      key: 'Rubbrica',
      icon: renderIcon(WineIcon),
      children: [
        {
          label: 'Whisky',
          key: 'whisky'
        }
      ]
    }
  ]
let activeKey=ref<string|null>(null)
defineComponent({
    setup () {
      return {
        activeKey: ref<string | null>(null),
        menuOptions
      }
    }
  })
  </script>

  <style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .menuBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    background-color: rgb(64, 90, 240);
    border-bottom: 1px solid #ccc;
  }
  
  .logo {
    height: 100%;
    width: 240px;
  }
  
  .content {
    flex-grow: 1;
    width: 100%;
    padding-top: 45px;
  }
  
  .router-content {
    width: 100%;
    height: 100%;
    display: flex;
    float: right;
    margin-right: 75px;
  }
  
  .content-grid {
    height: 100%;
  }
  </style>
