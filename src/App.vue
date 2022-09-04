<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <c-footer />
  </v-app>
</template>

<script>
import "./assets/styles/main.css"
import cFooter from "./components/Footer.vue"
export default {
  components: {
    cFooter,
  },
}
</script>