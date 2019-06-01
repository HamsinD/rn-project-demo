import React from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class MineContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={{flex:1 ,backgroundColor:'#d8faff', alignItems:'center', justifyContent:'center',}}>
                <Text style={{fontSize:20,}} >Mine</Text>
            </View>
        );
    }
}

export default MineContainer;