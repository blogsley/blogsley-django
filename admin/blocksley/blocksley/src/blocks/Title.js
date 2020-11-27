import { Block } from './Block'

export class Title extends Block {
  constructor (options) {
    super(options)
    this.html = this.value ? `<h1>${this.value}</h1>` : 'My Title'
  }
}
Title.type = 'Title'
