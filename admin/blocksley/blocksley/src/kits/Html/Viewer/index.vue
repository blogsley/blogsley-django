<template>
  <viewer-shell :vu="this">
    <div v-html="block.html" class="viewer__content"/>
  </viewer-shell>
</template>

<script>

import BlockViewer from '../../../components/BlockViewer'
import ViewerShell from '../../../components/ViewerShell'

export default {
  name: 'PageViewer',
  extends: BlockViewer,
  props: ['frame', 'block'],
  components: {
    ViewerShell
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>

<style lang="stylus">
</style>
