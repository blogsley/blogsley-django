import { Rich } from './Rich'
import { Editor } from 'tiptap'
import {
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'

import { Heading as HeadingExt} from 'tiptap-extensions'

export class Heading extends Rich {
  constructor (options={}) {
    super(options)
    if (this.value) {
      this.html = '<h2>' + this.value + '</h2>'
    } else {
      this.html = '<h2></h2>'
    }
    this.editor = new Editor({
      content: this.html,
      extensions: [
        new HeadingExt({ levels: [1, 2, 3, 4] }),
        new Bold(),
        new Code(),
        new Italic(),
        new Link(),
        new Strike(),
        new Underline(),
        new History()
      ]
    })
    this.content = this.editor.getJSON()
  }
}
Heading.type = 'Heading'