import React from "react"
import { View, Text, Image, StyleSheet, TouchableNativeFeedback } from "react-native"

Suggestion = (props) => {
    return (
        <TouchableNativeFeedback >
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image style={styles.cover} source={{ uri: props.medium_cover_image }} />
                    <View style={styles.genre}>
                        <Text style={styles.genreText}>
                            {props.genres[0]}
                        </Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.year}>{props.year}</Text>
                    <Text style={styles.rating}>{props.rating} Estrellas</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 5,
        paddingLeft: 10
    },
    cover: {
        height: 150,
        width: 100,
        resizeMode: "contain"
    },
    genre: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#70b124",
        paddingVertical: 5,
        paddingHorizontal: 7
    },
    genreText: {
        color: "white",
        fontSize: 11
    },
    right: {
        justifyContent: "space-between",
        paddingLeft: 10
    },
    title: {
        fontSize: 18,
        color: "#44546b"
    },
    year: {
        backgroundColor: "#70b124",
        borderRadius: 5,
        paddingVertical: 4,
        paddingHorizontal: 6,
        alignSelf: "flex-start",
        color: "white"
    },
    rating: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold',
    }
})
export default Suggestion