<template>
  <viewer-shell :vu="this">
    <img :src="block.src" :width="this.block.width" :height="this.block.height" style="object-fit:cover"/>
  </viewer-shell>
</template>

<script>
import BlockViewer from '../../../components/BlockViewer'
import ViewerShell from '../../../components/ViewerShell'

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
