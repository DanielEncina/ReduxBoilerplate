import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './src/reducers';
import SuperHeroesList from './src/SuperHeroesList.js';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={createStore(Reducers)}>
        <View style={styles.container}>
          <SuperHeroesList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
