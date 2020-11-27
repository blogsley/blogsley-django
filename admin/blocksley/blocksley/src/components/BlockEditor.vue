<script>
import Vu from './Vu'

export default {
  extends: Vu,
  data () {
    return {
    }
  },
  mounted () {
    this.$emit('active', this)
  },
  methods: {
    floatLeft () {
      this.block.class = ['block-left']
    },
    floatRight () {
      this.block.class = ['block-right']
    }
  }
}
</script>
