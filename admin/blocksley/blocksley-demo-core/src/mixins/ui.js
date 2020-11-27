import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    navDrawerOpen: {
      get: function () {
        return this.$store.getters.navDrawerOpen
      },
      set: function (val) {
        this.$store.commit('navDrawerOpen', val)
      }
    },
    toolDrawerOpen: {
      get: function () {
        return this.$store.getters.toolDrawerOpen
      },
      set: function (val) {
        this.$store.commit('toolDrawerOpen', val)
      }
    },
    ...mapGetters([
      'navbox',
      'toolbox',
      '$editor',
      'edited',
      '$image'
    ])
  },
  methods: {
    ...mapActions([
      'toggleNavDrawer',
      'setNavDrawerOpen',
      'toggleToolDrawer',
      'setToolDrawerOpen',
      'setNavbox',
      'setToolbox',
      'setEditor',
      'setEdited',
      'setImage'
    ])
  }
}
