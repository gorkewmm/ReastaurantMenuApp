import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from "@expo/vector-icons"

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';




export default function App() {
  const Stack = createNativeStackNavigator()
  const Drawer = createDrawerNavigator()

  function DrawerNavigator() {
    return (
      <Drawer.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "#866553ff"
        },
        headerTintColor: "white",
        sceneStyle: {
          backgroundColor: "#4d3d32ff"
        },
        drawerContentStyle: {
          backgroundColor: "#866553ff"
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#b1a199ff",
        drawerActiveBackgroundColor: "#a58d7dff"
      }} >
        <Drawer.Screen name="Categories" component={CategoriesScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => (<Ionicons name='list' color={color} size={size} />)

          }} />
        <Drawer.Screen name="Favorites" component={FavoritesScreen}
          options={{
            drawerIcon: ({ color, size }) => (<Ionicons name='star' color={color} size={size} />)
          }}
        />
      </Drawer.Navigator>)
  }

  return (
    <>
      <StatusBar style='light' />

      {/* <FavoritesContextProvider> */}
      <Provider store={store} >
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: "#866553ff"
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#4d3d32ff"
            }
          }} >
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name='DetailMeal'
              component={MealDetailsScreen}
              options={{
                title: "About the Meal"
              }}

            />

          </Stack.Navigator>

        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}

    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
