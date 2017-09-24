import React, {Component} from 'react';
import {Button, Text, View, Image} from 'react-native';

class MyButton extends Component {
    constructor(props) {
      super(props);
      this.styles = this.props.styles;
      this.text = this.props.getText(this.props.index);
      this.action = this.props.getAction(this.props.index);
    }
    render() { 
        return (
            <Button
                onPress={this.action}
                title={this.text}
                color='#555'
            />
        );
    }
}

export class MenuView extends Component {
    constructor(props) {
      super(props);
      this.styles = this.props.styles;
      let setContext = this.props.setContext;
      this.state = {
        btnText: ['Start', 'Options', 'Exit'],
        btnOnClicks: [
            () => {
                setContext('LevelSelect');
            },
            () => {
                setContext('Options');
            },
            () => {
                setContext('Exit');
            }
        ]
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
    render() {
      let bg = {
        uri: 'https://static.pexels.com/photos/112854/pexels-photo-112854.jpeg'
      };
      return (
          <Image source={bg}
            style={this.styles.bgImg}>
            <View style={this.styles.menuTopSpacer}/>
            <View style={this.styles.titleImgContainer} >
                <Image source={require('../resources/chess-title.png')}
                    style={this.styles.titleImg}/>
            </View>
            <View style={this.styles.menuButtons}>
                <View style={this.styles.indivButton}>
                    <MyButton
                    index={0}
                    getText={this.getText(this.state.btnText)}
                    getAction={this.getAction(this.state.btnOnClicks)}
                    styles={this.styles}
                    />
                </View>
                <View style={this.styles.indivButton}>
                    <MyButton
                    index={1}
                    getText={this.getText(this.state.btnText)}
                    getAction={this.getAction(this.state.btnOnClicks)}
                    styles={this.styles}
                    />
                </View>
                <View style={this.styles.indivButton}>
                    <MyButton
                    index={2}
                    getText={this.getText(this.state.btnText)}
                    getAction={this.getAction(this.state.btnOnClicks)}
                    styles={this.styles}
                    />
                </View>
            </View>
          </Image>
      );
    }
  }