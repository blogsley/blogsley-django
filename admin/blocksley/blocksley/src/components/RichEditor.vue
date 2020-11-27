<script>
import BlockEditor from './BlockEditor'

export default {
  extends: BlockEditor,
  computed: {
    editor () { return this.block.editor }
  },
  mounted () {
  },
  beforeDestroy () {
    console.log('rich editor destroyed')
    console.log(this)
    this.block.html = this.editor.getHTML()
    this.block.content = this.editor.getJSON()
    console.log(this.block)
    // this.editor.destroy()
  }
}
</script>
