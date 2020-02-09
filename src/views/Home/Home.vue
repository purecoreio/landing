<template>
  <div>
    <v-sheet>
      <v-container style="max-width: 900px; padding-top: 150px; padding-bottom: 150px">
        <v-row no-gutters>
          <v-col cols="12">
            <h1>purecore</h1>
            <h3>the global data processor for the gaming industry</h3>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet color="primary" dark class="pa-5" tile>
      <v-container style="max-width: 900px">
        <div>
          <h3 style="text-align: justify">
            purecore is a global data processor for the gaming industry. It helps keeping all the data from
            a lot of gaming communities organized. Our panel allows the community managers to monetize their
            communities as well as offer a lot of automated features thanks to big data
          </h3>
        </div>
        <v-divider class="mt-5 mb-5" />
        <v-list-item class="pa-0">
          <v-list-item-content>
            <v-list-item-title>
              <h2>purecore it's (usually) free!</h2>
            </v-list-item-title>
            <v-list-item-subtitle>we know, it's hard to belive</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn text>Check Api Rates</v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-container>
    </v-sheet>
    <v-sheet color="primary" dark tile>
      <div style="height: 400px; position: relative">
        <p
          class="primary--text text--lighten-2"
          style="position: absolute; width: 100%; bottom: 0px; left: 0px; text-align: center"
        >purecore is not affiliated with Apple, Stripe or PayPal</p>
        <apexchart
          style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px"
          type="line"
          height="400"
          :options="options"
          :series="series"
        ></apexchart>
        <div style="postion: absolute; width: 100%; height: 100%; top: 0px; left: 0px">
          <v-row style="height: 100%" align="center">
            <v-col cols="12">
              <center>
                <h1>Process unlimited payments</h1>
                <h3>Supporting your favourite platforms</h3>
                <v-container style="transform: translateY(-10px)">
                  <v-img
                    width="60px"
                    contain
                    src="../../assets/apple-pay.svg"
                    style="display: inline-block"
                  />
                  <v-img
                    width="80px"
                    contain
                    src="../../assets/stripe.svg"
                    style="display: inline-block; transform: translateY(6px)"
                  />
                  <v-img
                    width="80px"
                    contain
                    src="../../assets/paypal.svg"
                    style="display: inline-block;"
                  />
                </v-container>
              </center>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-sheet>
    <v-sheet color="grey lighten-4" class="pa-5 pt-12 pb-12" tile>
      <v-container style="max-width: 900px">
        <div>
          <h2 style="text-align: justify" class="mb-6">
            <center>works with your favourite technologies</center>
          </h2>
          <center>
            <v-img
              width="50px"
              contain
              src="../../assets/docker.svg"
              style="display: inline-block;"
            />
            <v-img
              width="50px"
              contain
              class="ml-5"
              src="../../assets/vue.svg"
              style="display: inline-block;"
            />
          </center>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet color="grey lighten-3" class="pa-5 pt-12 pb-12" tile>
      <v-container style="max-width: 900px">
        <div>
          <center>
            <h2>is your community already hosted?</h2>
            <p
              class="mb-6"
            >You can self-host your game servers on your machines or migrate them to purecore anytime</p>
            <v-btn depressed color="primary">Virtualize using docker + supervisor</v-btn>
          </center>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet color="primary" class="pt-5 pb-5" dark tile>
      <v-row s align="center">
        <v-col cols="12">
          <center>
            <h1 style="font-size: 400%">
              <i>FAAAST!</i>
            </h1>
            <h3>
              New game version?
              <u>Updated</u>
            </h3>
            <p
              style="width: 300px"
            >Unlike any of the platforms you use, purecore self-updates to fit your game version. It is updated daily, not yearly</p>
          </center>
        </v-col>
      </v-row>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="pa-5 pt-12 pb-12" tile>
      <v-container style="max-width: 900px">
        <div
          style="position: relative"
          @mouseover="hoverAnalytics = true"
          @mouseleave="hoverAnalytics = false"
        >
          <h2 style="text-align: justify" class="mb-6">
            <center>analyze anything</center>
          </h2>
          <v-row v-blur="hoverAnalytics">
            <v-col cols="6" sm="4">
              <v-card>
                <v-responsive :aspect-ratio="1">
                  <apexchart
                    style="width: 100%; height: 100%; top: 0px; left: 0px"
                    type="line"
                    height="100%"
                    :options="optionsSmall"
                    :series="seriesLine"
                  ></apexchart>
                </v-responsive>
              </v-card>
            </v-col>
            <v-col cols="6" sm="4">
              <v-card>
                <v-responsive :aspect-ratio="1">
                  <apexchart
                    style="width: 100%; height: 100%; top: 0px; left: 0px"
                    type="area"
                    height="100%"
                    :options="optionsSmall"
                    :series="seriesArea"
                  ></apexchart>
                </v-responsive>
              </v-card>
            </v-col>
            <v-col cols="6" sm="4">
              <v-card>
                <v-responsive :aspect-ratio="1">
                  <apexchart
                    style="width: 100%; height: 100%; top: 0px; left: 0px"
                    type="heatmap"
                    height="100%"
                    :options="optionsSmall"
                    :series="seriesHeat"
                  ></apexchart>
                </v-responsive>
              </v-card>
            </v-col>
            <v-col cols="6" sm="4">
              <v-card>
                <v-responsive :aspect-ratio="1">
                  <apexchart
                    style="width: 100%; height: 100%; top: 0px; left: 0px"
                    type="pie"
                    height="100%"
                    :options="optionsSmall"
                    :series="seriesPie"
                  ></apexchart>
                </v-responsive>
              </v-card>
            </v-col>
            <v-col cols="6" sm="4">
              <v-card>
                <v-responsive :aspect-ratio="1">
                  <apexchart
                    style="width: 100%; height: 100%; top: 0px; left: 0px"
                    type="radar"
                    height="100%"
                    :options="optionsSmall"
                    :series="seriesRadar"
                  ></apexchart>
                </v-responsive>
              </v-card>
            </v-col>
            <v-col cols="6" sm="4">
              <v-card>
                <v-responsive :aspect-ratio="1">
                  <apexchart
                    style="width: 100%; height: 100%; top: 0px; left: 0px"
                    type="rangeBar"
                    height="100%"
                    :options="optionsSmall"
                    :series="seriesRange"
                  ></apexchart>
                </v-responsive>
              </v-card>
            </v-col>
          </v-row>
          <div style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px">
            <v-scroll-y-transition>
              <v-row style="height: 100%" align="center" v-show="hoverAnalytics">
                <v-col cols="12">
                  <center>
                    <h1 class="primary--text">Collect anything inside your community</h1>
                    <h3 class="primary--text">.xls export & Google Analytics</h3>
                  </center>
                </v-col>
              </v-row>
            </v-scroll-y-transition>
          </div>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet color="grey lighten-3" class="pa-5 pt-12 pb-12" tile>
      <v-container style="max-width: 900px">
        <div>
          <center>
            <h2>
              Discord like a
              <u>pro</u>
            </h2>
          </center>
          <v-row align="center">
            <v-col cols="12" md="6">
              <v-img height="200px" contain src="../../assets/bongo.gif" />
            </v-col>
            <v-col cols="12" md="6">
              <div v-if="$vuetify.breakpoint.mdAndUp">
                <p
                  class="mb-6"
                >Game sessions? Check; Donations? Check; Emote syncing? Check; Vote? Check; News? Check</p>
                <v-btn depressed color="primary">Add purecore to your guild</v-btn>
              </div>
              <center v-if="$vuetify.breakpoint.smAndDown">
                <div>
                  <p
                    class="mb-6"
                  >Game sessions? Check; Donations? Check; Emote syncing? Check; Vote? Check; News? Check</p>
                  <v-btn depressed color="primary">Add purecore to your guild</v-btn>
                </div>
              </center>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
// @ is an alias to /src
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts
  },
  name: "home",
  methods: {
    getRandomInt: function(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    getBasicRandom: function() {
      var final = [];
      for (let index = 0; index < 5; index++) {
        final.push(this.getRandomInt(100));
      }
      return final;
    },
    getRangeRandom: function() {
      var final = [];
      for (let index = 0; index < 4; index++) {
        var data = [];
        var from = this.getRandomInt(100);
        var to = from + this.getRandomInt(100);
        data.push(from);
        data.push(to);
        final.push({ x: index, y: data });
      }
      return final;
    },
    getHeatRandom: function() {
      var final = [];
      for (let index = 0; index < 4; index++) {
        var subseries = { name: index, data: [] };
        for (let index = 0; index < 4; index++) {
          subseries.data.push({ x: index, y: this.getRandomInt(100) });
        }
        final.push(subseries);
      }
      return final;
    },
    getPercentRandom: function() {
      var final = [];
      var available = 100;
      while (available > 20) {
        var result = this.getRandomInt(available);
        available = available - result;
        final.push(result);
      }
      if (available <= 20) {
        available = 0;
        final.push(available);
      }
      return final;
    },
    updateCharts: function() {
      this.seriesLine = [
        {
          data: this.getBasicRandom()
        }
      ];
      this.seriesArea = [
        {
          data: this.getBasicRandom()
        }
      ];
      this.seriesPie = this.getPercentRandom();
      this.seriesHeat = this.getHeatRandom();
      this.seriesRadar = this.getHeatRandom();
      this.seriesRange = [
        {
          data: this.getRangeRandom()
        }
      ];
    }
  },
  mounted() {
    this.updateCharts();
    setInterval(() => {
      if (this.$vuetify.breakpoint.mdAndUp) {
        this.updateCharts();
      }
    }, 2000);
  },
  data() {
    return {
      hoverAnalytics: false,
      optionsSmall: {
        colors: ["#448aff"],
        chart: {
          animations: {
            enabled: true,
            easing: "easeout",
            speed: 500
          },
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          }
        },
        tooltip: {
          enabled: false
        }
      },
      options: {
        colors: ["#fff"],
        chart: {
          animations: {
            enabled: true,
            easing: "easeout",
            speed: 500
          },
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          }
        },
        tooltip: {
          enabled: false
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 35, 45, 49, 70, 91]
        }
      ],
      seriesLine: [],
      seriesArea: [],
      seriesHeat: [],
      seriesPie: [],
      seriesRange: [],
      seriesRadar: [],
      expandCalculator: false,
      expandValue: false,
      serviceList: [
        {
          name: "enjin",
          price: "$29.99"
        },
        {
          name: "tebex",
          price: "£24.99"
        },
        {
          name: "minetrends",
          price: "$5"
        }
      ]
    };
  },
  watch: {
    expandCalculator: function(val) {
      this.expandValue = val;
    }
  }
};
</script>