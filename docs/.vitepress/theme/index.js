import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'

export default {
  Layout,
  enhanceApp({ app }) {
    // register global components
    app.component('MyGlobalComponent' /* ... */)
  }
}