<template>
    <!-- {searchbar} -->
    <div class="flex flex-col items-center justify-center p-8 mt-10">
        <input type="text" placeholder="Search..." class="rounded border-2 border-gray-200 p-2 w-full" />

        <div class="flex gap-2 mt-2">
            <router-link 
            :to="{name: 'byLetter', params: {letter}}" 
            :key="letter" 
            v-for="letter of letters">
                <p class="hover:text-orange-300">{{ letter }}</p>
            </router-link>
        </div>

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMealStore } from '../stores/MealStore';
import axiosClient from '../axiosClient.js'



// search bar letters
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Registers a callback to be called after the component has been mounted.
onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list')

})
</script>