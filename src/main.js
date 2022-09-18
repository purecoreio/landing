import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { createMetaManager } from 'vue-meta'

loadFonts()

const app = createApp(App)
  .use(createMetaManager())
  .use(router)
  .use(vuetify)
  .mount('#app')