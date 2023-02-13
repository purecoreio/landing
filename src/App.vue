<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? content : `purecore.io — make your gaming community better`
    }}</template>
  </metainfo>
  <v-app>
    <toolbar />
    <v-main>
      <router-view />
    </v-main>
    <c-footer />
  </v-app>
</template>

<script>
import cFooter from "./components/Footer.vue"
import Toolbar from "./components/toolbar/Toolbar.vue"
import { useMeta } from "vue-meta"
export default {
  setup() {
    useMeta({
      title: '',
      htmlAttrs: { lang: 'en', amp: true }
    })
  },
  components: {
    cFooter,
    Toolbar,
  },
}
</script>