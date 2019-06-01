import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './defaultStyle';

const noop = () => {};

class CustomHeader extends Component {
    static defaultProps = {
        title:'',
        leftIcon:'',
        rightIcon:'',
        leftIconColor:'#fff',
        rightIconColor:'#fff',
        leftIconClick:noop,
        rightIconClick:noop,
    };

    leftButton = () => {
        const { leftIcon, leftIconClick, leftIconColor } = this.props;
        if (leftIcon !== '') {
            return (
                <TouchableOpacity onPress={leftIconClick} style={styles.iconView} >
                    <Text>TODO</Text>
                </TouchableOpacity>
            );
        }
        return (<View style={styles.iconView}></View>);
    }

    rightButton = () => {
        const { rightIcon, rightIconClick, rightIconColor } = this.props;
        if (rightIcon !== '') {
            return (
                <TouchableOpacity onPress={rightIconClick} style={styles.iconView} >
                    <Text>TODO</Text>
                </TouchableOpacity>
            );
        }
        return (<View style={styles.iconView}></View>);
    }

    titleView = () => {
        const { title } = this.props;
        if (title !== ''){
            return (
                <Text style={styles.textTitle} >{title}</Text>
            );
        }
        return (<View></View>);
    }

    render(){
        return (
            <View style={styles.headerView} >
                {this.leftButton()}
                <View style={styles.textView} >
                    {this.titleView()}
                </View>
                {this.rightButton()}
            </View>
        );
    }
}

export default CustomHeader;