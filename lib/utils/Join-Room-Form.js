import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native';

export class JoinRoomForm extends Component {
    constructor(props) {
        super(props);
        this.styles = this.props.styles;
        this.state = {
            roomName: ''
        };
    }
    joinRoom(roomName) {
        let that = this;
        return function() {
            fetch('http://192.168.2.16:3000/rooms', {
                method: 'PATCH'
            }).then((res) => res.json() ).then(
                (res) => {
                    that.props.roomJoinedCB(roomName, res.data[0].board);
                }
            ).catch((err) => {
                console.log(err);
                alert('Error contacting servers, please try again later.');
            })
        }
    }
    render() {
        return (
            <View style={this.styles.joinFormContainer}>
                <View style={this.styles.joinFormTopSpacer}/>    
                <TextInput
                    style={this.styles.joinFormInput}
                    placeholder="Enter the room name"
                    placeholderTextColor="#777"
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => this.setState(Object.assign({}, this.state, {roomName: text}))}
                />
                <Button style={{flex: 1}} onPress={this.joinRoom(this.state.roomName)} title={'Join'} color='#555'/>
                <View style={this.styles.joinFormBottomSpacer}/>
            </View>
        );
    }
}