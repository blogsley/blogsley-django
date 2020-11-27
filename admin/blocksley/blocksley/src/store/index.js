// TODO:FIXME:  importing kits and blocks here to avoid circular references
import kits from '../kits'
import blocks from '../blocks'

export const fake = {
  kits: kits,
  blocks: blocks
}

const state = {
  blocks: null,
  kits: null,
}

const getters = {
  blocks: (state) => state.blocks,
  kits: (state) => state.kits,
}

const actions = {
}

const mutations = {
}
export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
