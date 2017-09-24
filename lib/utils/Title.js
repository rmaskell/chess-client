import React, {Component} from 'react';
import {View, Image} from 'react-native';

export class Title extends Component {
    constructor(props) {
        super(props);
        this.styles = this.props.styles;
    }
    render() {
        return (
            <View style={this.styles.titleImgContainer}>
                <Image
                    source={require('../../resources/chess-title.png')}
                    style={this.styles.titleImg}/>
            </View>
        );
    }
}