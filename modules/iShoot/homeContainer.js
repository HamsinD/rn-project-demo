import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    View,
    Text,
    RefreshControl,
    ListView,
    ActivityIndicator,
} from 'react-native';
import * as shootAction from '../../redux/actions/shootAction';

import CustomHeader from '../../common/components/CustomHeader/index';
import ShootHeader from './components/ShootHeader';
import ShootCell from './components/ShootCell';

class HomeContainer extends React.Component {
    constructor(props){
        super(props);

        this.dataSource = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 === r2
        });
    }

    componentWillMount(){
        // 发起请求
        const { fetchShootList,fetchShootType } = this.props;
        fetchShootList(true,true,false);
        fetchShootType();
    }

    refreshData(){
        const { fetchShootList,fetchShootType } = this.props;
        fetchShootList(true,false,false);
        fetchShootType();
    }

    renderFooter(){

        const { shoot } = this.props;
        if (shoot.isLoadMore) {
            return (
                <View style={{marginVertical: 20, paddingBottom: 50, alignSelf: 'center'}}>
                    <ActivityIndicator/>
                </View>
            );
        }else if (shoot.noMore){
            return (
                <View style={{ marginVertical: 20, paddingBottom: 50, alignSelf: 'center'}}>
                    <Text style={{color:'rgba(0,0,0,0.8)'}}>全部加载完成</Text>
                </View>
            );
        }else{
            return (
                <View style={{ marginVertical: 20, paddingBottom: 50, alignSelf: 'center'}}>
                    <Text style={{color:'rgba(0,0,0,0.8)'}}></Text>
                </View>
            );
        }
    }

    onEndReached(){
        const {shoot,fetchShootList} = this.props;
        if (!shoot.isLoadMore && shoot.shootList.length > 0 && !shoot.noMore){
            let lastShoot = shoot.shootList[shoot.shootList.length-1];
            fetchShootList(false,false,true,lastShoot.create_date,'up');
        }
    }

    render(){
        const {shoot} = this.props;
        if (shoot.loading){
            return(
                <View style={{flex:1 ,backgroundColor:'#f7f7f7', alignItems:'center', justifyContent:'center',}}>
                    <CustomHeader title='拍圈' />
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}} >
                        <ActivityIndicator size="large" color="#6435c9" />
                    </View>
                </View>
            );
        }

        let refreshControl = <RefreshControl title={shoot.isRefreshing ? '正在刷新...' : '下拉刷新'} onRefresh={this.refreshData.bind(this)} refreshing={shoot.isRefreshing} />;
        return (
            <View style={{flex:1 ,backgroundColor:'#f7f7f7', alignItems:'center', justifyContent:'center',}}>
                <CustomHeader title='拍圈' />
                <ListView
                    dataSource={this.dataSource.cloneWithRows(shoot.shootList)}
                    renderRow={(shootItem) => {return(<ShootCell shoot={shootItem} />)}}
                    renderHeader={() => <ShootHeader />}
                    pageSize={shoot.shootList.count}
                    initialListSize={shoot.shootList.count}
                    enableEmptySections={true}
                    // 刷新相关
                    renderFooter={this.renderFooter.bind(this)}
                    onEndReached={this.onEndReached.bind(this)}
                    refreshControl={refreshControl}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    shoot: state.shoot,
});

const mapDispatchToProps = dispatch => (
    bindActionCreators(shootAction, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

// export default HomeContainer;