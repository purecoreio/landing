<template>
  <div>
    <v-sheet tile dark color="primary" style="height: 300px">
      <v-container style="max-width: 900px; height: 100%">
        <v-row style="height: 100%" align="center">
          <v-col cols="12" md="6">
            <h1>You don't use it?</h1>
            <h3>
              <u>You don't pay for it</u>
            </h3>
          </v-col>
          <v-col cols="6" v-if="$vuetify.breakpoint.mdAndUp" align="right">
            <v-img contain width="100px" src="../../assets/store/money.svg" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet tile dark color="primary darken-1">
      <v-container style="max-width: 900px; height: 100%">
        <v-row align="center">
          <v-col cols="6" md="9">
            <h4>purecore usage is mostly free, you can check out the api rates anytime on the pricing section</h4>
          </v-col>
          <v-col cols="6" md="3" align="right">
            <v-btn text to="/pricing/reates">check api rates</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <div v-for="(feature,i) in serviceList" :key="feature.name">
      <SaveSection
        :left="(i % 2)>0"
        :feature="feature.feature"
        :description="feature.description"
        :price="feature.price"
        :img="feature.img"
        :bgcolor="(i % 2)>0? 'grey lighten-3':'grey lighten-4'"
      />
    </div>
    <v-sheet class="pt-12" style="overflow:hidden" height="600px" tile dark color="primary">
      <v-container style="max-width: 900px; height: 100%">
        <v-row style="height: 100%" align="center">
          <v-col cols="12">
            <h1 style="font-size: 1000%" v-rellax="{speed:0.8}">$0</h1>
            <h1 v-if="$vuetify.breakpoint.mdAndUp" style="font-size: 800%" v-rellax="{speed:2.2}">Better than anyone else</h1>
            <h1 v-if="$vuetify.breakpoint.smAndDown" style="font-size: 200%" v-rellax="{speed:0.8}">Better than anyone else</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import SaveSection from "./SaveSection";
export default {
  components: {
    SaveSection
  },
  data() {
    return {
      serviceList: [
        {
          feature: "forums",
          name: "enjin",
          price: "$29.99",
          description: "Community managment",
          img: "https://cryptologos.cc/logos/enjin-coin-enj-logo.png?v=001"
        },
        {
          feature: "monetization",
          name: "tebex",
          price: "£24.99",
          description: "Packages and donations",
          img:
            "https://www.webhostingsun.com/wp-content/uploads/2018/04/buycraft-logo.png"
        },
        {
          feature: "analytics",
          name: "minetrends",
          price: "$5",
          description: "Network Analytics",
          img: "https://minetrends.com/images/logo/72dpi.png"
        }
      ]
    };
  }
};
</script>