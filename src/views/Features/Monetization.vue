<template>
  <div>
    <div style="position:relative;width:100%;height:400px">
      <div
        style="height:100%; position:absolute; top:0px; left:0px; width:100%;"
      >
        <v-container style="max-width:1000px" fill-height fluid>
          <v-row fill-height align="center">
            <v-col>
              <h1>Get money, get paid</h1>
              <h3>We know who is the best handling your money</h3>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div
        v-if="$vuetify.breakpoint.mdAndUp"
        style="position:absolute; bottom:0px; left:0px; width:100%;overflow-x:hidden;overflow-y:visible"
      >
        <v-sparkline
          v-if="value != null"
          style="min-width:2000px"
          :value="value"
          :gradient="gradient"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          auto-draw
        ></v-sparkline>
      </div>
    </div>
    <div style="min-height: 770px; position:relative">
      <div
        v-if="$vuetify.breakpoint.mdAndUp"
        style="position:absolute; bottom:-270px; left:0px; width:100%;overflow-x:hidden;overflow-y:visible"
      >
        <v-sparkline
          v-if="value2 != null"
          style="min-width:2000px"
          :value="value2"
          :gradient="gradient2"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          auto-draw
        ></v-sparkline>
      </div>
      <div style="position:absolute;top:0px;width:100%;height:100%;">
        <v-container style="max-width:1000px; top:0px;">
          <div
            class="text-right mb-7"
            style="margin-left:auto; max-width:480px;"
          >
            <h1>A smart checkout</h1>
            <h3>
              It integrates native payment options to the device so the customer
              never has to leave the page. Also has auto-fill capabilities, it
              drops the bounce rate of your checkout page
            </h3>
          </div>
          <checkout-example />
        </v-container>
      </div>
    </div>
    <v-container class="mt-10" style="max-width:1000px">
      <v-row>
        <v-col cols="12" md="6">
          <div style="max-width:480px;">
            <h1>These three, all you need</h1>
            <h3>
              Instead of offering dozens of gateways with ones with higher fees
              than others, we have a strong foundation on Stripe, PayPal and
              Mollie. This way we offer you the services with the least possible
              fees while still providing a fluid experience
            </h3>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          :class="$vuetify.breakpoint.mdAndUp ? 'text-right' : 'text-center'"
        >
          <v-img
            style="display:inline-block"
            width="110"
            height="100"
            position="center"
            contain
            src="../../assets/pg/stripe.svg"
          />
          <v-img
            style="display:inline-block;transform:translateY(-5px)"
            width="110"
            height="100"
            position="center"
            class="mr-10 ml-5"
            contain
            src="../../assets/pg/mollie.svg"
          />
          <v-img
            style="display:inline-block"
            width="110"
            height="100"
            position="center"
            contain
            src="../../assets/pg/paypal.svg"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container style="max-width:1000px" class="mt-10">
      <v-row>
        <v-col cols="12" md="6">
          <v-card
            v-tilt="{
              axis: 'x',
              glare: true,
              max: 10,
              reverse: true,
              scale: 0.9,
              'max-glare': 1,
            }"
          >
            <v-responsive class="gradientGlare" :aspect-ratio="85.6 / 53.98">
              <v-row style="height:100%" align="center">
                <v-col>
                  <center>
                    <v-img
                      height="100"
                      contain
                      src="../../assets/pg/stripe.svg"
                    />
                  </center>
                </v-col>
              </v-row>
            </v-responsive>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <div class="text-right" style="max-width:480px;">
            <h1>Encouraging credit card payments</h1>
            <h3>
              With the implementation of the the Payment Request API, we are
              able to automatically fill details or pay using digital wallets
              such as Apple Pay or any other supported in Chrome, Edge, Firefox,
              Safari and Samsung Internet. The default payment manager for
              credit card payments is Stripe
            </h3>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="max-width:1000px" class="mt-10">
      <v-row>
        <v-col cols="12" md="6">
          <div style="max-width:480px;">
            <h1>Potential customer detection</h1>
            <h3>
              We constatly compute a mathematical model of your previous
              customers and compare it to your players, that way we can
              automatically detect your new potential customers and potential
              recurring customers
            </h3>
          </div>
        </v-col>
        <v-col class="text-right" cols="12" md="6">
          <v-avatar style="filter:grayscale(1)" size="90" class="mr-2">
            <v-img src="https://minotar.net/helm/notch" />
          </v-avatar>
          <v-avatar style="filter:grayscale(1)" size="90" class="mr-2">
            <v-img src="https://minotar.net/helm/dinnerbone" />
          </v-avatar>
          <v-avatar size="90" class="mr">
            <v-img src="https://minotar.net/helm/quiquelhappy" />
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="max-width:1000px" class="mt-10">
      <v-row>
        <v-col cols="12" md="6">
          <v-skeleton-loader
            v-for="i in 3"
            :key="i"
            boilerplate
            type="list-item-avatar-two-line"
            class="mb-3"
          ></v-skeleton-loader>
        </v-col>
        <v-col class="text-right" cols="12" md="6">
          <div style="max-width:480px;">
            <h1>Down to the millisecond</h1>
            <h3>
              Know exactly what happened during a checkout flow and invite
              customers with unfinished payment requests to support your
              cummunity
            </h3>
            <v-btn class="mt-5" to="/analytics/" rounded outlined>
              take a look at analytics
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="max-width:1000px" class="mt-10">
      <v-row>
        <v-col cols="12" md="6">
          <div style="max-width:480px;">
            <h1>No extra fees</h1>
            <h3>
              We don't get money from your payments, we want you to be
              successful without having to deal with that. purecore+ offers an
              enhanced experience and no limits to your transactions
            </h3>
          </div>
        </v-col>
        <v-col class="text-right" cols="12" md="6">
          <v-avatar size="90">
            <v-icon x-large>money_off</v-icon>
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="max-width:1000px">
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="scaledown">
            <v-responsive :aspect-ratio="16 / 9">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/apDmFNWG5Yc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-responsive>
          </v-card>
        </v-col>
        <v-col class="text-right" cols="12" md="6">
          <div style="max-width:480px;">
            <h1>Object-based</h1>
            <h3>
              Create comparision tables, differential commands based on perk
              amounts and others. No other public system is doing this. They all
              store the data as boring text, we store it as object properties,
              which makes it way more flexible
            </h3>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <payment-gateways class="mt-10" style="margin-bottom:100px" />
  </div>
</template>

<style lang="css">
.gradientGlare {
  background-color: rgba(68, 138, 255, 0);
  background: linear-gradient(
    -225deg,
    rgba(68, 138, 255, 0) 30%,
    rgba(68, 138, 255, 0.5) 100%
  );
  transition: 500ms;
}
.gradientGlare:hover {
  background-color: rgba(68, 138, 255, 0.1);
}
.scaledown {
  transform: scale(1);
  transition: 200ms;
}
.scaledown:hover {
  transform: scale(0.95);
}
</style>

<script>
const gradient = ["rgba(68, 138, 255, 1)", "rgba(68, 138, 255, 0)"];
const gradient2 = [
  "rgba(68, 138, 255, 0)",
  "rgba(68, 138, 255, 0.5)",
  "rgba(68, 138, 255, 0)",
];
import checkoutExample from "../../components/CheckoutExample";
import paymentGateways from "../../components/PaymentGateways";

export default {
  components: {
    checkoutExample,
    paymentGateways,
  },
  methods: {
    handleWindowResize() {
      this.value = this.$vuetify.breakpoint.lgAndUp
        ? [2, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 7, 8]
        : [0, 3, 3];
      this.value2 = this.$vuetify.breakpoint.lgAndUp
        ? [4, 4, 2, 2, 2, 2, 2, 1, 0]
        : [0, 3, 3];
    },
    runPayment() {
      this.e1 = 1;
      this.t = 0;

      var interval = setInterval(() => {
        this.t += 3;
        if (this.t > 5000) {
          clearInterval(interval);
        } else {
          if (this.t > 1000 && this.t <= 2000) {
            this.e1 = 2;
          } else if (this.t > 2000) {
            this.e1 = 3;
          }
        }
      }, 1);
    },
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
  mounted() {
    window.addEventListener("resize", this.handleWindowResize);
    this.handleWindowResize();
    this.runPayment();
  },
  data: () => ({
    e1: 1,
    t: 0,
    width: 2,
    radius: 10,
    padding: 0,
    gradient: gradient,
    gradient2: gradient2,
    value: null,
    value2: null,
    gradientDirection: "top",
    fill: false,
    type: "trend",
  }),
};
</script>
