import Block from './Block'
import { Title } from '../blocks'
export default class TitleSerializer extends Block {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Title(data)
  }
}
