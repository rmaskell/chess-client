import React, { Component } from 'react';
import { View } from 'react-native';
import { MenuView } from './Menu-View';
import { LevelSelectView } from './Level-Select-View';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.styles = this.props.styles;
        this.state = {
            context: 'Menu'
        };
    }
    _setContext(that) {
        return (context) => {
            that.setState(Object.assign({}, that.state, {context: context}));
        };
    }
    roomJoinedCB() {
        let that = this;
        return (roomName, boardState) => {
            console.log('joined: ', roomName);
            console.log('board state: ', boardState);
        };
    }
    generateMenuView() {
        return (
            <View style={this.styles.container}>
                <MenuView 
                    styles={this.styles}
                    roomJoinedCB={this.roomJoinedCB(this)}
                    setContext={this._setContext(this)}
                    getContext={() => {return this.state.context}}
                />
            </View>
        );
    }
    generateLevelSelectView() {
        return (
            <View style={this.styles.container}>
                <LevelSelectView
                    styles={this.styles}
                    setContext={this._setContext(this)}
                />
            </View>
        );
    }
    render() {
        switch (this.state.context) {
        case 'Menu':
            return this.generateMenuView();
            break;
        case 'Room':
            return this.generateRoomView();
            break;
        default:
            return this.generateMenuView();
            break;
        };
    }
}