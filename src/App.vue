<template>
  <v-app>
    <v-main>
      <toolbar />
      <router-view />
    </v-main>
    <c-footer />
  </v-app>
</template>

<script>
import "./assets/styles/main.css"
import cFooter from "./components/Footer.vue"
import Toolbar from "./components/Toolbar.vue"
export default {
  components: {
    cFooter,
    Toolbar
  }
}
</script>