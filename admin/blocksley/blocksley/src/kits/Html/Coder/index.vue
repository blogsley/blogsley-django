<template>
  <div>
  <coder-shell :vu="this" :editor="editor">
    <span slot="title">Html</span>
    <!--
    <main-menu slot="menu" :vu="this" :editor="editor"/>
    <aux-menu slot="aux" :editor="editor" />
    <floating-menu :editor="editor" />
    -->
    <textarea ref="editor"></textarea>
  </coder-shell>
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/htmlmixed/htmlmixed.js'

import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";

import MainMenu from './MainMenu'
import FloatingMenu from './FloatingMenu'
import AuxMenu from './AuxMenu'

import CodeEditor from '../../../components/CodeEditor'
import CoderShell from '../../../components/CoderShell'

export default {
  extends: CodeEditor,
  name: 'HtmlBlockEditor',
  props: ['frame', 'block'],
  inject: ['state'],
  components: {
    CoderShell,
    MainMenu,
    FloatingMenu,
    AuxMenu
  },
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    console.log('cm mounted')
    const editor = this.editor = CodeMirror.fromTextArea(this.$refs.editor, {
      // theme: 'miakai',
      mode: 'htmlmixed',
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      tabSize: 4
    })

    const html = prettier.format(this.block.html, {
      parser: "html",
      plugins: [parserHtml]
    })

    editor.setValue(html)
  },
  methods: {
  }
}
</script>

<style lang="stylus">
</style>
