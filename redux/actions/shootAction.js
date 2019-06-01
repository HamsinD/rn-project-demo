import * as types from './actionTypes';

// 拍圈列表
export const fetchShootList = (
    // 页面刷新状态参数
    isRefreshing,
    loading,
    isLoadMore,
    // 接口请求参数
    datetime='',
    direction='',
    page_size='10',
    page_no='',
    type_id='',
    screening='all'
) => ({
    type:types.FETCH_SHOOT_LIST,

    isRefreshing,
    loading,
    isLoadMore,

    datetime,
    direction,
    page_size,
    page_no,
    type_id,
    screening
});

export const receivedShootList = (datetime,shootList) => ({// 接收 （是否下拉刷新，获取到的数据）
    type:types.RECEIVED_SHOOT_LIST,
    datetime,
    shootList,
});
export const fetchShootListError = error => ({
    type:types.FETCH_SHOOT_LIST_ERROR,
    error,
});

// 拍圈类型
export const fetchShootType = () => ({
    type:types.FETCH_SHOOT_TYPE,
});
export const receivedShootType = (shootTypes) => ({
    type:types.RECEIVED_SHOOT_TYPE,
    shootTypes,
});
export const fetchShootTypeError = error => ({
    type:types.FETCH_SHOOT_TYPE_ERROR,
    error,
});
