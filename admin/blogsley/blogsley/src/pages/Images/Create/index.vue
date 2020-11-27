<template>
  <q-page padding>
    <!-- <ImageUploader/> -->
    <component :is="uploader"/>
  </q-page>
</template>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Navbox from './Navbox'
import ImageUploader from 'components/ImageUploader'
import StandAloneImageUploader from 'components/StandAloneImageUploader'

export default {
  name: 'CreateImage',
  mixins: [UiMixin, PageMixin],
  props: [],
  components: {
    // ImageUploader
  },
  data () {
    return {
      title: 'Add Images',
      uploader: process.env.STANDALONE ? StandAloneImageUploader : ImageUploader
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
    })
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  methods: {
    onSwitch () {
      this.setView(this)
      this.setNavbox(Navbox)
    }
  }
}
</script>
