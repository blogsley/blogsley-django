export default {
  mounted () {
    this.$emit('active', this)
  },
  methods: {
    add () {
      this.$emit('action', { type: 'add', block: this.block })
    },
    remove () {
      this.$emit('action', { type: 'remove', block: this.block })
    },
    floatLeft () {
      this.block.class = ['float-left']
    },
    floatRight () {
      this.block.class = ['float-right']
    }
  }
}
