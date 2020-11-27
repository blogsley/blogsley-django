<template>
  <q-page padding>
    <blocksley :state="state"/>
  </q-page>
</template>

<script>
import { BlocksleyState } from '@blocksley/blocksley'
import { Title, List, Image, Paragraph, Heading, Html, Page } from '@blocksley/blocksley/src/blocks'

import { UiMixin, PageMixin } from '@blocksley/demo-core/src/mixins'
import BlockChooser from '@blocksley/demo-core/src/components/BlockChooser'
import ImageChooser from '@blocksley/demo-core/src/components/ImageChooser'

export default {
  name: 'PageIndex',
  mixins: [UiMixin, PageMixin],
  components: {
  },
  data () {
    return {
      title: 'New Page',
      post: {
        title: 'My Post',
        block: '{}',
        body: 'Blogsley rocks!!!'
      },
      state: new BlocksleyState({
        blockChooser: BlockChooser,
        imageChooser: ImageChooser,
        block: new Page({
          children: [
            new Title(),
            new Paragraph({ value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }),
            new Image({ src: 'statics/images/journal-on-desk.jpg', title: 'Journal on Desk' }),
            new Heading({ value: 'Heading' }),
            new Paragraph({ value: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }),
            new Html({ html: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>' }),
            new List({ value: ['Get Milk', 'Get Bread', 'Get Butter'] })
          ]
        })
      })
    }
  },
  created () {
    console.log('demo created')
    console.log(this.$blocksley)
    console.log(this.$page)
    if (!this.$page) {
      this.$page = this.state
    } else {
      this.state = this.$page
    }
    console.log(this.$page)
  }
}
</script>
