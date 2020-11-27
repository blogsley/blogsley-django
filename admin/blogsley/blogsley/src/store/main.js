const state = {
  navDrawerOpen: false,
  view: null,
  vu: null,
  page: null,
  navbox: null,
  toolbox: null,
  toolboxProps: null,
  header: null,
  footer: null,
  editor: null,
  edited: null,
  image: null
}

const getters = {
  navDrawerOpen: (state) => state.navDrawerOpen,
  toolDrawerOpen: (state) => state.toolDrawerOpen,
  view: (state) => state.view,
  vu: (state) => state.vu,
  page: (state) => state.page,
  navbox: (state) => state.navbox,
  toolbox: (state) => state.toolbox,
  toolboxProps: (state) => state.toolboxProps,
  header: (state) => state.header,
  footer: (state) => state.footer,
  $editor: (state) => state.editor,
  edited: (state) => state.edited,
  $image: (state) => state.image
}

const actions = {
  setNavDrawerOpen: ({ commit }, value) => {
    commit('navDrawerOpen', value)
  },
  toggleNavDrawer: ({ commit, state }) => {
    commit('navDrawerOpen', !state.navDrawerOpen)
  },
  setToolDrawerOpen: ({ commit }, value) => {
    commit('toolDrawerOpen', value)
  },
  toggleToolDrawer: ({ commit, state }) => {
    commit('toolDrawerOpen', !state.toolDrawerOpen)
  },
  setView: ({ commit }, data) => {
    commit('view', data)
  },
  setVu: ({ commit }, data) => {
    commit('vu', data)
  },
  setPage: ({ commit }, data) => {
    commit('page', data)
  },
  setNavbox: (context, navbox) => {
    context.commit('navbox', navbox)
  },
  setToolbox: (context, toolbox) => {
    context.commit('toolbox', toolbox)
  },
  setToolboxProps: (context, toolbox) => {
    context.commit('toolboxProps', toolbox)
  },
  setHeader: (context, header) => {
    context.commit('header', header)
  },
  setFooter: (context, footer) => {
    context.commit('footer', footer)
  },
  setEditor: (context, editor) => {
    context.commit('editor', editor)
  },
  setEdited: (context, edited) => {
    context.commit('edited', edited)
  },
  setImage: (context, image) => {
    context.commit('image', image)
  }
}

const mutations = {
  navDrawerOpen: (state, data) => {
    state.navDrawerOpen = data
  },
  toolDrawerOpen: (state, data) => {
    state.toolDrawerOpen = data
  },
  view: (state, data) => {
    state.view = data
  },
  vu: (state, data) => {
    state.view = data
  },
  page: (state, data) => {
    state.page = data
  },
  navbox: (state, navbox) => {
    if (state.navbox === navbox) {
      return
    }
    state.navbox = navbox
  },
  toolbox: (state, toolbox) => {
    if (state.toolbox === toolbox) {
      return
    }
    state.toolbox = toolbox
  },
  toolboxProps: (state, toolboxProps) => {
    if (state.toolboxProps === toolboxProps) {
      return
    }
    state.toolboxProps = toolboxProps
  },
  header: (state, header) => {
    state.header = header
  },
  footer: (state, footer) => {
    if (state.footer === footer) {
      return
    }
    state.footer = footer
  },
  editor: (state, editor) => {
    state.editor = editor
  },
  edited: (state, edited) => {
    state.edited = edited
  },
  image: (state, image) => {
    state.image = image
  }
}
export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
