<script setup lang='ts'>
import { ref, onMounted } from 'vue';
const canvasRef = ref<HTMLCanvasElement | null>(null);
const toolbarRef = ref<HTMLDivElement | null>(null);
const lastPoint = ref<{ x: number, y: number } | null>(null);

import { drawLIine } from "../utils/canvas";
import { useDrawingStore } from "../stores/useDrawingStore"

const drawingStore = useDrawingStore();

const resizeCanvas = () => {
   const canvas = canvasRef.value;
   const toolbar = document.querySelector('.toolbar');
   // console.log(toolbar);
   if (!canvas ||  !toolbar) return;
   canvas.width = window.innerWidth - toolbar.clientWidth;
   canvas.height = window.innerHeight - toolbar.clientHeight ;
}

// Démarrer me dessin
const startDrawing = (e: MouseEvent) => {
   const canvas = canvasRef.value;
   if (!canvas) return;
   const rect = canvas.getBoundingClientRect();
    drawingStore.setIsDrawing(true);
   // console.log('start drawing', e);
   lastPoint.value = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
   }
   console.log(lastPoint.value)
}

//Arreter le dessin
const stopDrawindg = () =>{
   drawingStore.setIsDrawing(false);
   lastPoint.value = null;
}

// Dessiner
const draw = (el: MouseEvent) => {
   if (!drawingStore.isDrawing) return;
   // console.log('drawing', el);

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
   if(!ctx) return;   

 drawLIine(ctx, lastPoint.value, currentPoint, drawingStore.color, drawingStore.lineWidth, drawingStore.isEraser);
   lastPoint.value = currentPoint;
}

onMounted(() => {
   window.addEventListener('resize' , resizeCanvas);
   resizeCanvas();
  const canvas = canvasRef.value;
  if (!canvas) return;

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

<template>
   <canvas @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawindg" ref="canvasRef" class="">
   </canvas>
</template>