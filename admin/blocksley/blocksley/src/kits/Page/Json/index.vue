<template>
  <viewer-shell :vu="this">
    <pre><code>{{block.stringify()}}</code></pre>
  </viewer-shell>
</template>

<script>

import BlockViewer from '../../../components/BlockViewer'
import ViewerShell from '../../../components/ViewerShell'

export default {
  name: 'PageJson',
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
