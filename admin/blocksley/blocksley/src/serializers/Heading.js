import Block from './Block'
import { Heading } from '../blocks'
export default class HeadingSerializer extends Block {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Heading(data)
  }
}
