<template>
  <div>
    <v-card hover class="pa-4 mb-4">
      <v-expand-transition>
        <center>
          <div v-show="!showFeatures">
            <h1>Say goodbye to the rest of your bills</h1>
            <p>
              core offers a full set of features, here you can see the
              <strong>feature count</strong> for every major Minecraft service
            </p>
            <v-card outlined class="pa-4">
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Core</th>
                      <th class="text-left">Tebex</th>
                      <th class="text-left">Enjin</th>
                      <th class="text-left">NamelessMC</th>
                      <th class="text-left">CraftingStore</th>
                      <th class="text-left">Minetrends</th>
                      <th class="text-left">McProHosting</th>
                      <th class="text-left">CubedHost</th>
                      <th class="text-left">PebbleHost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{getFeatureCount("core")}}</td>
                      <td>{{getFeatureCount("tebex")}}</td>
                      <td>{{getFeatureCount("enjin")}}</td>
                      <td>{{getFeatureCount("nameless")}}</td>
                      <td>{{getFeatureCount("craftingstore")}}</td>
                      <td>{{getFeatureCount("minetrends")}}</td>
                      <td>{{getFeatureCount("mcprohosting")}}</td>
                      <td>{{getFeatureCount("cubedhost")}}</td>
                      <td>{{getFeatureCount("pebblehost")}}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
            <v-btn class="mt-4" outlined color="primary" text @click="showFeatures=true">Show Complete Feature List</v-btn>
          </div>
        </center>
      </v-expand-transition>
      <v-expand-transition>
        <v-simple-table v-show="showFeatures">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Feature</th>
                <th class="text-left">Core</th>
                <th class="text-left">Tebex</th>
                <th class="text-left">Enjin</th>
                <th class="text-left">NamelessMC</th>
                <th class="text-left">CraftingStore</th>
                <th class="text-left">Minetrends</th>
                <th class="text-left">McProHosting</th>
                <th class="text-left">CubedHost</th>
                <th class="text-left">PebbleHost</th>
              </tr>
            </thead>
            <tbody v-for="featureinfo in featurelist" :key="featureinfo.name">
              <tr v-if="featureinfo.name != 'CMS'">
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
              </tr>
              <tr>
                <td style="text-transform: capitalize; font-weight: 500">{{featureinfo.name}}</td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
                <td style="text-transform: capitalize; font-weight: 500"></td>
              </tr>
              <tr v-for="feature in featureinfo.content" :key="feature.name">
                <td>{{feature.name}}</td>
                <td>
                  <v-icon color="green">check</v-icon>
                </td>
                <td v-if="!feature.tebex && feature.tebex!=null">
                  <v-icon color="red">clear</v-icon>
                </td>
                <td v-if="feature.tebex">
                  <v-icon color="green">check</v-icon>
                </td>
                <td v-if="feature.tebex==null">
                  <v-icon>help_outline</v-icon>
                </td>
                <td v-if="!feature.enjin && feature.enjin!=null">
                  <v-icon color="red">clear</v-icon>
                </td>
                <td v-if="feature.enjin">
                  <v-icon color="green">check</v-icon>
                </td>
                <td v-if="feature.enjin==null">
                  <v-icon>help_outline</v-icon>
                </td>
                <td v-if="!feature.nameless && feature.nameless!=null">
                  <v-icon color="red">clear</v-icon>
                </td>
                <td v-if="feature.nameless">
                  <v-icon color="green">check</v-icon>
                </td>
                <td v-if="feature.nameless==null">
                  <v-icon>help_outline</v-icon>
                </td>
                <td v-if="!feature.craftingstore && feature.craftingstore!=null">
                  <v-icon color="red">clear</v-icon>
                </td>
                <td v-if="feature.craftingstore">
                  <v-icon color="green">check</v-icon>
                </td>
                <td v-if="feature.craftingstore==null">
                  <v-icon>help_outline</v-icon>
                </td>
                <td v-if="!feature.minetrends && feature.minetrends!=null">
                  <v-icon color="red">clear</v-icon>
                </td>
                <td v-if="feature.minetrends">
                  <v-icon color="green">check</v-icon>
                </td>
                <td v-if="feature.minetrends==null">
                  <v-icon>help_outline</v-icon>
                </td>
                <td v-if="!feature.mcprohosting && feature.mcprohosting!=null">
                  <v-icon color="red">clear</v-icon>
                </td>
                <td v-if="feature.mcprohosting">
                  <v-icon color="green">check</v-icon>
                </td>
                <td v-if="feature.mcprohosting==null">
                  <v-icon>help_outline</v-icon>
                </td>
                <td v-if="!feature.cubedhost && feature.cubedhost!=null">
                  <v-icon color="red">clear</v-icon>
                </td>
                <td v-if="feature.cubedhost">
                  <v-icon color="green">check</v-icon>
                </td>
                <td v-if="feature.cubedhost==null">
                  <v-icon>help_outline</v-icon>
                </td>
                <td v-if="!feature.pebblehost && feature.pebblehost!=null">
                  <v-icon color="red">clear</v-icon>
                </td>
                <td v-if="feature.pebblehost">
                  <v-icon color="green">check</v-icon>
                </td>
                <td v-if="feature.pebblehost==null">
                  <v-icon>help_outline</v-icon>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "featuressection",
  methods: {
    getFeatureCount: function(serviceName) {
      var count = 0;
      if (serviceName != "core") {
        this.featurelist.forEach(featureSection => {
          featureSection.content.forEach(feature => {
            if (feature[serviceName]) {
              count++;
            }
          });
        });
        return count;
      } else {
        this.featurelist.forEach(featureSection => {
          featureSection.content.forEach(() => {
            count++;
          });
        });
        return count;
      }
    }
  },
  data: () => {
    return {
      showFeatures: false,
      featurelist: [
        {
          name: "CMS",
          content: [
            {
              name: "Global Accounts",
              tebex: false,
              enjin: true,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Discord Integration",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Themes",
              tebex: true,
              enjin: true,
              nameless: true,
              craftingstore: true,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Forum",
              tebex: false,
              enjin: true,
              nameless: true,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Modular Building",
              tebex: false,
              enjin: true,
              nameless: true,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            }
          ]
        },
        {
          name: "hosting",
          content: [
            {
              name: "Machine Monitoring",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Server Monitoring",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: true,
              cubedhost: true,
              mcprohosting: true,
              pebblehost: true
            },
            {
              name: "Dedicated Cores",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Fast Virtualization",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: true,
              mcprohosting: true,
              pebblehost: true
            },
            {
              name: "Machine Access",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: null,
              mcprohosting: null,
              pebblehost: null
            },
            {
              name: "Open Marketplace",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            }
          ]
        },
        {
          name: "punishments",
          content: [
            {
              name: "GRS",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Behavior Points",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Appeals",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Report System",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            }
          ]
        },
        {
          name: "analytics",
          content: [
            {
              name: "Connections",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Growth",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: true,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Geolocation",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: true,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Feedback",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Suggestions",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Game Integration",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: true,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            }
          ]
        },
        {
          name: "payments",
          content: [
            {
              name: "Transaction Verification",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Digital Wallets",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "No Redirections",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Stripe",
              tebex: true,
              enjin: true,
              nameless: true,
              craftingstore: true,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "PayPal",
              tebex: true,
              enjin: true,
              nameless: true,
              craftingstore: true,
              minetrends: false,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            },
            {
              name: "Coinbase",
              tebex: false,
              enjin: false,
              nameless: false,
              craftingstore: false,
              minetrends: true,
              cubedhost: false,
              mcprohosting: false,
              pebblehost: false
            }
          ]
        }
      ]
    };
  }
};
</script>
