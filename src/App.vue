<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <c-footer />
  </v-app>
</template>

<script>
import "./style.css"
import cFooter from "./components/Footer.vue"
import Toolbar from "./components/toolbar/Toolbar.vue"
export default {
  components: {
    cFooter,
    Toolbar,
  },
}
</script>