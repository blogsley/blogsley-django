<template>
  <editor-shell :vu="this" :editor="editor">
    <span slot="title">Paragraph</span>
    <main-menu slot="menu" :vu="this" :editor="editor"/>
    <aux-menu slot="aux" :editor="editor" />
    <editor-content class="editor__content" :editor="editor"/>
  </editor-shell>
</template>

<script>
import MainMenu from './MainMenu'
import AuxMenu from './AuxMenu'
import { EditorContent } from 'tiptap'

import RichEditor from '../../../components/RichEditor'
import EditorShell from '../../../components/EditorShell'

export default {
  name: 'ParagraphEditor',
  extends: RichEditor,
  props: ['frame', 'block'],
  components: {
    EditorShell,
    EditorContent,
    MainMenu,
    AuxMenu
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="stylus">
</style>
