<template >
  <Canvas class="w-full h-full" ref="canvasRef" @mousedown="startDrawing"> </Canvas>
</template>

<script setup lang='ts'>
import { ref, onMounted } from "vue";

const canvasRef = ref<HTMLCanvasElement | null>(null);
const startDrawing = (e: MouseEvent) => {
console.log(e);

}

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvasRef.value.getContext("2d");
  console.log(canvasRef.value);

  
//   ctx.fillStyle = "red";
//   ctx.fillRect(10, 10, 100, 10); // Un carré vert
//   ctx.strokeStyle = "green";
//   ctx.strokeRect(150, 10, 100, 100);

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 50);
// ctx.lineTo(200, 200);
// ctx.stroke();
});
</script>

<style >
</style>