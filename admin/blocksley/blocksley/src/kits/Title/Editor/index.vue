<template>
  <div>
  <editor-shell :vu="this">
    <span slot="title">Title</span>
    <q-input
      v-model="block.value"
      :autofocus="true"
      borderless
      placeholder="Your title here ..."
      input-class="title"/>
  </editor-shell>
  </div>
</template>

<script>
import BlockEditor from '../../../components/BlockEditor'
import EditorShell from '../../../components/EditorShell'

export default {
  name: 'TitleBlockEditor',
  extends: BlockEditor,
  props: ['frame', 'block'],
  components: {
    EditorShell
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  beforeDestroy () {
    this.block.html = `<h1>${this.block.value}</h1>`
  },
  methods: {
  }
}
</script>

<style lang="stylus">
.title {
  text-rendering: optimizeLegibility;
  font-weight: bold;
  font-size: 2rem;
}
</style>
