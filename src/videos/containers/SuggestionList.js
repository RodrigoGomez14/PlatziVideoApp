import React, { Component } from "react"
import { View, Text, FlatList, StyleSheet, ActivityIndicator, ScrollView } from "react-native"
import Suggestion from "../components/Suggestion"
import API from "../../../api"
import Layout from "../components/SuggestionListLayout"
import Empty from "../components/Empty"
import Separator from "../components/verticalSeparator"
class SuggestionList extends Component {
    renderEmpty = () => <Empty text="Aun no hay recomendaciones :(" />
    renderSeparator = () => <Separator />
    renderItem = ({ item }) => <Suggestion {...item} />
    keyExtractor = item => item.id.toString()
    render() {
        const list = this.props.list
        return (
            <View>
                {this.props.loading ?
                    <ActivityIndicator />
                    :
                    <View>
                        <Layout title="Recomendado para ti">
                            <FlatList
                                data={list}
                                keyExtractor={this.keyExtractor}
                                ListEmptyComponent={this.renderEmpty}
                                ItemSeparatorComponent={this.renderSeparator}
                                renderItem={this.renderItem} />
                        </Layout>
                    </View>
                }
            </View>
        )
    }
}
export default SuggestionList