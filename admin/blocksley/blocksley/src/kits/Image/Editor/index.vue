<template>
  <editor-shell ref="shell" :vu="this">
    <span slot="title">Image</span>
    <main-menu slot="menu" :vu="this"/>
    <vue-draggable-resizable
      :draggable="false"
      @resizing="onResizing"
      :w="this.block.width"
      :h="this.block.height"
      :z="1000"
      :handles="['bm', 'mr', 'br']"
      class="resizer"
    />
    <img ref="image" :src="block.src" :width="this.block.width" :height="this.block.height" style="object-fit:cover;"/>
  </editor-shell>
</template>

<script>
import { render } from '../../../renderers'

import BlockEditor from '../../../components/BlockEditor'
import EditorShell from '../../../components/EditorShell'
import MainMenu from './MainMenu'
import Toolbox from './Toolbox'

export default {
  name: 'ImageBlockEditor',
  extends: BlockEditor,
  props: ['frame', 'block'],
  components: {
    EditorShell,
    MainMenu,
    Toolbox
  },
  data () {
    return {
    }
  },
  mounted () {
    this.setToolboxProps({vu: this, editor: this.editor})
    this.setToolbox(Toolbox)
  },
  beforeDestroy () {
    console.log('image editor destroyed')
    console.log(this)
    this.block.html = render(this.block)
    console.log(this.block)
  },
  methods: {
    onResizing (left, top, width, height) {
      this.block.width = width
      this.block.height = height
    }
  }
}
</script>

<style lang="stylus">
.resizer {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
