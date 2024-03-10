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


a,
button {
  color: #d78291;
}

button {
  background-color: #FFF;
  border: solid 2px #3d5b7e;
  border-radius: 2em;
  font: inherit;
  font-weight: bold;
  padding: 0.75em 2em;
  cursor: pointer;
  -webkit-transition: all 1s; /* For Safari 3.0 to 6.0 */
   transition: all 1s; /* For modern browsers */
}
  
  button:hover{
    background-color: pink;
    color: #3d5b7e;
    border: solid 2px pink;

  }

  .move-card__wrapper {
    display: grid;
    grid-auto-flow: column;
    gap: 15px;
  }
  .move-card {
    background-color: pink;
    border-color: purple;
    border-radius: 10px;
    display:flex;
    font-weight: bold;
    padding: 20px;
    position: relative;

  }
  
  .move-card::after {
    content: '>';
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    right: -12px;
    color: #3d5b7e;
    top: 40%;
  }
  
  .move-card:last-child:after {
    content: '';
  }
</style>