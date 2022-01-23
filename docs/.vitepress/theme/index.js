import Layout from './Layout.vue'

import "../../../src/styles/normalize.css"
import "../../../src/styles/style.scss"

export default {
  Layout,
  enhanceApp({ app }) {
    // register global components
    app.component('MyGlobalComponent' /* ... */)
  }
}