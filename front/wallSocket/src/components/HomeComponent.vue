<template>
  <div class="flex">
    <div class="w-[15%] h-screen border-2 border-blue-500 "  >
        <ToolBarComponent />
    </div>
    <div class=" w-full">
        <CanvasComponent />
    </div>
  </div>
</template>

<script setup lang='ts'>
import CanvasComponent from './CanvasComponent.vue';
import ToolBarComponent from './ToolBarComponent.vue';
</script>

<style>
</style>