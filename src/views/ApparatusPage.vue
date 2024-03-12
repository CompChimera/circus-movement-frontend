<script setup>
import {apparatusListGlobal} from '@/composables/useApparatus.js';
import { reactive, ref, computed } from "vue";
import {useRouter} from "vue-router";


console.log(apparatusListGlobal.value);
const apparatusName = ref("");
const apparatusDescription = ref("");
const router = useRouter();

// const apparatusLink

function addApparatus(){
    const newApparatus = {
        id: apparatusListGlobal.value.length+1,
        name: apparatusName.value,
        description: apparatusDescription.value
    }
    apparatusListGlobal.value.push(newApparatus);

    if(newApparatus){
        const newUrl = "/apparatus/" + newApparatus.id;

        router.push(newUrl);
    }

}
</script>

<template>
    <h2>Apparatus</h2>

    <div class="apparatus-list">
        <div v-for="apparatus in apparatusListGlobal" class="apparatus-list__item" :apparatus="apparatus.id" :key="`apparaus=${apparatus.id}`">
            <router-link :to='{name: "singleapparatus", params: {id: apparatus.id}}' class="apparatus-list__item-link">
                <span><strong>{{ apparatus.name }}</strong></span>
                <div>Description: {{ apparatus.description }}</div>
            </router-link>
        </div>
    </div>

    <div>
        <h3>Create Apparatus</h3>
        <div class="apparatus__create-wrapper">
            <label for="name">Name (Character req):</label>
            <input type="text" id="name" v-model="apparatusName" required/>
            
            <label for="description">Description(Character req):</label>
            <input type="text" id="description" v-model="apparatusDescription" required/>
            <button class="button submit" @click="addApparatus">Add Apparatus</button>
        </div>
    </div>

</template>

<style>
.apparatus__create-wrapper {
    display: flex;
    flex-direction: column;
    padding: 10px;
    max-width: 500px;
}

.apparatus__create-wrapper label {
    font-weight: bold;
}

.apparatus__create-wrapper button {
    margin-top: 20px;
}

.apparatus__create-wrapper input {
    border-radius: 10px;
    padding-left: 10px;
}

.apparatus-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    padding-bottom: 20px;
}

.apparatus-list__item {
    background-color: pink;
    border:1px solid #3d5b7e;
    border-radius: 10px;
    color: #2c3e50;
    display:flex;
    flex-direction: column;
    font-weight: bold;
    position: relative;
}

.apparatus-list__item:hover {
    background-color: #ffe4e9;
    color: #2c3e50;
}

.apparatus-list__item-link {
    text-decoration: none;
    color: #2c3e50;
    padding: 20px;
}

.apparatus-list__item-link:hover {
    text-decoration: underline;
}
</style>