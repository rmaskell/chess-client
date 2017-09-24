import React, {Component} from 'react';
import {Button, Text, View, Image} from 'react-native';

export class LevelSelectView extends Component {
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
        uri: 'https://static.pexels.com/photos/220071/pexels-photo-220071.jpeg'
      };
      return (
          <Image source={bg}
            style={this.styles.bgImg}>
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