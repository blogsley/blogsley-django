import { Block } from './Block'

export class Image extends Block {
  constructor (options) {
    super(options)
    // this.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
    /* this.width = 256
    this.height = 256 */

    if (!this.src) {
      this.status = 'create'
    }
  }
  toJSON () {
    return Object.assign(super.toJSON(), {
      src: this.src,
      width: this.width,
      height: this.height
    })
  }
}
Image.type = 'Image'
