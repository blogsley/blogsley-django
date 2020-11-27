import Block from './Block'
import { Page } from '../blocks'
export default class PageSerializer extends Block {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Page(super.deserialize(data))
  }
}
