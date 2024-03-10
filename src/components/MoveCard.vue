<script setup>
import { ref, computed } from "vue";
import { useMove } from "../composables/useMove";

const props = defineProps({
    moveId: Number
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

  const moveStore = useMove();
  console.log(moveStore);


</script>

<template>
  <div id="app">
    <!-- <h1>Aerial Routines</h1>
    <div v-if="routineList.length > 0" class="routine__wrapper">
      <div v-for="routine in routineList" :routine="routine" :key="`routine=${routine.id}`" class="routine___card">
        <h2>{{routine.name}}</h2>  
        <p><strong>Apparatus: </strong>{{apparatusList[0].name}}</p>
        <p><strong>Routine moves:</strong></p> -->
        <div class="move-card__wrapper">
          <div class="move-card">
            {{ useMove( moveId) }}
          </div>
        </div>
          
      <!-- </div>
    </div>
    <div style="padding: 30px;">
      <button @click="createRoutine">{{ routineAddButton }} </button>
    </div> -->
    
  </div> 
</template>

<style>
  body {
    background-color: #faedfd;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}

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
  .routine__wrapper {
    display: grid;
    grid-auto-flow: row;
    justify-content: center;
    align-items: center;
     gap: 30px;
    
    @media (min-width: 750px) {
      grid-template-columns: repeat(2, auto);
    }
  }
  .routine___card {
    background-color: #ffe4e9;
    background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 74%, rgba(148,187,233,1) 100%);
    border: 1px solid #3d5b7e;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 5px 5px 10px 0px #3d5b7e;

  }
  .move-card__wrapper {
    display: grid;
    grid-auto-flow: column;
    gap: 15px;
  }
  .move-card {
    background-color: pink;
    border-color: purple;
    padding: 20px;
    display:flex;
    border-radius: 10px;
    font-weight: bold;
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
  }
  
  .move-card:last-child:after {
    content: '';
  }
</style>