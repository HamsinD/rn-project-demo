import { all, put, takeEvery, takeLatest, call} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import * as Request from '../../utils/networkUtil';
import { objectToFormBody } from '../../utils/objectUtil';
import * as API from '../../common/API';
import * as actions from '../actions/shootAction';
import {fetchShootTypeError} from "../actions/shootAction";

// 拍圈列表
export function* fetchShootList(action) {
    console.log('Fetch Shoot List !');
    try{
        // 请求数据
        // 处理数据
        // 发送获取成功Action
        const params = {
            datetime: action.datetime,
            direction: action.direction,
            page_size: action.page_size,
            page_no: action.page_no,
            type_id: action.type_id,
            screening: action.screening,
        };
        const formData = objectToFormBody(params);
        console.log("params:"+formData);
        let jsonData = yield call(Request.post,API.api_ssplist,formData);
        // console.log("jsonResult:"+jsonData);
        if (jsonData.code === '200') {
            let data = jsonData.data;
            let ph_list = data.ph_list;
            yield put(actions.receivedShootList(action.datetime, ph_list));
        }else{
            yield put(actions.fetchShootListError(jsonData.msg));
        }
    }catch (error){
        console.log("fetchShootList error:"+error);
        yield put(actions.fetchShootListError(error));
    }
}

export function* watchFetchShootList() {
    yield takeLatest(types.FETCH_SHOOT_LIST,fetchShootList);
}
// 拍圈类型
export function* fetchShootType() {
    console.log('Fetch Shoot Type !');
    try{
        let jsonData = yield call(Request.post,API.api_ssptypelist);
        if (jsonData.code === '200'){
            let data = jsonData.data;
            let type_list = data.type_list;
            yield put(actions.receivedShootType(type_list))
        }else{
            yield put(actions.fetchShootTypeError(jsonData.msg));
        }
    }catch (error){
        yield put(actions.fetchShootTypeError(error));
    }
}

export function* watchFetchShootType() {
    yield takeEvery(types.FETCH_SHOOT_TYPE,fetchShootType);
}

export default function* shootSaga() {
    yield all([
        watchFetchShootList(),
        watchFetchShootType(),
    ]);
}
