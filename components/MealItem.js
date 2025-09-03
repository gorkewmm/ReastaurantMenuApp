import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealItem = ({ title, image, duration, complexity, affordability,pressHandler}) => {
    return (
        <View style={styles.MealItemContainer} >
            <Pressable android_ripple={{color: "#ccc"}}
            onPress={pressHandler}
            style={({ pressed })=> [
                pressed ? styles.buttonPressed : null
            ]}
            >
                <View style={styles.MealCards} >
                    <Image style={styles.img} source={{ uri: image }} />
                    <Text style={styles.titleText} >{title}</Text>
                    <Text style={styles.infoText}>{duration} {complexity.toUpperCase()} {affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    MealItemContainer: {
        flex: 1,
        margin: 20,
        elevation:4,
        borderRadius:8,
        shadowColor:"black",
        shadowOpacity:0.25,
        shadowOffset: {width: 0, height:2},
        shadowRadius: 8,
        backgroundColor:"white",
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    MealCards: {
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 8,
        overflow:"hidden",
        
    },
    img: {
        width: "100%",
        height: 200
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign:"center"
    },
    infoText: {
        marginVertical:10
    },
    buttonPressed:{
        opacity:0.5,
    }
})