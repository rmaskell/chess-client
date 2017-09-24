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
    generateMenuView() {
        return (
            <View style={this.styles.container}>
                <MenuView 
                    styles={this.styles}
                    setContext={this._setContext(this)}
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
        case 'LevelSelect':
            return this.generateLevelSelectView();
            break;
        default:
            return this.generateMenuView();
            break;
        };

    }
}