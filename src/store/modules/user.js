const getDefaultState = () => {
  return {
    parameters: ''
  }
}

const state = getDefaultState()

const mutations = {
  SET_PARAMS: (state, parameters) => {
    state.parameters = parameters
  }
}

const actions = {}

export default {
  namespaced: true, state, mutations, actions
}

