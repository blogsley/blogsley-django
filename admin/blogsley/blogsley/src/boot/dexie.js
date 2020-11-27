import Dexie from 'dexie'
import 'dexie-observable'

export const db = new Dexie('Blogsley')

db.version(1).stores({
  users: '$$id, username, email, firstName, lastName',
  posts: '$$id, title, block, body',
  images: '$$id, title, filename, src',
  blocks: '$$id, title, name, icon'
})

db.on('populate', function () {
  db.blocks.bulkPut([
    {
      name: 'Paragraph',
      title: 'Paragraph',
      icon: 'mdi-format-paragraph'
    },
    {
      name: 'Heading',
      title: 'Heading',
      icon: 'mdi-alpha-h'
    },
    {
      name: 'List',
      title: 'List',
      icon: 'mdi-format-list-bulleted'
    },
    {
      name: 'Image',
      title: 'Image',
      icon: 'mdi-image'
    },
    {
      name: 'Html',
      title: 'HTML',
      icon: 'mdi-language-html5'
    },
    {
      name: 'Quote',
      title: 'Quote',
      icon: 'format_quote'
    }
  ])
})

export default async ({ Vue }) => {
  console.log('booting dexie')
  await db.open()
  Vue.prototype.$dexie = db
}
