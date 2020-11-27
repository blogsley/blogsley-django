import { BlocksleyState } from '../state'
import blockTypes from '../blocks'
console.log('blockTypes', blockTypes)
import kits from '../kits'
import { Title, List, Image, Paragraph, Heading, Html, Page } from '../blocks'

export function createDefaultState () {

}

export function createDemoState (options) {
  Object.assign(options, {
    blockTypes,
    kits,
    block: new Page({
      children: [
        new Title(),
        new Paragraph({ value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }),
        new Image({ src: 'statics/images/journal-on-desk.jpg', title: 'Journal on Desk' }),
        new Heading({ value: 'Heading' }),
        new Paragraph({ value: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }),
        new Html({ html: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>' }),
        new List({ value: ['Get Milk', 'Get Bread', 'Get Butter'] })
      ]
    }) 
  })
  const state = new BlocksleyState(options)
  return state
}