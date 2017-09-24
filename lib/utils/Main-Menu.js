import React, {Component} from 'react';
import { View } from 'react-native';
import { MyButton } from './My-Button';


export class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.styles = this.props.styles;
        this.getAction = this.props.getAction;
        this.getText = this.props.getText;
    }
    render() {
        return (
            <View style={this.styles.menuButtons}>
                <View style={this.styles.indivButton}>
                    <MyButton
                        index={0}
                        getText={this.getText}
                        getAction={this.getAction}
                        styles={this.styles}/>
                </View>
                <View style={this.styles.indivButton}>
                    <MyButton
                        index={1}
                        getText={this.getText}
                        getAction={this.getAction}
                        styles={this.styles}/>
                </View>
                <View style={this.styles.indivButton}>
                    <MyButton
                        index={2}
                        getText={this.getText}
                        getAction={this.getAction}
                        styles={this.styles}/>
                </View>
            </View>
        );
    }
}