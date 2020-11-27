<template>
  <div class="blocksley-editor">
    <frame ref="frame" :root="true" :block="block"/>
  </div>
</template>

<script>
import BlocksleyStore from '../store'

import Frame from './Frame'

export default {
  mixins: [],
  props: {
    state: {
      default () {
        return {
        }
      }
    }
  },
  components: {
    Frame
  },
  data () {
    return {
      active: null
    }
  },
  computed: {
    block: function () { return this.state.block }
  },
  provide() {
    return {
      state: this.state
    }
  },
  created () {
    if (!this.$store.state.blocksley) {
      this.$store.registerModule('blocksley', BlocksleyStore)
    }
  },
  mounted () {
    this.$refs.frame.edit()
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>

<style lang="stylus">
// @import '../css/blocksley'
.blocksley-editor {
}
</style>
