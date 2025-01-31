<template>
  <div>
    <div>
      <div class="flex gap-5 justify-center mb-10 m-10">
        <button class="bg-blue-100 p-2 rounded-md cursor-pointer">
          <Paintbrush :size="40" color="blue" />
        </button>
        <button class="bg-gray-200 p-2 rounded-md cursor-pointer">
          <Eraser :size="40"  color="gray" />
        </button>
      </div>
      <div class="m-10">
          <div class="flex flex-col">
            <label for="" class="text-2xl">Couleur</label>
            <input type="color" class="w-[90%] h-10 cursor-pointer" />
          </div>
          <div class="flex flex-col mb-2 ">
            <label for="" class="text-2xl">Epaisseur</label>
            <input type="range" min="1" max="10" id="" class="w-[90%] h-10 cursor-pointer" />
          </div>
          <div class="flex flex-col mb-3">
              <button class="bg-red-100 flex items-center p-2 text-xl  gap-2 text-center  rounded-md mb-3 w-[90%] h-10 cursor-pointer">
                <RotateCcw :size="20" color="red" />
                <span class="text-red-500">Clear</span>
              </button>
              <button class="bg-blue-100 flex items-center p-2 text-xl gap-2 text-center rounded-md  w-[90%] h-10 cursor-pointerw">
                <Download :size="20" color="blue" />
                <span class="text-blue-500">Save</span>
              </button>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Paintbrush, Eraser, RotateCcw, Download } from "lucide-vue-next";
</script>

<style></style>
