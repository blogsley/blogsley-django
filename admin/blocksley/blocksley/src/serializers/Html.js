import Block from './Block'
import { Html } from '../blocks'
export default class HtmlSerializer extends Block {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Html(data)
  }
}
