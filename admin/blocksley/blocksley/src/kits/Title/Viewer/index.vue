<template>
  <viewer-shell :vu="this">
    <div v-if="this.block.value" v-html="`<h1>${this.block.value}</h1>`"/>
    <div v-else style="opacity:.55"><h1>Your title here ...</h1></div>
  </viewer-shell>
</template>

<script>
import ViewerShell from '../../../components/ViewerShell'
import BlockViewer from '../../../components/BlockViewer'

export default {
  name: 'TitleBlockViewer',
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
