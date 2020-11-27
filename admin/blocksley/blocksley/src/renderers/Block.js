import { render } from './'

export default class Block {
  constructor () {
  }
  render (block) {
    var html = block.html
    // console.log('rendering children')
    const children = block.children
    if (children && Array.isArray(children)) {
      for ( var i = 0; i < children.length; i++) {
        html += render(children[i])
        // console.log(child)
      } 
    }
    return html
  }
}
