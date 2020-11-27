import Block from './Block'
import { List } from '../blocks'
export default class ListSerializer extends Block {
  constructor () {
    super()
  }
  deserialize (data) {
    return new List(data)
  }
}
