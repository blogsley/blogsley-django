import Page from './Page'
import Html from './Html'
import Title from './Title'
import Paragraph from './Paragraph'
import Heading from './Heading'
import List from './List'
import Image from './Image'
import Quote from './Quote'

const serializers = {
  'Page': new Page(),
  'Html': new Html(),
  'Title': new Title(),
  'Paragraph': new Paragraph(),
  'Heading': new Heading(),
  'List': new List(),
  'Image': new Image(),
  'Quote': new Quote()
}

export function serialize (block) {
  console.log('serializing')
  return JSON.stringify(block)
  // const serializer = serializers[block.type]
  // return serializer.serialize(block)
}

export function deserialize (data) {
  const serializer = serializers[data.type]
  return serializer.deserialize(data)
}