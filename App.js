import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import SuggestionList from "./src/videos/containers/SuggestionList"
import GenreList from "./src/videos/containers/GenreList"
import Home from "./src/screens/containers/home"
import Header from "./src/screens/components/header"
import Player from "./src/player/containers/player"
import API from "./api"

class App extends Component {
  state = {
    SuggestionList: [],
    loading: true
  }
  async componentDidMount() {
    const suggests = await API.getSuggestions(220)

    const categories = await API.getMovies()
    let arrayGenres = []
    const arrAux = []
    categories.map(movie => {
      if (!arrAux.includes(movie.genres[0])) {
        arrayGenres.push({
          genre: movie.genres[0],
          image: movie.background_image,
          id: movie.id
        })
        arrAux.push(movie.genres[0])
      }
    })

    this.setState({
      SuggestionList: suggests,
      categoryList: arrayGenres,
      loading: false
    })
  }
  render() {
    return (
      <Home>
        <Header />
        <Player />
        <ScrollView>
          <Text>Buscador</Text>
          <GenreList list={this.state.categoryList} loading={this.state.loading} />
          <SuggestionList list={this.state.SuggestionList} loading={this.state.loading} />
        </ScrollView>
      </Home>
    );
  }
};


export default App;
