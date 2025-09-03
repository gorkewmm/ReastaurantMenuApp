import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';



export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: "#725545ff"
          },
          headerTintColor: "white",
          contentStyle: {
            backgroundColor: "#4d3d32ff"
          }
        }} >
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: "All Categories",

            }} />
          <Stack.Screen 
          name='MealsOverview' 
          component={MealsOverviewScreen} 
          // options={({route, navigation})=> {
          //   const catId = route.params.categoryId
          //   return {
          //     title: catId
          //   }
          // }}
          />
          <Stack.Screen
          name='DetailMeal' 
          component={MealDetailsScreen} 

          />
        </Stack.Navigator>

      </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
