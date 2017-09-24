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
  // text: {
  //   color: 'green',
  //   fontSize: 25,
  //   textAlign: 'center',
  //   textShadowColor: '#555',
  //   textShadowOffset: {
  //     width: 2,
  //     height: 2
  //   }
  // },
  bgImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuButtons: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    width:200
  },
  indivButton: {
    height: 40,
    margin: 6
  }
});


