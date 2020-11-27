import blockTypes from '../blocks'
import { Page } from '../blocks'
import ImageChooser from '../components/ImageChooser'

export class BlocksleyState {
  constructor (options) {
    this.blockTypes = blockTypes
    this.kits = {}
    this.block = new Page()
    this.imageChooser = ImageChooser
    Object.assign(this, options)
    console.log('blockTypes', this.blockTypes)
  }
  addBlockType (blockType) {
    console.log('addBlockType', blockType)
    this.blockTypes[blockType.type] = blockType
  }
  addKit (kit) {
    this.kits[kit.name] = kit
  }
  findKitByName (name) {
    return this.kits[name]
  }
  createBlock (name) {
    console.log('createBlock', name)
    return new (this.blockTypes[name])()
  }
  findBlockByType (type, _block) {
    var result = null
    var block = _block ? _block : this.block
    if (block.type == type) {
      return block
    } else {
      const children = block.children
      for (var i = 0; i < children.length; i++) {
        result = this.findBlockByType(type, children[i])
        if (result)
          return result
      } 
    }
    return result
  }
}