import React from "react"
import { View, Text, ImageBackground, StyleSheet } from "react-native"

Genre = (props) => {
    return (
        <ImageBackground
            style={styles.container}
            source={
                { uri: props.image }
            }>
            <Text style={styles.genreText}>
                {props.genre}
            </Text>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 125,
        width: 250,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        overflow: "hidden"
    },
    genreText: {
        padding: 5,
        borderRadius: 5,
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
    }
})
export default Genre