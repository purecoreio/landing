<template>
  <div>
    <v-row>
      <v-col cols="12" :md="expandResult ? 6 : 12">
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="playerConnections"
              outlined
              label="Average Online Players"
              type="number"
              required
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="playtime"
              outlined
              label="Individual Playtime (minutes)"
              type="number"
              required
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-checkbox v-model="multiServerSetup" outlined label="Multi-server setup" required></v-checkbox>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="playerHops"
              :disabled="!multiServerSetup"
              outlined
              label="Daily Individual Player Hops"
              type="number"
              required
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" v-if="$vuetify.breakpoint.mdAndUp && expandResult">
        <h2 class="mono grey--text">Monthly Connections</h2>
        <i class="grey--text">Assuming players create 2 daily connections on average</i>
        <v-divider />
        <div class="d-inline-flex pa-2">
          <div>
            <h3 class="mono mt-3">{{ playerConnections }}</h3>
            <p>avg. online players</p>
          </div>
        </div>
        <div class="d-inline-flex pa-2">
          <div>
            <h3 class="mono mt-3 grey--text">×</h3>
          </div>
        </div>
        <div class="d-inline-flex pa-2">
          <div>
            <h3 class="mono mt-3">{{ playerHops }}</h3>
            <p>player hops</p>
          </div>
        </div>
        <div class="d-inline-flex pa-2">
          <div>
            <h3 class="mono mt-3 grey--text">×</h3>
          </div>
        </div>
        <div class="d-inline-flex pa-2">
          <div>
            <h3 class="mono mt-3">24 / ( {{playtime}} / 60 )</h3>
            <p>unique player cycle</p>
          </div>
        </div>
        <div class="d-inline-flex pa-2">
          <div>
            <h3 class="mono mt-3 grey--text">×</h3>
          </div>
        </div>
        <div class="d-inline-flex pa-2">
          <div>
            <h3 class="mono mt-3">30</h3>
            <p>days</p>
          </div>
        </div>
        <div class="d-inline-flex pa-2">
          <div>
            <h3 class="mono mt-3 grey--text">×</h3>
          </div>
        </div>
        <div class="d-inline-flex pa-2">
          <div>
            <h3 class="mono mt-3">2</h3>
          </div>
        </div>
        <div class="d-inline-flex pa-2">
          <div>
            <h3 class="mono mt-3 grey--text">×</h3>
          </div>
        </div>
        <div class="d-inline-flex pa-2">
          <div>
            <h3 class="mono mt-3">1.15</h3>
            <p>disconnection multiplier</p>
          </div>
        </div>
        <div class="d-inline-flex pa-2">
          <div>
            <h3 class="mono mt-3 grey--text">=</h3>
          </div>
        </div>
        <div class="d-inline-flex pa-2">
          <div>
            <h3
              class="mono mt-3"
            >{{ Math.floor( playerConnections*(playerHops)*24 / (playtime/60) * 30 * 1.15 * 2).toLocaleString() }}</h3>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-divider />
    <div style="position: relative; width: 100%">
      <div
        v-blur="(getPaidConnections(Math.floor( playerConnections*(playerHops)*24 / (playtime/60) * 30 * 1.15 * 2))*0.00005)>40"
      >
        <v-row>
          <v-col cols="12" md="6" v-if="$vuetify.breakpoint.mdAndUp && expandResult">
            <center>
              <div class="d-inline-flex pa-2">
                <div>
                  <h2
                    class="mono mt-3"
                  >{{ Math.floor( playerConnections*(playerHops)*24 / (playtime/60) * 30 * 1.15 * 2).toLocaleString() }}</h2>
                  <p>monthly connections</p>
                </div>
              </div>
              <div class="d-inline-flex pa-2">
                <div>
                  <h2 class="mono mt-3 grey--text">-</h2>
                </div>
              </div>
              <div class="d-inline-flex pa-2">
                <div>
                  <h2 class="mono mt-3">{{ (200000).toLocaleString() }}</h2>
                  <p>free monthly connections</p>
                </div>
              </div>
              <div class="d-inline-flex pa-2">
                <div>
                  <h2 class="mono mt-3 grey--text">=</h2>
                </div>
              </div>
              <div class="d-inline-flex pa-2">
                <div>
                  <h2
                    class="mono mt-3"
                  >{{ getPaidConnections(Math.floor( playerConnections*(playerHops)*24 / (playtime/60) * 30 * 1.15 * 2)).toLocaleString() }}</h2>
                  <p>paid connections</p>
                </div>
              </div>
            </center>
          </v-col>
          <v-col cols="12" :md="expandResult ? 6 : 12">
            <center>
              <div class="d-inline-flex pa-2">
                <div>
                  <h2
                    class="mono mt-3"
                  >{{ getPaidConnections(Math.floor( playerConnections*(playerHops)*24 / (playtime/60) * 30 * 1.15 * 2)).toLocaleString() }}</h2>
                  <p>paid connections</p>
                </div>
              </div>
              <div class="d-inline-flex pa-2">
                <div>
                  <h2 class="mono mt-3 grey--text">×</h2>
                </div>
              </div>
              <div class="d-inline-flex pa-2">
                <div>
                  <h2 class="mono mt-3">
                    5^10
                    <sup>-5</sup>€
                  </h2>
                  <p>connection rate</p>
                </div>
              </div>
              <div class="d-inline-flex pa-2">
                <div>
                  <h2 class="mono mt-3 grey--text">=</h2>
                </div>
              </div>
              <v-card class="d-inline-flex pl-10 pr-10" outlined>
                <div>
                  <h2
                    class="mono mt-3 primary--text"
                  >{{ (getPaidConnections(Math.floor( playerConnections*(playerHops)*24 / (playtime/60) * 30 * 1.15 * 2))*0.00005).toLocaleString() }}€</h2>
                  <p>due</p>
                </div>
              </v-card>
            </center>
          </v-col>
        </v-row>
      </div>
      <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;">
        <v-row style="height: 100%" justify="center" align="center">
          <v-col>
            <center>
              <v-fade-transition>
                <div
                  v-show="(getPaidConnections(Math.floor( playerConnections*(playerHops)*24 / (playtime/60) * 30 * 1.15 * 2))*0.00005)>40"
                >
                  <v-alert class="d-inline-flex white--text" color="primary">
                    <p>Big communities enjoy large proportional discounts on their monthly bill</p>
                    <v-btn depressed color="primary">Contact Sales</v-btn>
                  </v-alert>
                </div>
              </v-fade-transition>
            </center>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["expand"],
  data() {
    return {
      expandResult: false,
      playerConnections: null,
      multiServerSetup: null,
      playerHops: null,
      playtime: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.playerConnections = 30;
      this.multiServerSetup = true;
      this.playerHops = 3;
      this.playtime = 60;
      if (this.expand != null) {
        this.expandResult = this.expand;
      }
    });
  },
  watch: {
    multiServerSetup: function(val) {
      if (!val) {
        this.playerHops = 1;
      } else {
        this.playerHops = 2;
      }
    },
    expand: function(val) {
      this.expandResult = val;
    }
  },
  methods: {
    getPaidConnections: function(val) {
      if (val - 200000 <= 0) {
        return 0;
      } else {
        return val - 200000;
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap");
.mono {
  font-family: "Roboto Mono", monospace;
}
</style>
