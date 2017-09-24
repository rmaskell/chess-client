import React, {Component} from 'react';
import { Button } from 'react-native';

export class MyButton extends Component {
    constructor(props) {
        super(props);
        this.styles = this.props.styles;
        this.text = this
            .props
            .getText(this.props.index);
        this.action = this
            .props
            .getAction(this.props.index);
    }
    render() {
        return (<Button onPress={this.action} title={this.text} color='#555'/>);
    }
}