<template>
    {{meals.meals}}
</template>

<script setup>
import { useMealStore } from '../stores/MealStore'

const meals = useMealStore()

</script>