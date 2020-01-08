<template>
  <div>
    <v-content>
      <section
        id="intro"
        style="linear-gradient(45-deg, rgba(240,240,240,1) 20%, rgba(255,255,255,0) 100%);"
      >
        <v-container style="height: 600px" fluid>
          <v-row class="fill-height" align="center" justify="center">
            <v-col class="fill-height" cols="12" xs="12" sm="12" md="10" lg="8" xl="6">
              <v-layout class="fill-height" justify-center align-center>
                <v-row>
                  <v-col cols="12" sm="12" md="6">
                    <h1 style="font-size:300%">PureCore</h1>
                    <h1>The all-in-one managment system</h1>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-alert
                      color="primary"
                      text
                      class="pa-4"
                    >purrecore is still in development, try out the beta now</v-alert>
                    <a href="https://purecore.io/dashboard/">
                      <v-btn color="black" dark>Try it out</v-btn>
                    </a>
                  </v-col>
                </v-row>
              </v-layout>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section
        id="code"
        style="background: linear-gradient(-45deg, rgba(0,0,0,0.05) 20%, rgba(0,0,0,0.1) 100%);"
      >
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" xs="12" sm="12" md="10" lg="8" xl="6">
              <featuressection />
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section
        id="code"
        style="linear-gradient(45-deg, rgba(240,240,240,1) 20%, rgba(255,255,255,0) 100%);"
      >
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" xs="12" sm="12" md="10" lg="8" xl="6">
              <websitesection />
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section
        id="code"
        style="background: linear-gradient(-45deg, rgba(255,138,101,0.2) 20%, rgba(255,255,255,0) 100%);"
      >
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" xs="12" sm="12" md="10" lg="8" xl="6">
              <hostingsection />
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section
        id="code"
        style="linear-gradient(45-deg, rgba(240,240,240,1) 20%, rgba(255,255,255,0) 100%);"
      >
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" xs="12" sm="12" md="10" lg="8" xl="6">
              <punishmentssection />
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section
        id="code"
        style="background: linear-gradient(-45deg, rgba(255,138,101,0.2) 20%, rgba(255,255,255,0) 100%);"
      >
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" xs="12" sm="12" md="10" lg="8" xl="6">
              <analyticssection />
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section
        id="stats"
        style="linear-gradient(45-deg, rgba(240,240,240,1) 20%, rgba(255,255,255,0) 100%);"
      >
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" xs="12" sm="12" md="10" lg="8" xl="6">
              <paymentssection />
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section
        id="code"
        style="background: linear-gradient(45deg, rgba(255,138,101,0.2) 20%, rgba(255,255,255,0) 100%);"
      >
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" xs="12" sm="12" md="10" lg="8" xl="6">
              <codesection />
            </v-col>
          </v-row>
        </v-container>
      </section>
      <v-footer color="primary" class="font-weight-medium">
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>quiquelhappy</strong>
        </v-col>
      </v-footer>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import codesection from "./Code/Code.vue";
import paymentssection from "./Payments/Payments.vue";
import analyticssection from "./Analytics/Analytics.vue";
import punishmentssection from "./Punishments/Punishments.vue";
import hostingsection from "./Hosting/Hosting.vue";
import websitesection from "./Website/Website.vue";
import featuressection from "./Features/Features.vue";
export default {
  name: "home",
  components: {
    codesection: codesection,
    paymentssection: paymentssection,
    analyticssection: analyticssection,
    punishmentssection: punishmentssection,
    hostingsection: hostingsection,
    websitesection: websitesection,
    featuressection: featuressection
  }
};
</script>
