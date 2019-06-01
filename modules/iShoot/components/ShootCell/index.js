import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Image,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as config from '../../../../config';

import styles from './defaultStyle';

const noop = () => {};
const screenWidth = Dimensions.get('window').width;

class ShootCell extends Component {

    constructor(props){
        super(props);
    }

    renderImageList(images){
        let imageViews = [];
        if (images === undefined){
            return imageViews;
        }
        // 第三张右边间距为0
        // 四张的时候 2 * 2 排列
        let imageInterval = 5;
        let imageWidth = (screenWidth - config.interval * 2 - imageInterval * 2) / 3;
        if (images.length === 4) {
            imageWidth = imageWidth + 3;
        }
        images.map((image,index) => {
            imageViews.push(
                // require('../../../../static/images/bg_light.png')
                // {uri:image}
                <TouchableOpacity
                    key={image}
                    style={{paddingBottom:5,paddingRight:((((index + 1) % 3) === 0 && images.length !== 4) ? 0 : imageInterval)}}
                    onPress={() => {this.imageDidClick(index)}}>
                    <Image
                        source={{uri:image}}
                        style={{width:imageWidth,height:imageWidth}}/>
                </TouchableOpacity>
            );
        });
        return imageViews;
    }

    imageDidClick(index){
        console.log('image Did Click :' + index);
    }
    // 是否赞过，赞数，评论数，分享数
    renderOperationView(isLike,likeNum,commentNum,shareNum){
        return(
            <View style={styles.rightView}>
                <TouchableOpacity style={styles.operationItem} >
                    <Image style={{height:15,width:15}} resizeMode='contain'
                           source={isLike ? require('../../../../static/images/icon_redh.png') : require( '../../../../static/images/icon_agree.png')}/>
                    <Text allowFontScaling={false} style={styles.num} >{likeNum}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operationItem} >
                    <Image style={{height:15,width:15}} resizeMode='contain'
                           source={require( '../../../../static/images/icon_message.png')}/>
                    <Text allowFontScaling={false} style={styles.num} >{commentNum}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operationItem} >
                    <Image style={{height:15,width:15}} resizeMode='contain'
                           source={require( '../../../../static/images/icon_forward.png')}/>
                    <Text allowFontScaling={false} style={styles.num} >{shareNum}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderLeftView(address,tip){
        let views = [];
        if (address !== '' && address !== undefined){
            views.push(
                <View key='' style={styles.address}>
                    <Image source={require('../../../../static/images/img_location.png')}/>
                    <Text numberOfLines={1} allowFontScaling={false} style={styles.addressText}>{address}</Text>
                </View>
            );
        }
        if (tip !== '' && tip !== undefined){
            views.push(
                <View key={tip} style={{paddingTop:(address !== '') ? 10 : 0}}>
                    <Text allowFontScaling={false} style={styles.tipText}>{tip}</Text>
                </View>
            );
        }
        return views;
    }

    render(){
        const {shoot} = this.props;
        return(
            <View style={styles.view}>
                {/*用户头像、昵称 ...*/}
                <View style={styles.head}>
                    <Image source={{uri:shoot.head_picture}} style={styles.face}/>
                    <View style={styles.userInfo}>
                        <Text allowFontScaling={false} style={styles.userName}>{shoot.create_by}</Text>
                        <Text allowFontScaling={false} style={styles.shootTime}>{shoot.create_date}</Text>
                    </View>
                </View>
                {/*内容*/}
                <View style={styles.content}>
                    <Text allowFontScaling={false} style={styles.contentText} numberOfLines={3}>{shoot.context}</Text>
                </View>
                {/*图片*/}
                <View style={styles.images}>
                    {this.renderImageList(shoot.thumbnail_url)}
                </View>
                {/*底部操作栏*/}
                <View style={styles.bottom}>
                    {/*地址与标签*/}
                    <View style={styles.leftView}>
                        {this.renderLeftView(shoot.nearby_location,shoot.type_name)}
                    </View>
                    {/*点赞等操作*/}
                    <View >
                        {this.renderOperationView(false,shoot.like_count,shoot.comment_count,shoot.forward_count)}
                    </View>
                </View>
            </View>
        );
    }
}

export default ShootCell;