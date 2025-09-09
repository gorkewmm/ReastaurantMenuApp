import { createSlice } from "@reduxjs/toolkit"

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id)
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        },
        clearAllFavoriteMeals: (state) => {
            state.ids.length = 0
        }
    }
});

export const {addFavorite, removeFavorite, clearAllFavoriteMeals} = favoritesSlice.actions
export default favoritesSlice.reducer