import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Game } from './lib/Game-View';

export default class App extends React.Component {
  render() {
    return (
      <Game styles={styles}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  bgImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuButtons: {
    flex: 2,
    alignItems: 'stretch',
    justifyContent: 'center',
    width:200
  },
  indivButton: {
    height: 40,
    margin: 6
  },
  titleImgContainer: {
    flex:0.3,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: 300,
    height: 50
  },
  titleImg: {
    flex: 1,
    width: null,
    height: 100,
    resizeMode: 'stretch'
  },
  menuTopSpacer: {
    flex: 0.6
  }
});


