<template >
  <Canvas class="w-full h-full" ref="canvasRef"> </Canvas>
</template>

<script setup lang='ts'>
import { ref, onMounted } from "vue";

const canvasRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvasRef.value.getContext("2d");
  console.log(canvasRef.value);

  
  ctx.fillStyle = "red";
  ctx.fillRect(10, 10, 100, 100); // Un carré vert
  ctx.strokeStyle = "green";
  ctx.strokeRect(150, 10, 100, 100);
});
</script>

<style >
</style>