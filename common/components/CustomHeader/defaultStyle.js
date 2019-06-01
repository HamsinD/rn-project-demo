import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: '#fff',
        height: 65, paddingTop: 20, // iOS
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor:'#e7e7e7',
        borderBottomWidth:0.5,
    },
    iconView: {
        width: 50,
        justifyContent: 'center',
        height: '100%',
        paddingLeft: 15,
        paddingRight: 15,
    },
    textView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 17,
        color: '#333333',
    },
});

export default styles;