<template>
   <canvas @mousedown="startDrawing" @mousemove="draw" ref="canvasRef" class="border   border-dark">

   </canvas>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);

const toolbarRef = ref<HTMLDivElement | null>(null);

const lastPoint = ref<{ x: number, y: number } | null>(null);

const resizeCanvas = () => {
   const canvas = canvasRef.value;
   const toolbar = document.querySelector('.toolbar');
   console.log(toolbar);
   if (!canvas ||  !toolbar) return;
   canvas.width = window.innerWidth - toolbar.clientWidth;
   canvas.height = window.innerHeight -toolbar.clientHeight ;
}

// Démarrer me dessin
const startDrawing = (e: MouseEvent) => {
   console.log('start drawing', e);

   lastPoint.value = {
      x: e.clientX,
      y: e.clientY
   }

   console.log(lastPoint.value)
}

// Dessiner
const draw = (el: MouseEvent) => {
   console.log('drawing', el);

   const canvas = canvasRef.value;
   const toolbar = document.querySelector('.toolbar');
   console.log(toolbar);
   
   if (!canvas) return;
   const rect = canvas.getBoundingClientRect();
   if(!rect) return; 
   console.log(rect);
   
   

   const currentPoint = {
      x: el.clientX,
      y: el.clientY
   }

   if (!lastPoint.value) return;

   const ctx = canvas.getContext('2d');
   

   ctx.beginPath();
   ctx.strokeStyle = "red";
   ctx.moveTo(lastPoint.value.x, lastPoint.value.y);
   ctx.lineTo(currentPoint.x, currentPoint.y);
   ctx.stroke();


}

onMounted(() => {
   resizeCanvas();
//   const canvas = canvasRef.value;
// //   if (!canvas) return;

// //   const ctx = canvas.getContext("2d");
// //   canvasRef.value.getContext("2d");
// //   console.log(canvasRef.value);

  
// //   ctx.fillStyle = "red";
// //   ctx.fillRect(10, 10, 100, 10); // Un carré vert
// //   ctx.strokeStyle = "green";
// //   ctx.strokeRect(150, 10, 100, 100);

// // ctx.beginPath();
// // ctx.moveTo(50, 50);
// // ctx.lineTo(200, 50);
// // ctx.lineTo(200, 200);
// // ctx.stroke();
})

</script>

<style scoped></style>