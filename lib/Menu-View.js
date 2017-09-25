import React, {Component} from 'react';
import {Button, Text, View, Image} from 'react-native';
import { Title } from './utils/Title';
import { MainMenu } from './utils/Main-Menu';
import { JoinRoomForm } from './utils/Join-Room-Form';

export class MenuView extends Component {
    constructor(props) {
        super(props);
        this.styles = this.props.styles;
        this.getContext = this.props.getContext;
        let that = this;
        let setContext = this.props.setContext;
        this.state = {
            btnText: [
                'Quick Play', 'Join Room', 'Create Room'
            ],
            btnOnClicks: [
                () => {
                    that.setState(Object.assign({}, that.state, {menuContext: 'Quick Play'}));
                    //setContext('Quick Play');
                },
                () => {
                    that.setState(Object.assign({}, that.state, {menuContext: 'Join Room'}));
                    //setContext('Join Room');
                },
                () => {
                    that.setState(Object.assign({}, that.state, {menuContext: 'Create Room'}));
                    //setContext('Create Room');
                }
            ],
            menuContext: 'Main Menu'
        };
    }
    getText(textArr) {
        return (i) => {
            return textArr[i];
        }
    }
    getAction(actionArr) {
        return (i) => {
            return actionArr[i];
        }
    }
    generateMainMenuView(bg) {
        return (
            <Image source={require('./../resources/background.jpeg')} style={this.styles.bgImg}>
                <View style={this.styles.menuTopSpacer}/>
                <Title styles={this.styles}/>
                <MainMenu
                    styles={this.styles}
                    getAction={this.getAction(this.state.btnOnClicks)}
                    getText={this.getText(this.state.btnText)}/>
            </Image>
        );
    }
    generateJoinRoomView(bg) {
        return (
            <Image source={bg} style={this.styles.bgImg}>
                <View style={this.styles.menuTopSpacer}/>
                <Title styles={this.styles}/>
                <JoinRoomForm styles={this.styles}
                    roomJoinedCB={this.props.roomJoinedCB}/>
            </Image>
        );
    }
    render() {
        let bg = require('./../resources/background.jpeg');

        switch (this.state.menuContext) {
            case 'Main Menu':
                return this.generateMainMenuView(bg);
                break;
            case 'Join Room':
                return this.generateJoinRoomView(bg);
                break;
            default:
                return this.generateMainMenuView(bg);
                break;
            };
    }
}