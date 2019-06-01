import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';

const initialState = {
    loading: true,
    isRefreshing: false,
    isLoadMore: false,
    noMore: false,
    loadShootError:null,
    loadTypesError:null,
    shootList: [],
    shootTypes: [],
};

export default function shoot(state=initialState,action) {
    switch (action.type){
        // 拍圈列表
        case types.FETCH_SHOOT_LIST:
            return Object.assign({}, state, {
                isRefreshing: action.isRefreshing,
                loading: action.loading,
                isLoadMore: action.isLoadMore,
                loadShootError:null,
            })
        case types.RECEIVED_SHOOT_LIST:
            return Object.assign({}, state, {
                loading: false,
                isRefreshing: false,
                isLoadMore: false,
                noMore: action.shootList.length <= 0,
                shootList: state.isLoadMore ? [...state.shootList,...action.shootList] : action.shootList,
            })
        case types.FETCH_SHOOT_LIST_ERROR:
            return Object.assign({}, state, {
                isRefreshing: false,
                loading: false,
                isLoadMore: false,
                loadShootError:action.error,
            })

        // 拍圈类型
        case types.FETCH_SHOOT_TYPE:
            return Object.assign({}, state, {
                loadTypesError:null,
            })
        case types.RECEIVED_SHOOT_TYPE:
            return Object.assign({}, state, {
                loading: false,
                shootTypes: action.shootTypes,
            })
        case types.FETCH_SHOOT_TYPE_ERROR:
            return Object.assign({}, state, {
                loadTypesError: action.error,
            })
        default:
            return state;
    }
}

// function shootList(state=[],action) {
//     switch (action.type){
//         case types.RECEIVED_SHOOT_LIST:
//             return (action.datetime == '') ? action.shootList : [...state,...action.shootList];//如果不是第一页则追加数据
//         default:
//             return state;
//     }
// }
//
// function shootTypes(state=[],action) {
//     switch (action.type){
//         case types.RECEIVED_SHOOT_TYPE:
//             return action.shootTypes;
//         default:
//             return state;
//     }
// }
//
// const shootReducer = combineReducers({
//     shootList,
//     shootTypes,
// });
//
// export default shootReducer;