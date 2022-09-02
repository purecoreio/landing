import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { createMetaManager } from 'vue-meta'

const app = createApp(App)

app.use(router)
  .use(vuetify)
  .use(createMetaManager())
  .mount('#app')