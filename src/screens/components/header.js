import React from "react"
import { Text, View, Image, StyleSheet, SafeAreaView } from "react-native"

Header = (props) => {
    return (
        <View>
            <SafeAreaView>
                <View style={styles.container}>
                    <Image source={require("../../../assets/logo.png")} style={styles.logo} />
                    <View style={styles.right}>{props.children}</View>
                </View>
            </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    logo: {
        width: 80,
        height: 26,
        resizeMode: "contain"
    },
    right: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    }
})
export default Header