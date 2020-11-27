<template>
  <component :is="vu" :frame="this" :block="block" :class="block.class" @action="this.onAction"/>
</template>

<script>

import kits from '../kits'
export default {
  props: {
    root: {
      type: Boolean,
      default: false
    },
    embedded: {
      type: Boolean,
      default: false
    },
    block: {
      default () {
        return {
          type: 'html',
          html: '<h1>Hello</h1>'
        }
      }
    }
  },
  components: {
  },
  data () {
    return {
      parent: null,
      vu: null,
      grippy: false
    }
  },
  computed: {
  },
  mounted () {
    console.log(this.block)
    if (this.block.status === 'create') {
      if (kits[this.block.type].Creator) {
        this.use('Creator')
      } else {
        this.use('Editor')
      }
    } else {
      this.use('Viewer')
    }
  },
  beforeDestroy () {
  },
  methods: {
    use (toolName) {
      console.log('use', this.block.type)
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
    },
    add () {
      this.$emit('action', { type: 'add', block: this.block })
    },
    remove () {
      this.$emit('action', { type: 'remove', block: this.block })
    },
    move (to) {
      this.$emit('action', { type: 'move', block: this.block, to })
    },
    onDragStart () {
      console.log('frame drag started')
    },
    onDragEnd () {
      this.grippy = false
    },
    isEventInElement (event, element) {
      var rect = element.getBoundingClientRect()
      var x = event.clientX
      if (x < rect.left || x >= rect.right) return false
      var y = event.clientY
      if (y < rect.top || y >= rect.bottom) return false
      return true
    }
  }
}
</script>

<style lang="stylus">
</style>
