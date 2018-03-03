import { apis } from './config'
import axios from 'axios'
import Config from '@/config/condition'

/**
 * 把json参数对象转换成url中的params拼接参数字符，并返回
 * @param {*json参数对象} data
 */
export function getUrlParamByData (data) {
  let uriParams = ''
  for (var i in data) {
    uriParams += uriParams ? '&' : '?'
    let param = `${i}=${encodeURIComponent(data[i])}`
    uriParams += param
  }
  return uriParams
}

/**
 * 如果是自定义的url属性名则返回对应的属性值，否则返回原url
 * @param {*url或urlName} url
 */
function getUrl (url) {
  if (!url || url.indexOf('/') !== -1) { // 是url时返回
    return url
  } else if (apis[url]) { // 根据url名称返回url值
    return apis[url]
  } else {
    return url
  }
}

/**
 * 统一的连接服务器接口
 * @param {*string} url url或自定义的url属性名 (默认值'')
 * @param {*string} type request类型 (默认值post)
 * @param {*string} subUrl 要拼接到url后面的资源文件名 (默认值'')
 * @param {*json} params json参数 (默认值{})
 * @param {*boolean} stringParams 是否字符化参数（把params参数转成字符串形式拼接到url中）(默认值false)
 */
export function axiosServer ({url = '', type = 'post', hash = '', subUrl = '', params = {}, stringParams = false}) {
  url = getUrl(url) // url转换
  url += subUrl // 拼接子url
  url = Config.isProxyApi ? replaceProxyUrl(url) : url
  console.log('axiosServer request arguments:', arguments)
  if (stringParams) {
    url += getUrlParamByData(params)
  }
  let config = {
    method: type,
    url: url,
    data: params
  }
  if (type === 'get') {
    config.params = params
  }
  return axios(config)
}

// 开发环境使用代理服务器时增加代理配置字符/weApp
export function replaceProxyUrl (url) {
  // return url.replace(/^(\/app)/, '/webPc')
  if (process.env.NODE_ENV === 'production') {
    return url
  } else {
    return '/webApp' + url
  }
}
