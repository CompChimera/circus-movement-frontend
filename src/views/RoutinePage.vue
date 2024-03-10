<script setup>
import { ref } from 'vue';
import MoveCard from '../components/MoveCard.vue';
  const routineList =  ref([
        {
          id: 1,
          name: "Spring showcase",
          moves: [1,3,2,4,5],
          apparatus: 1
        }
      ]);
    const apparatusList = ref([
    {
      id: 1,
      name: "lyra"
    }
  ]);
</script>

<template>
  <main>
    <h2>Routine</h2>
    <!-- <label for="email">Email</label>
    <input type="email" />
    <button>Continue with email</button> -->
    <!-- <div v-for="routine in routineList">
    
    </div> -->
    <!-- <h1>Aerial Routines</h1> -->
    <div v-if="routineList.length > 0" class="routine__wrapper">
      <div v-for="routine in routineList" :routine="routine" :key="`routine=${routine.id}`" class="routine___card">
        <h2>{{routine.name}}</h2>  
        <p><strong>Apparatus: </strong>{{apparatusList[0].name}}</p>
        <p><strong>Routine moves:</strong></p>
        <div class="move-card__wrapper">
          <div v-for="move in routine.moves" :move="move" :key="move.id" class="move-card">
            <MoveCard id="move.id" />
          </div>
        </div>
          
      </div>
    </div>
    <div style="padding: 30px;">
      <button @click="createRoutine">{{ routineAddButton }} </button>
    </div>
    
  </main> </template>

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
  }</style>