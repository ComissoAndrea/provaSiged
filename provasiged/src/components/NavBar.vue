<template>
  <n-space vertical>
    <n-layout has-sider class="navbar">
       <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        show-trigger
      >
        <n-menu
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
    </n-layout>
  </n-space>
  
</template>

  <script setup lang="ts">
  import { h, defineComponent, ref, type Component } from 'vue'
  import { NIcon, NMenu, NLayout, NLayoutSider, NSpace, NSwitch} from 'naive-ui'
  import type { MenuOption } from 'naive-ui'
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
      label: 'Protocollo Informatico',
      key: 'Protocollo Informatico',
      icon: renderIcon(BookIcon)
    },
    {
      label: 'Fascicoli',
      key: 'Fascicoli',
      icon: renderIcon(BookIcon),
      children: [
        {
          label: 'Rat',
          key: 'rat'
        }
      ]
    },
    {
      label: 'Produzione Documentale',
      key: 'Produzione Documentale',
      icon: renderIcon(BookIcon),
      children: [
        {
          label: 'Documenti',
          key: 'Documenti'
        },
        {
          label: 'Libro Firma',
          key: 'Libro Firma'
        },
        {
          label: 'Archivio',
          key: 'Archivio'
        },
        
      ]
    },
    {
      label: 'Fatture PA',
      key: 'Fatture PA',
      icon: renderIcon(BookIcon),
      children: [
        {
          type: 'group',
          label: 'People',
          key: 'people',
          children: [
            {
              label: 'Narrator',
              key: 'narrator',
              icon: renderIcon(PersonIcon)
            },
            {
              label: 'Sheep Man',
              key: 'sheep-man',
              icon: renderIcon(PersonIcon)
            }
          ]
        },
      ]
    },
    {
      label: 'Contratti Pubblici',
      key: 'Contratti Pubblici',
      icon: renderIcon(WineIcon),
      children: [
        {
          label: 'Whisky',
          key: 'whisky'
        }
      ]
    },
    {
      label: 'Registri',
      key: 'Registri',
      icon: renderIcon(WineIcon),
      children: [
        {
          label: 'Sandwich',
          key: 'sandwich'
        }
      ]
    },
  ]
  let inverted=ref(Boolean)
  defineComponent({
    setup () {
      return {
        inverted: ref(true),
        menuOptions
      }
    }
  })
</script>



<style>
.navbar {
  position: fixed;
  top: 45px;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 240px;
  background-color: #fff;
}


</style>