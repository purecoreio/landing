<template>
  <v-row no-gutters>
    <v-col cols="12" sm="6">
      <v-stepper v-model="e1">
        <v-stepper-items ref="container">
          <v-stepper-content step="1">
            <v-text-field hide-details disabled outlined value="username" />
            <div class="text-right mt-4">
              <v-btn color="primary" disabled>
                Continue
              </v-btn>
            </div>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  hide-details
                  disabled
                  :filled="t < 1000"
                  outlined
                  value="Spain"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  hide-details
                  disabled
                  :filled="t < 1100"
                  outlined
                  value="Barcelona"
                />
              </v-col>
              <v-col cols="9">
                <v-text-field
                  hide-details
                  disabled
                  :filled="t < 1200"
                  outlined
                  value="Barcelona"
                />
              </v-col>
              <v-col cols="3">
                <v-text-field
                  hide-details
                  disabled
                  :filled="t < 1300"
                  outlined
                  value="ZIP"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  hide-details
                  disabled
                  :filled="t < 1400"
                  outlined
                  value="Example Line 1"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  hide-details
                  disabled
                  :filled="t < 1500"
                  outlined
                  value="Example Line 2"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  hide-details
                  disabled
                  :filled="t < 1600"
                  outlined
                  value="Full Name"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  hide-details
                  disabled
                  :filled="t < 1700"
                  outlined
                  value="Email"
                />
              </v-col>
            </v-row>

            <div class="text-right mt-4">
              <v-btn color="primary" disabled>
                Continue
              </v-btn>
            </div>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-row>
              <v-col cols="12">
                <v-card outlined>
                  <v-row class="mb-0 pb-0 pt-0 mt-0 pr-2 pl-2">
                    <v-col sm="6" cols="12">
                      <v-text-field
                        class="mt-0 pt-0 mb-0 pb-0"
                        hide-details
                        disabled
                        value="42 42 42 42 42 42 42 42"
                      />
                    </v-col>
                    <v-col sm="3" cols="6">
                      <v-text-field
                        class="mt-0 pt-0 mb-0 pb-0"
                        hide-details
                        disabled
                        value="01/20"
                      />
                    </v-col>
                    <v-col sm="3" cols="6">
                      <v-text-field
                        class="mt-0 pt-0 mb-0 pb-0"
                        hide-details
                        disabled
                        value="123"
                      />
                    </v-col>
                  </v-row>
                  <v-btn
                    depressed
                    block
                    class="pt-6 pb-6"
                    color="gray lighten-3"
                  >
                    pay now
                  </v-btn>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-divider class="mb-6" />
                <v-btn depressed block class="pt-6 pb-6" color="black"
                  ><v-img
                    height="20px"
                    width="60px"
                    contain
                    src="../assets/apple-pay.svg"
                /></v-btn>
                <v-btn depressed block class="pt-6 pb-6 mt-2" color="blue"
                  ><v-img
                    height="20px"
                    width="60px"
                    contain
                    src="../assets/paypal.svg"
                /></v-btn>
                <v-btn
                  depressed
                  block
                  class="pt-6 pb-6 mt-2"
                  color="gray lighten-4"
                  ><v-img
                    height="20px"
                    width="60px"
                    contain
                    src="../assets/gpay.svg"
                /></v-btn>
                <v-btn
                  @click="runPayment()"
                  block
                  text
                  class="mt-2"
                  color="primary"
                  >replay demo</v-btn
                >
              </v-col>
            </v-row>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-col>
    <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" sm="6" class="pl-4">
      <v-alert
        transition="scale-transition"
        class="mb-3 mt-0"
        text
        color="primary"
        :value="t > 200"
      >
        Username gets automatically detected based on the play sessions
      </v-alert>
      <v-alert
        transition="scale-transition"
        class="mb-4 mt-0"
        text
        color="primary"
        :value="t > 1000"
      >
        Details get automatically filled if the customer is logged in, stored
        using Stripe so we can keep all the data with a fair privacy policy
      </v-alert>
      <v-alert
        transition="scale-transition"
        class="mb-0 mt-0"
        text
        color="primary"
        :value="t > 2000"
      >
        Customer pays with Apple Pay, Google Pay, credit card or PayPal or, gets
        an automatically suggested payment gateway based on the local service
        popularity (for example, Giropay in Germany, iDEAL in the Netherlands
        and Paysafecard or other gift card services when available)
      </v-alert>
    </v-col>
  </v-row>
</template>
<script>
import smoothReflow from "vue-smooth-reflow";
export default {
  mixins: [smoothReflow],
  methods: {
    runPayment() {
      this.e1 = 1;
      this.t = 0;

      setTimeout(() => {
        this.t = 1000;
        setTimeout(() => {
          this.e1 = 2;
          setTimeout(() => {
            this.t = 1700;
            setTimeout(() => {
              this.e1 = 3;
              this.t = 3000;
            }, 2000);
          }, 1000);
        }, 1000);
      }, 1000);
    },
  },
  mounted() {
    this.$smoothReflow({
      el: this.$refs.container,
      property: "height",
      transitionEvent: {
        selector: "v-stepper-content",
      },
    });
    this.runPayment();
  },
  data: () => ({
    e1: 1,
    t: 0,
  }),
};
</script>
