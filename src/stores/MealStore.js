import { defineStore } from 'pinia'

export const useMealStore = defineStore('mealStore', {
    state: () => ({
        meals: [
            "Teriyaki Porkchops", "Apple Crisp"
        ]
    })
})

// export default useMealStore;