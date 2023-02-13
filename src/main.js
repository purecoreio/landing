/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import { createMetaManager } from 'vue-meta'

const app = createApp(App)
  .use(createMetaManager())

registerPlugins(app)

app.mount('#app')
