import React from "react"
import { View, Text, StyleSheet, ImageBackground } from "react-native"

GenresListLayout = (props) => {
    return (
        <ImageBackground style={styles.container} source={require("../../../assets/background.png")}>
            <View>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                {props.children}
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginLeft: 8
    },
    title: {
        color: "#4c4c4c",
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "bold",
        marginLeft: 8
    }
})
export default GenresListLayout