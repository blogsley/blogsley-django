import iam from 'src/iam'
import HeaderShell from 'components/HeaderShell'
import FooterShell from 'components/FooterShell'

export default async ({ app, store, Vue }) => {
  // Vue.prototype.$iam = new IAM(store)
  Vue.use(iam, { store })
  Vue.component('header-shell', HeaderShell)
  Vue.component('footer-shell', FooterShell)
}
