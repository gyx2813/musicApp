/**
 * Created by Administrator on 2017/9/1 0001.
 */
import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}
export default mutations
