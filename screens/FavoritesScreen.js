import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { FavoritesContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux'
import { clearAllFavoriteMeals } from '../store/redux/favorites'

const FavoritesScreen = ({ navigation }) => {
  // const favoritesCtx = useContext(FavoritesContext)
  const favMealIds = useSelector((state) => state.favoriteMeals.ids)
  const dispatch = useDispatch()

  const favMeals = MEALS.filter((e) =>
    favMealIds.includes(e.id) //MEAL arreyindeki idleri tek tek gezip, bu idlerden favMealIds arreyinde bulunan MEAL'leri favMeals'e atadım
  )

  function addNewFavoriteHandler() {
    navigation.navigate("Categories")
  }


  function pressHandler(mealid) {
    const relatedMeal = favMeals.find((e) => e.id === mealid)
    navigation.navigate("DetailMeal", {
      relatedMeal: relatedMeal,
    })
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Pressable onPress={()=>dispatch(clearAllFavoriteMeals())}>
        <MaterialCommunityIcons
          style={styles.deleteIcon}
          name="delete"
          color="#000"
          size={24}
        />
      </Pressable>,
    })
  }
    , [navigation])


  if (favMeals.length === 0) {
    return (
      <View style={styles.emptyRootContainer} >
        <View style={styles.emptyInnerContainer}>
          <Text style={styles.emptyText}>Henüz hiçbir favori yemeğiniz bulunmuyor</Text>
        </View>

        <Pressable
          onPress={addNewFavoriteHandler}
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            pressed ? styles.pressedBtn : null]
          } >
          <View style={styles.addNewMeal} >
            <Text>Eklemek için tıklayın</Text>
          </View>
        </Pressable>
      </View>
    )
  }
  return (
    <FlatList
      data={favMeals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) =>
        <MealItem title={item.title} image={item.imageUrl} duration={item.duration} complexity={item.complexity} affordability={item.affordability} pressHandler={() => pressHandler(item.id)} />
      }
    >

    </FlatList>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  emptyRootContainer: {
    flex: 1,
    alignItems: "center",
    margin: 20,

  },
  emptyInnerContainer: {
    backgroundColor: "#aaac90ff",
    borderWidth: 1,
    width: "70%",
    height: 90,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 20
  },
  emptyText: {
    fontSize: 15,
    padding: 20
  },
  pressedBtn: {
    opacity: 0.5,
  },
  addNewMeal: {
    backgroundColor: "#b6a057ff",
    padding: 20,
  },
  deleteIcon: {
    marginRight: 10
  }

})