import { StyleSheet, Text, View, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import MealsOverviewScreen from './MealsOverviewScreen'

const CategoriesScreen = ( { navigation } ) => {
  function PressHandler(id){
    navigation.navigate("MealsOverview",{ categoryId: id })// Meals ekranına yönledirdim ve catgori id bilgisini aktardım
  }

  return (
    <FlatList 
    data={CATEGORIES} 
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>
    <CategoryGridTile title={item.title} color={item.color} pressHandler={()=>PressHandler(item.id)} />}
    numColumns={2}
    >
    
    </FlatList>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})