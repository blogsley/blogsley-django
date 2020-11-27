import kits from '../kits'

export default {
  template: `
  <div>
    <component v-bind:is="vu" :frame="this" :block="block" :class="block.class" @action="this.onAction"/>
  </div>`,
  props: ['node', 'updateAttrs', 'view', 'getPos'],
  data () {
    return {
      vu: null,
      isActive: false,
      // block: this.node.type.spec.createBlock(this.node)
      block: this.node.block ? this.node.block : this.node.block = this.node.type.spec.createBlock(this.node)
    }
  },
  components: {
  },
  computed: {
  },
  mounted () {
    console.log('e-frame mounted')
    console.log(this.block)
    console.log(this.node)
    console.log(this.view)
    if (this.block.status === 'create') {
      if (kits[this.block.type].Creator) {
        this.vu = kits[this.block.type].Creator
      } else {
        console.log(this.block.type)
        this.block.status = 'normal'
        this.vu = kits[this.block.type].Editor
      }
    } else {
      this.vu = kits[this.block.type].Viewer
    }
  },
  beforeDestroy () {
    console.log('e-frame destroyed')
    console.log(this.block)
    console.log(this.node)
  },
  methods: {
    use (toolName) {
      this.vu = kits[this.block.type][toolName]
    },
    onAction (action) {
      this.$emit('action', action)
    },
    edit () {
      this.use('Editor')
    },
    browse () {
      this.use('Viewer')
    }
  }
}
