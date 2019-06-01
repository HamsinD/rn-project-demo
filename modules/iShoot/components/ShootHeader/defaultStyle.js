import { Dimensions,StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    view: {
        width:screenWidth,
        borderBottomWidth:1,
        borderColor:'#f7f7f7',
    },
    upView:{
        flexDirection:'row',
        alignItems:'stretch',
        height:110,
    },
    itemView:{
        backgroundColor:'#fff',
        flex:1,
        borderRightColor:'#f7f7f7',
        borderRightWidth:1,
        alignItems:'stretch',
        flexDirection:'row',
        alignItems:'center',
    },
    itemIcon:{
        flex:14,
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:20,
        height:40,
    },
    itemTextView:{
        flex:24,
        alignItems:'flex-start',
        height:40,
        justifyContent:'space-between'
    },
    title:{
        fontSize:16,
        color:'#333333',
    },
    describe:{
        fontSize:13,
        color:'#999999',
    },
    downView:{
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flexWrap:'wrap',
        marginLeft:12,
        marginRight:12,
        marginTop:20,
        marginBottom:20,
    },
    tipView:{
        backgroundColor:'#f3faff',
        height:32,
        paddingLeft:12,
        paddingRight:12,
        justifyContent:'center',
        borderRadius:16,
        borderWidth:0.5,
        borderColor:'#bdd8ec',
    },
    changeTip:{
        height:32,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    tip:{
        color:'#6882a2',
        fontSize:13,
    }
});

export default styles;