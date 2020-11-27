import Block from './Block'
import { Image } from '../blocks'
export default class ImageSerializer extends Block {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Image(data)
  }
}
