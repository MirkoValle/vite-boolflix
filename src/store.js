// store.js
import { reactive } from 'vue'

export const store = reactive({
    films: [],
    Series: [],
    trending: [],
    trendingSecond: [],
    searched: "",
})