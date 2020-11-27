import Block from './Block'
import { Paragraph } from '../blocks'
export default class ParagraphSerializer extends Block {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Paragraph(data)
  }
}
