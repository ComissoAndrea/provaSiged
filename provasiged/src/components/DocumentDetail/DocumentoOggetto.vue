<template>
    <div class="text-container">
      <div class="text">
        {{ text }}
      </div>
    </div>
  </template>

<script setup lang="ts">
import { setup } from 'naive-ui/es/radio/src/use-radio';
import { ref } from 'vue';

const text = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi convallis lorem et justo fringilla, at bibendum quam scelerisque. Proin vitae mi semper, rutrum metus at, fringilla mi. Vivamus viverra eleifend justo, at rhoncus tellus finibus id. Suspendisse potenti. In eu orci auctor, malesuada est sed, tincidunt nulla. Sed efficitur felis non metus semper dapibus. Sed tempor semper justo, eu pulvinar neque malesuada ut. Mauris consequat feugiat erat, ac cursus enim luctus ut. Donec euismod, mi vel aliquam pharetra, sem velit rutrum leo, vitae feugiat nulla dui sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi convallis lorem et justo fringilla, at bibendum quam scelerisque. Proin vitae mi semper, rutrum metus at, fringilla mi. Vivamus viverra eleifend justo, at rhoncus tellus finibus id. Suspendisse potenti. In eu orci auctor, malesuada est sed, tincidunt nulla. Sed efficitur felis non metus semper dapibus. Sed tempor semper justo, eu pulvinar neque malesuada ut. Mauris consequat feugiat erat, ac cursus enim luctus ut. Donec euismod, mi vel aliquam pharetra, sem velit rutrum leo, vitae feugiat nulla dui sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi convallis lorem et justo fringilla, at bibendum quam scelerisque. Proin vitae mi semper, rutrum metus at, fringilla mi. Vivamus viverra eleifend justo, at rhoncus tellus finibus id. Suspendisse potenti. In eu orci auctor, malesuada est sed, tincidunt nulla. Sed efficitur felis non metus semper dapibus. Sed tempor semper justo, eu pulvinar neque malesuada ut. Mauris consequat feugiat erat, ac cursus enim luctus ut. Donec euismod, mi vel aliquam pharetra, sem velit rutrum leo, vitae feugiat nulla dui sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi convallis lorem et justo fringilla, at bibendum quam scelerisque. Proin vitae mi semper, rutrum metus at, fringilla mi. Vivamus viverra eleifend justo, at rhoncus tellus finibus id. Suspendisse potenti. In eu orci auctor, malesuada est sed, tincidunt nulla. Sed efficitur felis non metus semper dapibus. Sed tempor semper justo, eu pulvinar neque malesuada ut. Mauris consequat feugiat erat, ac cursus enim luctus ut. Donec euismod, mi vel aliquam pharetra, sem velit rutrum leo, vitae feugiat nulla dui sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi convallis lorem et justo fringilla, at bibendum quam scelerisque. Proin vitae mi semper, rutrum metus at, fringilla mi. Vivamus viverra eleifend justo, at rhoncus tellus finibus id. Suspendisse potenti. In eu orci auctor, malesuada est sed, tincidunt nulla. Sed efficitur felis non metus semper dapibus. Sed tempor semper justo, eu pulvinar neque malesuada ut. Mauris consequat feugiat erat, ac cursus enim luctus ut. Donec euismod, mi vel aliquam pharetra, sem velit rutrum leo, vitae feugiat nulla dui sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi convallis lorem et justo fringilla, at bibendum quam scelerisque. Proin vitae mi semper, rutrum metus at, fringilla mi. Vivamus viverra eleifend justo, at rhoncus tellus finibus id. Suspendisse potenti. In eu orci auctor, malesuada est sed, tincidunt nulla. Sed efficitur felis non metus semper dapibus. Sed tempor semper justo, eu pulvinar neque malesuada ut. Mauris consequat feugiat erat, ac cursus enim luctus ut. Donec euismod, mi vel aliquam pharetra, sem velit rutrum leo, vitae feugiat nulla dui sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi convallis lorem et justo fringilla, at bibendum quam scelerisque. Proin vitae mi semper, rutrum metus at, fringilla mi. Vivamus viverra eleifend justo, at rhoncus tellus finibus id. Suspendisse potenti. In eu orci auctor, malesuada est sed, tincidunt nulla. Sed efficitur felis non metus semper dapibus. Sed tempor semper justo, eu pulvinar neque malesuada ut. Mauris consequat feugiat erat, ac cursus enim luctus ut. Donec euismod, mi vel aliquam pharetra, sem velit rutrum leo, vitae feugiat nulla dui sed libero.");

const showFullText = ref(false);

const isOverflowing = ref(false);

const textRef = ref(null);

</script>


<style>
.text-container {
  position: relative;
  max-height: 5em; /* Altezza massima di 3 righe */
  overflow: hidden;
}

.text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5; /* Numero massimo di righe */
  overflow: hidden;
  text-overflow: ellipsis;
}


button {
  margin-top: 8px;
  background-color: red;
}
</style>