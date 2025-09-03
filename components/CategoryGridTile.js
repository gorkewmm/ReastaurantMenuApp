import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoryGridTile = ({ title, color, pressHandler }) => {
  return (
    <View style={styles.gridItem} >
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button, 
          pressed ? styles.buttonPressed : null]}
        onPress={pressHandler}  
      >
        <View style={[styles.innerContainer,{ backgroundColor: color }]} >
          <Text style={styles.title} >{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: "hidden",

    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible"
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
})