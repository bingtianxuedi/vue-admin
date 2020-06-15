import service from '@/utils/request.js';
/**
 * 获取验证码接口
 * 
 */
export function GetSms(data) {
    service.request({
        method: 'post',
        url: '/getSms',
        data
    })
}

/**
 * 获取角色接口
 * 
 */

/**
 * 登陆
 * 
 */

/**
 * 注册
 * 
 */