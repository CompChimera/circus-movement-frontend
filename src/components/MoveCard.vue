<script setup>
import { ref, computed } from "vue";
import { useMove, getMoveList } from "../composables/useMove";

  const props = defineProps({
      moveId: Number,
      name: String
  })
  const vals = ref({
    message: 'Manage your aerial routine',
    apparatusList: [
      {
        id: 1,
        name: "lyra"
      }
    ]
  });

  const moveList = getMoveList();
</script>

<template>
    <div class="move-card">
      {{ useMove( moveId, moveList ) }}
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