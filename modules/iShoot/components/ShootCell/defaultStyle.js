import { Dimensions,StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;
import * as config from '../../../../config';

const userNameFontSize = 16;
const shootTimeFontSize = 12;
const contentFontSize = 16;

const styles = StyleSheet.create({
    view: {
        width:screenWidth,
        backgroundColor:'#fff',
    },
    // 头部（头像、昵称、发布时间）
    head:{
        flexDirection:'row',
        alignItems:'stretch',
        height:80,
        paddingTop:25,
        paddingBottom:16,
        paddingLeft:config.interval,
    },
    face:{
        height:40,
        width:40,
        borderRadius:20
    },
    userInfo:{
        paddingLeft:8,
        paddingTop:5,
        justifyContent:'space-between',
    },
    userName:{
        fontSize:userNameFontSize,
        color:'#333333'
    },
    shootTime:{
        fontSize:shootTimeFontSize,
        color:'#999999'
    },
    // 文字内容
    content:{
        flex:1,
        alignItems:'stretch',
        alignItems:'flex-start',
        paddingLeft:config.interval,
        paddingRight:config.interval,
    },
    contentText:{
        fontSize:contentFontSize,
        color:'#333333',
        lineHeight:25,
    },
    // 九宫格图片
    images:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        paddingTop:12,
        paddingLeft:config.interval,
        paddingRight:config.interval,
    },
    // 底部标签点赞
    bottom:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:9,
        paddingLeft:config.interval,
        paddingRight:config.interval,
        paddingBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#f7f7f7',
    },
    // 左边地址跟标签
    leftView:{
        alignItems:'flex-start',
        flex:4,
    },
        address:{
            backgroundColor:'#f7f7f7',
            flexDirection:'row',
            height:20,
            paddingLeft:10,
            paddingRight:10,
            alignItems:'center',
            justifyContent:'center',
        },
            addressText:{
                fontSize:12,
                color:'#666666',
                paddingLeft:5,
                fontWeight:'200',
            },
        tipText:{
            fontSize:11,
            color:'#5ccd9f',
            paddingLeft:5,
            paddingRight:5,
            paddingTop:2,
            paddingBottom:2,
            borderRadius:2,
            borderWidth:0.5,
            borderColor:'#5ccd9f',
        },
    //右边点赞等操作
    rightView:{
        flexDirection:'row',
        flex:3,
    },
        operationItem:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            width:50,
            height:20,
        },
            num:{
                fontSize:12,
                color:'#666666',
                paddingLeft:4,
            },
});

export default styles;