import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import Home from './src/screen/containers/home';
import Header from './src/section/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';

type Props = {};
export default class App extends Component<Props> {
  state = {
    SuggestionList: []
  }
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    this.setState({
      SuggestionList: movies
    })
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>buscador</Text>
        <Text>categorías</Text>
        <SuggestionList 
          list = {this.state.SuggestionList}
        />
      </Home>
    );
  }
}