<script setup>
import { storeToRefs } from 'pinia';
import { useMoveStore } from "@/stores/MovesStore";

  const props = defineProps({
      moveId: Number,
      name: String
  })

  const moveStore = useMoveStore();
  const {getMoveById} = storeToRefs(moveStore)

</script>

<template>
    <div class="move-card">
      {{ getMoveById(moveId).name }}
    </div>
</template>

<style>
  .move-card {
    background-color: pink;
    border-color: purple;
    border-radius: 10px;
    color: #2c3e50;
    display:flex;
    font-weight: bold;
    padding: 20px;
    position: relative;
    box-shadow: 5px 5px 10px 0px #3d5b7e;
  }
  
  .move-card::after {
    content: '>';
    color: #3d5b7e;
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    right: -12px;
    top: 40%;
    font-weight: bold;
  }
  
  .move-card:last-child:after {
    content: '';
  }
</style>