import Navbox from 'components/DefaultNavbox'
import Footer from 'components/DefaultFooter'

export default {
  mounted () {
    this.setView(this)
    this.setFooter(Footer)
    this.onSwitch()
  },
  beforeRouteUpdate (to, from, next) {
    this.onSwitch()
    next()
  },
  beforeRouteLeave (to, from, next) {
    this.setHeader(null)
    // this.setFooter(null)
    // this.setFooter(Footer)
    next()
  },
  methods: {
    onSwitch () {
      this.setNavbox(Navbox)
      this.setFooter(Footer)
    }
  }
}
