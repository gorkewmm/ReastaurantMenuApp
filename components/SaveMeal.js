import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SaveMeal = ({ changeFavoriteStatusHandler, icon, color }) => {
    return (
        <Pressable
            onPress={changeFavoriteStatusHandler}
            style={({ pressed }) =>
                [pressed ? styles.pressedBtn : null]
            } >

             <MaterialIcons name={icon} color={color} size={24} />
        </Pressable>
    )
}

export default SaveMeal

const styles = StyleSheet.create({
    pressedBtn: {
        opacity: 0.4
    },
})