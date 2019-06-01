
export const hostUrl = "http://115.236.51.29:9527"

export const snapshot_api = "/snapshot_api"

export const base_url = hostUrl+snapshot_api;

//export const api_key
/*用户接口*/
//用户获取验证码
export const api_getyzm = "COP_APP_UR_08"
//校验验证码
export const api_checkyzm = "COP_APP_UR_09"
//用户注册
export const api_userregist = "COP_APP_UR_01"
//登录预授权
export const api_loginPre = "COP_APP_UR_02"
//登录
export const api_login = "COP_APP_UR_03"
//重置密码
export const api_resetPsw = "COP_APP_UR_10"
//修改用户信息
export const api_changeuserinfo = "COP_APP_UR_07"
//修改密码
export const api_changePsw = "COP_APP_UR_06"
//用户登出
export const api_logout = "COP_APP_UR_04"
//意见反馈
export const api_feedback = "COP_APP_UR_11"

/*首页接口*/
//获取天气
export const api_weather = "COP_APP_HOME_01"
//首页轮播
export const api_banner = "COP_APP_HOME_02"
//首页应用列表
export const api_userapp = "COP_APP_HOME_03"
//首页应用列表修改
export const api_applistchanged = "COP_APP_HOME_04"

/*随手拍接口*/
//随手拍事件类型列表
export const api_ssptypelist = "COP_APP_PH_01"
//随手拍事件列表
export const api_ssplist = "COP_APP_PH_02"
//随手拍点赞
export const api_like = "COP_APP_PH_04"
//随手拍事件发布
export const api_sspcreate = "COP_APP_PH_03"
//随手拍评论列表
export const api_sspcommentlist = "COP_APP_PH_06"
//随手拍评论发表回复
export const api_sspsendcomment = "COP_APP_PH_07"
//随手拍评论事件删除
export const api_sspdelet = "COP_APP_PH_08"
//随手拍举报
export const api_sspinform = "COP_APP_PH_09"
//文件上传
export const api_upload = "COP_APP_PH_10"
//随手拍详情
export const api_sspdetail = "COP_APP_PH_15"
//获取子评论
export const api_getsubcomment = "COP_APP_PH_16"
//热门事件
export const api_hotshoot = "COP_APP_PH_14"
//拍圈附近事件点
export const api_nearpoint = "COP_APP_PH_12"
//附近时事列表
export const api_nearshoot = "COP_APP_PH_13"
/*搜索*/
//搜索
export const api_search = "COP_APP_ES_01"
//热门搜索
export const api_hotsearch = "COP_APP_ES_02"
/*服务*/
//应用列表
export const api_servicelist = "COP_APP_SERVER_01"
//专题列表
export const api_servicezhuanti = "COP_APP_SERVER_02"
//资讯点赞
export const api_newlike = "COP_APP_INFO_04"
//获取初始赞数
export const api_infozancount = "COP_APP_INFO_03"
