import { Block } from './Block'

export class Rich extends Block {
  constructor (options) {
    super(options)
    this.content = null
    this.editor = null
  }
  toJSON () {
    return Object.assign(super.toJSON(), {
      content: this.content,
    })
  }
  freeze () {
    super.freeze()
    console.log('freezing')
    this.content = this.editor.getJSON()
    this.html = this.editor.getHTML()
  }
}
Rich.type = 'Rich'
