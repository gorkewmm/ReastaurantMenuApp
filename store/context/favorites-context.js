import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { },
    clearAllFavoriteMeals: () => { }
})

function FavoritesContextProvider({ children }) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([])

    function addFavorite(id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id])
    }
    function removeFavorite(id) {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((e) => e !== id)
        );
    }

    function clearAllFavoriteMeals(){
        setFavoriteMealIds([])
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
        clearAllFavoriteMeals : clearAllFavoriteMeals
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider