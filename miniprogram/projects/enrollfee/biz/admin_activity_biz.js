/**
 * Notes: 报名后台管理模块业务逻辑
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2022-06-24 07:48:00 
 */

const BaseBiz = require('../../../comm/biz/base_biz.js');
const ActivityBiz = require('./activity_biz.js');
const projectSetting = require('../public/project_setting.js');
const formSetHelper = require('../../../cmpts/public/form/form_set_helper.js');

class AdminActivityBiz extends BaseBiz {
    static initFormData(id = '') {
        let cateIdOptions = ActivityBiz.getCateList();

        return {
            id,

            cateIdOptions,
            fields: projectSetting.ACTIVITY_FIELDS,

            formTitle: '',
            formCateId: (cateIdOptions.length == 1) ? cateIdOptions[0].val : '',
            formOrder: 9999,

            formMaxCnt: 50,
            formStart: '',
            formEnd: '', 

            formMethod: 1,
            formFee: '', 

            formCheckSet: 0,
            formCancelSet: 2, 

            formForms: [],

            formJoinForms: formSetHelper.initFields(projectSetting.ACTIVITY_JOIN_FIELDS),
        }

    } 
    
}

AdminActivityBiz.CHECK_FORM = {
    title: 'formTitle|must|string|min:2|max:50|name=标题',
    cateId: 'formCateId|must|id|name=分类',
    order: 'formOrder|must|int|min:0|max:9999|name=排序号',

    maxCnt: 'formMaxCnt|must|int|name=人数上限',
    start: 'formStart|must|string|name=报名开始时间',
    end: 'formEnd|must|string|name=报名截止时间', 

    method: 'formMethod|must|int|name=缴费方式',
    fee: 'formFee|must|money|name=缴费金额',
 
    checkSet: 'formCheckSet|must|int|name=审核设置',
    cancelSet: 'formCancelSet|must|int|name=取消设置', 
    forms: 'formForms|array',
    joinForms: 'formJoinForms|must|array|name=用户报名资料设置',
};

module.exports = AdminActivityBiz;