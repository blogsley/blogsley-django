<template>
  <div class="page-editor">
    <editor-shell :vu="this" class="page-editor">
      <draggable v-model="block.children"
        group="blocks"
        handle=".grippy"
        @start="onDragStart()"
        @end="onDragEnd()"
      >
        <frame v-for="child in block.children"
          :key="child.id"
          :block="child"
          class="noselect"
          @action="onAction"
          />
      </draggable>
    </editor-shell>
  </div>
</template>

<script>
import { Add, List, Image, Paragraph, Heading, Html, Quote } from '../../../blocks'

import BlockEditor from '../../../components/BlockEditor'
import Frame from '../../../components/Frame'
import EditorShell from '../../../components/EditorShell'

export default {
  name: 'PageEditor',
  extends: BlockEditor,
  props: ['frame', 'block'],
  inject: ['state'],
  components: {
    Frame,
    EditorShell
  },
  data () {
    return {
    }
  },
  created () {
    console.log('page editor created')
  },
  beforeDestroy () {
    console.log('page editor destroyed')
  },
  methods: {
    onDragStart () {
      console.log('drag start')
    },
    onDragEnd () {
      console.log('drag end')
    },
    onAction (action) {
      var block
      console.log(action)
      switch (action.type) {
        case 'add':
          block = new Add()
          this.block.insertAfter(action.block, block)
          break
        case 'remove':
          this.block.removeChild(action.block)
          break
        case 'move':
          this.block.moveChild(action.block, action.to)
          break
        case 'new':
          block = this.state.createBlock(action.kind)
          block.status = 'create'
          // this.block.replaceChild(action.block, block)
          this.block.insertAfter(action.block, block)
          break
      }
    }
  }
}
</script>

<style lang="stylus">
.page-editor {
  // padding: 16px;
  // padding: 34px 16px 16px 16px;
  // padding: 16px 0px 0px 0px;
  // overflow: hidden;
}
.grippy {
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
</style>
