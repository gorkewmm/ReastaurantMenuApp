import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import SaveMeal from "../components/SaveMeal"
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/redux/favorites'
// import { FavoritesContext } from '../store/context/favorites-context'

const MealDetailsScreen = ({ route, navigation }) => {
  const { relatedMeal } = route.params
  // const favoriteMealsCtx = useContext(FavoritesContext)
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
  const dispatch = useDispatch()

  // const mealIsFavorite = favoriteMealsCtx.ids.includes(relatedMeal.id)
  const mealIsFavorite = favoriteMealIds.includes(relatedMeal.id)

  function changeFavoriteStatusHandler(){
    // if (mealIsFavorite){
    //   favoriteMealsCtx.removeFavorite(relatedMeal.id)
    // }else{
    //   favoriteMealsCtx.addFavorite(relatedMeal.id)
    // }
    if (mealIsFavorite){
      dispatch(removeFavorite({id: relatedMeal.id}))
    }else{
      dispatch(addFavorite({id: relatedMeal.id}))
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => 
      <SaveMeal changeFavoriteStatusHandler={changeFavoriteStatusHandler}
       icon={mealIsFavorite ? "bookmark" : "bookmark-border"} 
       color={"white"} />
    })

  }, [navigation, changeFavoriteStatusHandler])

  return (
    <ScrollView style={styles.rootContainer} >
      <View style={styles.detailContainer} >
        <Image style={styles.img} source={{ uri: relatedMeal.imageUrl }} />
        <Text style={styles.title} >{relatedMeal.title}</Text>
        <View style={styles.infoContainer} >
          <Text style={styles.infoText}>{relatedMeal.duration} {relatedMeal.complexity.toUpperCase()} {relatedMeal.affordability.toUpperCase()}</Text>
        </View>


        <View style={styles.contextContainer} >
          <Text style={styles.text} >Ingredients</Text>
          <View style={{ borderBottomWidth: 3, borderColor: "white", width: "50%", alignSelf: 'center' }} >
          </View>
          {relatedMeal.ingredients.map((v, i) => (
            <View key={v} style={styles.detail} >
              <Text style={styles.detailOutputText} >{v}</Text>
            </View>
          ))}



          <Text style={styles.text}>Steps</Text>
          <View style={{ borderBottomWidth: 3, borderColor: "white", width: "50%", alignSelf: 'center' }} >
          </View>
          {relatedMeal.steps.map((v, i) => (
            <View key={v} style={styles.detail}>
              <Text style={styles.detailOutputText}>{v}</Text>
            </View>
          ))}

        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  detailContainer: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: 300,
    overflow: "hidden"
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
    marginVertical: 10
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: 'center',
  },
  infoText: {
    marginVertical: 10,
    color: "white"
  },
  contextContainer: {
    flex: 1,
    marginHorizontal: 50,
    marginVertical: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    color: "#839490ff",
  },
  detail: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#ddbc95ff",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    padding: 10
  },
  detailOutputText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#634b2bff"
  }
})