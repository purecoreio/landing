<template>
  <div>
    <div style="position:relative; width:100%; height: 600px; overflow:hidden">
      <apexchart
        v-if="$vuetify.breakpoint.mdAndUp"
        style="position: absolute; width: 100%; height: 100%; top: 0px; right: 0px;transform:translateY(2px); z-index:0"
        type="area"
        height="600"
        :options="options"
        :series="series"
      ></apexchart>
      <div
        style="postion: absolute; width: 100%; height: 100%; top: 0px; left: 0px"
      >
        <v-row style="height: 100%" align="center">
          <v-col cols="12">
            <v-container
              style="max-width: 1000px; padding-top: 200px; padding-bottom: 200px"
            >
              <v-row no-gutters align="center">
                <v-col cols="12" md="6">
                  <h1>Know your playerbase</h1>
                  <h3 class="mt-2 mb-4" style="opacity:0.8">
                    purecore is the best software platform for managing a gaming
                    community. With live analytics, monetization system, social
                    tools and various other utilities
                  </h3>
                  <v-btn
                    href="https://purecore.io/dashboard"
                    large
                    depressed
                    rounded
                    color="primary"
                  >
                    start now
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </div>
    </div>
    <v-divider v-if="!$vuetify.breakpoint.mdAndUp" />
    <div
      :class="$vuetify.breakpoint.mdAndUp ? 'mt-10 mb-10' : 'mt-10'"
      :style="
        $vuetify.breakpoint.mdAndUp
          ? 'position:relative;height:500px'
          : 'position:relative;height:200px'
      "
    >
      <div style="position:absolute;left:0px;width:100%; height:100%">
        <v-container
          v-if="$vuetify.breakpoint.mdAndUp"
          style="margin:0px;padding:0px"
          fill-height
          fluid
        >
          <v-row align="center" justify="center">
            <v-col>
              <payment-gateways />
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div
        style="position:absolute;left:0px;width:100%; height:100%; background: linear-gradient(-90deg, rgba(250,250,250,1) 0%, rgba(250,250,250,1) 55%, rgba(250,250,250,0) 100%);"
      ></div>
      <div style="position:absolute;left:0px;width:100%; height:100%">
        <v-container fill-height fluid style="max-width:1000px;">
          <v-row align="center" justify="center">
            <v-col>
              <div
                :class="
                  $vuetify.breakpoint.mdAndUp ? 'text-right' : 'text-center'
                "
                :style="$vuetify.breakpoint.mdAndUp ? 'float:right' : ''"
              >
                <h1 class="mb-4">Payments, the right way</h1>
                <h3
                  :style="
                    $vuetify.breakpoint.mdAndUp
                      ? 'max-width:430px'
                      : 'max-width:430px;margin:auto'
                  "
                >
                  We offer native support for our payment gateways, with the
                  latest public standards
                </h3>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <v-container
      style="margin:0px;padding:0px"
      class="mb-10 mt-10"
      v-if="!$vuetify.breakpoint.mdAndUp"
    >
      <v-row align="center" justify="center">
        <v-col>
          <payment-gateways />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import VueApexCharts from "vue-apexcharts";
import PaymentGateways from "../../components/PaymentGateways";

export default {
  components: {
    apexchart: VueApexCharts,
    PaymentGateways,
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
          data: this.getBasicRandom(),
        },
      ];
      this.seriesArea = [
        {
          data: this.getBasicRandom(),
        },
      ];
      this.seriesPie = this.getPercentRandom();
      this.seriesHeat = this.getHeatRandom();
      this.seriesRadar = this.getHeatRandom();
      this.seriesRange = [
        {
          data: this.getRangeRandom(),
        },
      ];
    },
  },
  mounted() {
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
            speed: 500,
          },
          toolbar: {
            show: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      options: {
        colors: ["#448aff"],
        stroke: {
          show: false,
        },
        fill: {
          type: "gradient",
          gradient: {
            type: "vertical",
            shadeIntensity: 0.5,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 0,
            stops: [0, 95, 100],
            colorStops: [],
          },
        },
        chart: {
          animations: {
            enabled: true,
            easing: "easeout",
            speed: 500,
          },
          toolbar: {
            show: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 20, 20, 25, 35, 49, 70, 100],
        },
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
          price: "$29.99",
        },
        {
          name: "tebex",
          price: "£24.99",
        },
        {
          name: "minetrends",
          price: "$5",
        },
      ],
    };
  },
  watch: {
    expandCalculator: function(val) {
      this.expandValue = val;
    },
  },
};
</script>
