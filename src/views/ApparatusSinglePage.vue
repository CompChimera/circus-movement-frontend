<script setup>
import { useRoute } from 'vue-router';
import MoveCard from '../components/MoveCard.vue';
import { useMove, getMoveList,  moveListGlobal, useMovesFromApparatus } from "../composables/useMove";

import {apparatusListGlobal, getApparatus} from '@/composables/useApparatus.js';


const route = useRoute();
const props = defineProps(['id']);


const movesList = useMovesFromApparatus(route.params.id);
const apparatus = getApparatus(route.params.id);
</script>

<template>
    <h2>Apparatus page - {{ apparatus.name }}</h2>

    <MoveCard v-if="movesList.length > 0" v-for="move in movesList" :moveId="move.id" :key="`move=${move.id}`" />
    <div v-else>
        <p>There are no moves yet for this apparatus. Time to add some!</p>
        <div>
            Form to add move for {{ apparatus.name }}
        </div>
    </div>
</template>

<style></style>