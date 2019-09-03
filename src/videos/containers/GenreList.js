import React, { Component } from "react"
import { View, StyleSheet, FlatList, ImageBackground, ActivityIndicator } from "react-native"
import Genre from "../components/Genre"
import Separator from "../components/HorizontalSeparator"
import Empty from "../components/Empty"
import Layout from "../components/GenresListLayout"
class GenreList extends Component {

    renderEmpty = () => <Empty text="Aun no hay generos disponibles :(" />
    renderSeparator = () => <Separator />
    renderItem = ({ item }) => <Genre {...item} />
    keyExtractor = item => item.id.toString()
    render() {
        const list = this.props.list
        return (
            <View>
                {this.props.loading ?
                    <ActivityIndicator />
                    :
                    <View>
                        <Layout title="Generos">
                            <FlatList
                                data={list}
                                horizontal
                                keyExtractor={this.keyExtractor}
                                ItemSeparatorComponent={this.renderSeparator}
                                ListEmptyComponent={this.renderEmpty}
                                renderItem={this.renderItem} />
                        </Layout>
                    </View>
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 110,
        paddingVertical: 10
    }
})
export default GenreList