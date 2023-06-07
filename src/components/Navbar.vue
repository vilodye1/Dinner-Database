<template>
    <div class="bg-gray-100 h-100">
        <header class="bg-white shadow h-16 flex justify-between items-center px-5">
            <router-link :to="{name: 'home'}" class="hover:text-orange-400 transition-colors tracking-wide">
                Home
            </router-link>
            <div class="space-x-5">
                <router-link to="/" class="hover:text-orange-400 transition-colors tracking-wide">
                    Search Meals
                </router-link>
                <router-link to="/" class="hover:text-orange-400 transition-colors tracking-wide">
                    Search by Letter
                </router-link>
                <router-link to="/" class="hover:text-orange-400 transition-colors tracking-wide">
                    Search by Ingredients
                </router-link>
            </div>
        </header>  
    </div>

</template>

<script>
    export default {
        name: 'Navbar',
    }
</script>

<style scoped>

</style>