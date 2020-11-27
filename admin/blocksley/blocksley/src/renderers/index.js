import Page from './Page'
import Html from './Html'
import Title from './Title'
import Paragraph from './Paragraph'
import Heading from './Heading'
import List from './List'
import Image from './Image'
import Quote from './Quote'

const renderers = {
  'Page': new Page(),
  'Html': new Html(),
  'Title': new Title(),
  'Paragraph': new Paragraph(),
  'Heading': new Heading(),
  'List': new List(),
  'Image': new Image(),
  'Quote': new Quote()
}

export function render (block) {
  const renderer = renderers[block.type]
  return renderer.render(block)
}