import Block from './Block'
export default class ImageRenderer extends Block {
  constructor () {
    super()
  }
  render (block) {
    const html = `
    <img src=${block.src} width=${block.width} height=${block.height} style="object-fit:cover"/>
    `
    return html
  }
}
