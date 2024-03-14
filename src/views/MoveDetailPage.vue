<script setup>
import { useRoute } from 'vue-router';
import MoveCard from '../components/MoveCard.vue';

const route = useRoute();
const props = defineProps(['id'])


</script>

<template>
    <h2> Singular Move Page - {{ route.params.id }}</h2>
</template>

<style></style>