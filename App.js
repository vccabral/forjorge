/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import FluidBridgeNativeView from './src/FluidBridgeNativeView';
import FluidBridgeNativeModule from './src/FluidBridgeNativeModule';


export default class App extends Component<{}> {
  componentDidMount(){
    FluidBridgeNativeModule.exampleMethod();
  }

  render() {
    return (
      <View style={styles.container}>
        <FluidBridgeNativeView ref="fluid" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
