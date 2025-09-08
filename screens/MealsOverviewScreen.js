import { StyleSheet, Text, View, FlatList } from 'react-native'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import { useEffect } from 'react'

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params

  const displayedMeals = MEALS.filter((e) => 
    e.categoryIds.includes(categoryId) //categoryId’yi içeren yemeklerin array’i dönüyor.
  )

  useEffect(() => {
    const category = CATEGORIES.find((e) => e.id === categoryId)

    navigation.setOptions({
      title: category.title,
      contentStyle: {
        backgroundColor: category.color
      },
      
    })

  }, [categoryId,navigation])

  function pressHandler(mealid){
    const relatedMeal = displayedMeals.find((e)=>e.id === mealid)
    navigation.navigate("DetailMeal",{
      relatedMeal: relatedMeal,
    })
  }

  return (
    <FlatList
      data={displayedMeals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MealItem title={item.title} image={item.imageUrl} duration={item.duration} complexity={item.complexity} affordability={item.affordability} pressHandler={()=>pressHandler(item.id)}/>}
    >

    </FlatList>

  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})