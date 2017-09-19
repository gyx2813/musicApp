/**
 * Created by Administrator on 2017/9/18 0018.
 */
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getTopList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  const data = Object.assign({}, commonParams, {
    g_tk: 221337206,
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })
  return jsonp(url, data, options)
}

export function getMusicList(topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  const data = Object.assign({}, commonParams, {
    topid,
    g_tk: 5381,
    uin: 0,
    needNewCode: 1,
    platform: 'h5',
    page: 'detail',
    tpl: 3,
    type: 'top'
  })
  return jsonp(url, data, options)
}
