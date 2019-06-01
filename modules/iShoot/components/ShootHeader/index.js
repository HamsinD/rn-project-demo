import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as shootAction from '../../../../redux/actions/shootAction';
import * as config from '../../../../config';
import styles from './defaultStyle';

const noop = () => {};

class ShootHeader extends Component {
    constructor(props){
        super(props);
    }

    renderIconView(icon,title,describe){
        return(
            <TouchableOpacity onPress={noop} style={styles.itemView}>
                <View style={styles.itemIcon} >
                    <Icon name={icon} size={35} color="#3586fd"/>
                </View>
                <View style={styles.itemTextView}>
                    <Text allowFontScaling={false} style={styles.title}>{title}</Text>
                    <Text allowFontScaling={false} style={styles.describe}>{describe}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    renderTagView(shootTypes){
        let tagViews = [];
        shootTypes.map((type,index) => {
            tagViews.push(
                <View key={index} style={{margin:8}}>
                    <TouchableOpacity onPress={() => {this.tagDidClick(index)}} style={styles.tipView}>
                        <Text allowFontScaling={false} style={styles.tip}>{type.title}</Text>
                    </TouchableOpacity>
                </View>
            );
        });
        // 换一批
        tagViews.push(
            <View key={-1} style={{marginTop:8,marginBottom:8}}>
                <TouchableOpacity onPress={() => {this.tagDidClick(-1)}} style={styles.changeTip}>
                    <Icon name='refresh' size={15} color="#6882a2" style={{marginLeft:5,marginRight:5}} />
                    <Text allowFontScaling={false} style={styles.tip} >换一批</Text>
                </TouchableOpacity>
            </View>
        );
        return tagViews;
    }

    tagDidClick(index){
        console.log('index:'+index+' didClick!');
        if (index == -1){
            const { fetchShootType } = this.props;
            fetchShootType();
        }
    }

    render(){
        const {shootTypes} = this.props;
        return(
            <View style={styles.view}>
                <View style={styles.upView}>
                    {this.renderIconView('home','附近的事','哪的事？')}
                    {this.renderIconView('heart','热门时事','大家都关心什么')}
                </View>
                <View style={{height:config.interval}}></View>
                <View style={{backgroundColor:'#fff'}}>
                    <View style={styles.downView}>
                        {this.renderTagView(shootTypes)}
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    shootTypes: state.shoot.shootTypes,
});

const mapDispatchToProps = dispatch => (
    bindActionCreators(shootAction, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ShootHeader);

// export default ShootHeader;