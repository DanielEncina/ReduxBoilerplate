import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import SuperHeroesList from './src/SuperHeroesList.js';
import SuperHeroesList2 from './src/SuperHeroesList2.js';
import configureStore from './src/configureStore.js';
import Tabs from './src/components/tabs.js';

const store = configureStore();

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Tabs>
            {/* First tab */}
            <View title="WELCOME" style={styles.content}>
              <SuperHeroesList />
              {/* <Text style={styles.header}>Welcome to React Native</Text>
              <Text style={styles.text}>
                The best technology to build cross platform mobile apps with
              </Text> */}
            </View>
            {/* Second tab */}
            <View title="NATIVE" style={styles.content}>
              <SuperHeroesList2 />
              {/* <Text style={styles.header}>Ease of Learning</Text>
              <Text style={styles.text}>
                It’s much easier to read and write comparing to native platform’s code
              </Text> */}
            </View>
            {/* Third tab */}
            <View title="EASY" style={styles.content}>
              <Text style={styles.header}>Ease of Learning</Text>
              <Text style={styles.text}>
                It’s much easier to read and write comparing to native platform’s code
              </Text>
            </View>
          </Tabs>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E91E63'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2185B'
  },
  header: {
    margin: 10,
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 26
  },
  text: {
    marginHorizontal: 20,
    color: 'rgba(255, 255, 255, 0.75)',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 18
  }
});
