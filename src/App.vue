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
export default {
  components: {
    cFooter,
  },
}
</script>