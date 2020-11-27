<template>
  <q-card flat>
    <q-card-section>
    <i>New Block</i>
    </q-card-section>
  <q-popup-proxy v-model="showBlockChooser" @escape-key="validate" @hide="validate">
    <component :is="state.blockChooser" :select="insertBlock" />
  </q-popup-proxy>

  <!--
  <q-btn-group flat >

    <q-btn color="primary" flat
      icon="not_interested"
      @click="frame.remove()"
    />

    <q-btn color="primary" flat
      @click="newParagraph"
    >
      <q-icon name="mdi-format-paragraph" />
    </q-btn>
    <q-btn color="primary" flat
      @click="newList"
    >
      <q-icon name="mdi-format-list-bulleted" />
    </q-btn>
    <q-btn color="primary" flat
      @click="newImage"
    >
      <q-icon name="mdi-image" />
    </q-btn>
  </q-btn-group>
  -->
  </q-card>
</template>

<script>

export default {
  name: 'AddBlockViewer',
  mixins: [],
  props: ['frame', 'block'],
  inject: ['state'],
  components: {
  },
  data () {
    return {
      showBlockChooser: true,
      success: false
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    showImagePrompt () {
      this.showImgChooser = true
    },
    insertBlock (block) {
      console.log('insertBlock: ', block.title)
      this.success = true
      this.$emit('action', { type: 'new', kind: block.name, block: this.block })
    },
    validate() {
      if (!this.success) {
        this.frame.remove()
      }
    }
  }
}
</script>

<style lang="stylus">
</style>
