import React, { Component } from "react"
import { View, text, StyleSheet } from "react-native"
import Video from "react-native-video"
import Layout from "../components/Layout"
class Player extends Component {
    render() {
        return (
            <Layout video={
                <Video resizeMode="contain" style={styles.video} source={{ uri: "https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4" }} />
            } />
        )
    }
}
const styles = StyleSheet.create({
    video: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
});
export default Player