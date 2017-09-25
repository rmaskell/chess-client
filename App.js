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
    justifyContent: 'center'
  },
  bgImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  joinFormContainer: {
    flex: 2,
    width: 200,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  joinFormInput: {
    backgroundColor: "#FFF",
    flex: 1,
    fontSize: 20
  },
  joinFormTopSpacer: {
    flex: 2
  },
  joinFormBottomSpacer: {
    flex: 6
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
  },
  roomContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boardRow: {
    flex: 1,
    flexDirection: "row",
  },
  boardSquareWhite: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#893220'
  },
  boardSquareBlack: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DD9C53'
  },
  gestureSquare: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  piece: {
    flex: 1,
    width: 20,
    height: 20
  },
  roomTopSpacer: {
    backgroundColor: '#000',
    alignSelf: 'stretch',
    flex: 2
  },
  roomBottomSpacer: {
    backgroundColor: '#000',
    alignSelf: 'stretch', 
    flex: 2
  },
  roomContent: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


