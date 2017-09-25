import React, {Component} from 'react';
import {
    Animated,
    Button,
    Text,
    View,
    Image,
    PanResponder,
    Dimensions
} from 'react-native';
import Gestures from 'react-native-easy-gestures';
const imgSrcs = {
    1: require('./../resources/rookB.png'),
    2: require('./../resources/knightB.png'),
    3: require('./../resources/bishopB.png'),
    4: require('./../resources/queenB.png'),
    5: require('./../resources/kingB.png'),
    6: require('./../resources/pawnB.png'),
    11: require('./../resources/rookW.png'),
    12: require('./../resources/knightW.png'),
    13: require('./../resources/bishopW.png'),
    14: require('./../resources/queenW.png'),
    15: require('./../resources/kingW.png'),
    16: require('./../resources/pawnW.png')
};

function Square(props) {
    const style = props.white
        ? props.styles.boardSquareWhite
        : props.styles.boardSquareBlack
    if (props.value === 0) {
        return (
            <View style={style}></View>
        );
    } else {
        return (
            // <View style={style}>
            //TODO: Fuck the drag & drop, do select source & dest with buttons and highlighting.
                <Gestures
                    style={props.styles.gestureSquare}
                    rotatable={false}
                    scalable={false}
                    onChange={(event, styles) => {
                    console.log(styles);
                }}>

                    <Image source={imgSrcs[props.value]}
                        style={props.styles.piece}/>

                    {/* <Animated.Image {...props.that.panResponder.panHandlers} //Step 1
                        style={[
                        props
                            .that
                            .state
                            .pan
                            .getLayout(),
                        props.styles.bgImg
                    ]} //Step 2
                        source={imgSrcs[props.value]}></Animated.Image> */}
                </Gestures>
            // {/* </View> */}
        );
    }
}
export class RoomView extends Component {
    constructor(props) {
        super(props);
        this.styles = this.props.styles;
        this.state = {
            pan: new Animated.ValueXY() //Step 1
        };
        this.panResponder = PanResponder.create({ //Step 2
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([
                null, { //Step 3
                    dx: this.state.pan.x,
                    dy: this.state.pan.y
                }
            ]),
            onPanResponderRelease: (e, gesture) => {} //Step 4
        });
    }
    renderSquare(row, column, color) {
        const white = color === 'w'
            ? true
            : false;
        return (<Square
            styles={this.styles}
            white={white}
            that={this}
            value={this.props.boardState[row][column]}/>);
    }
    render() {
        return (
            <View style={this.styles.roomContainer}>
                <View style={this.styles.roomTopSpacer}/>
                <View style={this.styles.roomContent}>
                    <View style={this.styles.boardRow}>
                        {this.renderSquare(0, 0, 'w')}
                        {this.renderSquare(0, 1)}
                        {this.renderSquare(0, 2, 'w')}
                        {this.renderSquare(0, 3)}
                        {this.renderSquare(0, 4, 'w')}
                        {this.renderSquare(0, 5)}
                        {this.renderSquare(0, 6, 'w')}
                        {this.renderSquare(0, 7)}
                    </View>
                    <View style={this.styles.boardRow}>
                        {this.renderSquare(1, 0)}
                        {this.renderSquare(1, 1, 'w')}
                        {this.renderSquare(1, 2)}
                        {this.renderSquare(1, 3, 'w')}
                        {this.renderSquare(1, 4)}
                        {this.renderSquare(1, 5, 'w')}
                        {this.renderSquare(1, 6)}
                        {this.renderSquare(1, 7, 'w')}
                    </View>
                    <View style={this.styles.boardRow}>
                        {this.renderSquare(2, 0, 'w')}
                        {this.renderSquare(2, 1)}
                        {this.renderSquare(2, 2, 'w')}
                        {this.renderSquare(2, 3)}
                        {this.renderSquare(2, 4, 'w')}
                        {this.renderSquare(2, 5)}
                        {this.renderSquare(2, 6, 'w')}
                        {this.renderSquare(2, 7)}
                    </View>
                    <View style={this.styles.boardRow}>
                        {this.renderSquare(3, 0)}
                        {this.renderSquare(3, 1, 'w')}
                        {this.renderSquare(3, 2)}
                        {this.renderSquare(3, 3, 'w')}
                        {this.renderSquare(3, 4)}
                        {this.renderSquare(3, 5, 'w')}
                        {this.renderSquare(3, 6)}
                        {this.renderSquare(3, 7, 'w')}
                    </View>
                    <View style={this.styles.boardRow}>
                        {this.renderSquare(4, 0, 'w')}
                        {this.renderSquare(4, 1)}
                        {this.renderSquare(4, 2, 'w')}
                        {this.renderSquare(4, 3)}
                        {this.renderSquare(4, 4, 'w')}
                        {this.renderSquare(4, 5)}
                        {this.renderSquare(4, 6, 'w')}
                        {this.renderSquare(4, 7)}
                    </View>
                    <View style={this.styles.boardRow}>
                        {this.renderSquare(5, 0)}
                        {this.renderSquare(5, 1, 'w')}
                        {this.renderSquare(5, 2)}
                        {this.renderSquare(5, 3, 'w')}
                        {this.renderSquare(5, 4)}
                        {this.renderSquare(5, 5, 'w')}
                        {this.renderSquare(5, 6)}
                        {this.renderSquare(5, 7, 'w')}
                    </View>
                    <View style={this.styles.boardRow}>
                        {this.renderSquare(6, 0, 'w')}
                        {this.renderSquare(6, 1)}
                        {this.renderSquare(6, 2, 'w')}
                        {this.renderSquare(6, 3)}
                        {this.renderSquare(6, 4, 'w')}
                        {this.renderSquare(6, 5)}
                        {this.renderSquare(6, 6, 'w')}
                        {this.renderSquare(6, 7)}
                    </View>
                    <View style={this.styles.boardRow}>
                        {this.renderSquare(7, 0)}
                        {this.renderSquare(7, 1, 'w')}
                        {this.renderSquare(7, 2)}
                        {this.renderSquare(7, 3, 'w')}
                        {this.renderSquare(7, 4)}
                        {this.renderSquare(7, 5, 'w')}
                        {this.renderSquare(7, 6)}
                        {this.renderSquare(7, 7, 'w')}
                    </View>
                </View>
                <View style={this.styles.roomBottomSpacer}/>
            </View>
        );
    }
}