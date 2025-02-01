<script setup lang="ts">
import { Paintbrush, Eraser, RotateCcw, Download } from "lucide-vue-next";
import { useDrawingStore } from "../stores/useDrawingStore";
import { clearCanvas } from "../utils/canvas";
const drawingStore = useDrawingStore();
const clear = () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;

    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    clearCanvas(ctx, canvas.width, canvas.height);
}
</script>
<template>
  <div class="toolbar">
    <div>
      <div class="flex gap-5 justify-center mb-10 m-10">
        <button
          :class="`cursor-pointer p-2 rounded-full ${
            !drawingStore.isEraser ? 'bg-blue-100' : 'bg-gray-100'
          }`"
          @click="drawingStore.setIsEraser(false)"
        >
          <Paintbrush :size="40" color="blue" />
        </button>
        <button
          :class="`cursor-pointer p-2 rounded-full ${
            drawingStore.isEraser ? 'bg-blue-100' : 'bg-gray-100'
          }`"
          @click="drawingStore.setIsEraser(true)"
        >
          <Eraser :size="40" color="gray" />
        </button>
      </div>
      <div  v-if="!drawingStore.isEraser" class="m-10">
        <div class="flex flex-col">
          <label for="" class="text-2xl">Couleur</label>
          <input
            type="color"
            v-model="drawingStore.color"
            @change="drawingStore.setColor(drawingStore.color)"
            class="w-[90%] h-10 cursor-pointer"
          />
        </div>
        <div class="flex flex-col mb-2">
          <label for="" class="text-2xl">Epaisseur</label>
          <input
            type="range"
            v-model="drawingStore.lineWidth"
            @change="drawingStore.setLineWidth(drawingStore.lineWidth)"
            min="1"
            max="50"
            id=""
            class="w-[90%] h-10 cursor-pointer"
          />
        </div>
        <div class="flex flex-col mb-3">
          <button
            class="bg-red-100 flex items-center p-2 text-xl gap-2 text-center rounded-md mb-3 w-[90%] h-10 cursor-pointer"
          >
            <RotateCcw :size="20" color="red" />
            <span class="text-red-500"
             @click="clear"
            >Clear</span>
          </button>
          <button
            class="bg-blue-100 flex items-center p-2 text-xl gap-2 text-center rounded-md w-[90%] h-10 cursor-pointerw"
          >
            <Download :size="20" color="blue" />
            <span class="text-blue-500">Save</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
