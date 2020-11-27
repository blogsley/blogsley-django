<template>
  <q-page padding class="content-page">
    <div style="overflow: auto">
      <pre><code>{{block.stringify()}}</code></pre>
    </div>
  </q-page>
</template>

<script>
import gql from 'graphql-tag'
const directives = process.env.STANDALONE ? '@client' : ''

import { BlocksleyState, deserialize } from '@blocksley/blocksley'

import { UiMixin, PageMixin } from 'src/mixins'
import Navbox from './Navbox'
import ImageChooser from 'components/ImageChooser'

export default {
  mixins: [UiMixin, PageMixin],
  props: ['id'],
  components: {
  },
  data () {
    return {
      title: 'Page JSON',
      postId: this.$route.params.id,
      state: new BlocksleyState({
        imageChooser: ImageChooser
      })
    }
  },
  computed: {
    block: function () { return this.state.block }
  },
  apollo: {
    post: {
      query: gql`
        query postQuery($id: ID!) {
          post(id: $id) ${directives} {
            id
            title
            block
            body
          }
        }`,
      variables () {
        return {
          id: this.postId
        }
      },
      update (data) {
        const post = data.post
        console.log(post)
        this.state.block = deserialize(JSON.parse(post.block))
        return post
      }
      // fetchPolicy: 'network-only'
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    onSwitch () {
      this.setView(this)
      this.setNavbox(Navbox)
    }
  }
}
</script>
