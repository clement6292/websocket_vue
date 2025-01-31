<template>
  <div class="flex">
    <div class="w-[15%] h-screen " ref="toolbar" >
        <ToolBarComponent />
    </div>
    <div class="bg-blue-200 w-full">
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