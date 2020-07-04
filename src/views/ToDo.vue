<template>
  <v-content>
    <v-container style="max-width: 1000px">
      <div style="margin-top:100px" class="pb-10">
        <v-row align="center">
          <v-col cols="12" md="6">
            <h1>Coding this is exhausting</h1>
            <h3>I'm an university student, with a job from 8am to 1pm and with classes from 3:30pm till' 9pm.</h3>
            <h3
              class="mt-4 mb-4"
            >I love coding this, I code this by night, therefore I need something to keep me awake</h3>
            <v-btn
              href="https://www.buymeacoffee.com/happy"
              depressed
              color="primary"
            >Support me on buymeacoffee.com</v-btn>
          </v-col>
          <v-col v-if="$vuetify.breakpoint.mdAndUp">
            <v-img position="right" height="250px" contain src="../assets/coffee.webp" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-content>
</template>

<script>
export default {
  beforeMount() {
    this.$vuetify.theme.dark = true;
  },
  beforeDestroy() {
    this.$vuetify.theme.dark = false;
  }
};
</script>