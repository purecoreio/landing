<template>
  <div>
    <marquee-text class="mb-10" :duration="250">
      <v-img
        width="120"
        contain
        :class="
          shadow != null && shadow == true ? 'mr-12 elevation-7' : 'mr-12'
        "
        class="mr-12"
        style="display:inline-block; border-radius:14px"
        v-for="(img, i) in pm[0]"
        :key="i"
        :src="require(`../assets/pm/${img}`)"
      />
    </marquee-text>
    <marquee-text-rev :shadow="shadow" :pm="pm[1]" :duration="250" />
    <marquee-text class="mt-10" :duration="250">
      <v-img
        width="120"
        contain
        :class="
          shadow != null && shadow == true ? 'mr-12 elevation-7' : 'mr-12'
        "
        style="display:inline-block; border-radius:14px"
        v-for="(img, i) in pm[2]"
        :key="i"
        :src="require(`../assets/pm/${img}`)"
      />
    </marquee-text>
  </div>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";
import MarqueeTextRev from "./MarqueeRev";

export default {
  props: ["shadow"],
  components: {
    MarqueeText,
    MarqueeTextRev,
  },
  mounted() {
    const result = new Array(Math.ceil(this.pms.length / 3))
      .fill()
      .map(() => this.pms.splice(0, this.pms.length / 3));
    this.pm[0] = result[0];
    this.pm[1] = result[1];
    this.pm[2] = result[2];
  },
  data: () => {
    return {
      pms: [
        "ABNANL2A.svg",
        "amex-alt.svg",
        "amex.svg",
        "anwbgiftcard.svg",
        "applepay.svg",
        "paypal.svg",
        "ASNBNL21.svg",
        "bancontact.svg",
        "banktransfer.svg",
        "belfius.svg",
        "BUNQNL2A.svg",
        "cartasi.svg",
        "cartebancaire.svg",
        "creditcard.svg",
        "deberencadeaukaart.svg",
        "directdebit.svg",
        "eps.svg",
        "eyegiftcard.svg",
        "fashioncheque.svg",
        "FVLBNL22.svg",
        "giftcard.svg",
        "giropay.svg",
        "HANDNL2A.svg",
        "ideal.svg",
        "inghomepay.svg",
        "kbc.svg",
        "klarna.svg",
        "KNABNL2H.svg",
        "kunstencultuurcadeaukaart.svg",
        "maestro.svg",
        "mastercard.svg",
        "MOYONL21.svg",
        "mybank.svg",
        "Nationale-golfbon_32x24.svg",
        "nationalebioscoopbon.svg",
        "nationaleentertainmentcard.svg",
        "paysafecard.svg",
        "podiumcadeaukaart.svg",
        "Przelewy24.svg",
        "RABONL2U.svg",
        "RBRBNL21.svg",
        "SNSBNL2A.svg",
        "sofort.svg",
        "sportenfit.svg",
        "travelcheq.svg",
        "TRIONL2U.svg",
        "visa.svg",
        "vpay.svg",
        "vvvgiftcard-dinercheque.svg",
        "vvvgiftcard-lekkerweg.svg",
        "vvvgiftcard.svg",
        "webshopgiftcard.svg",
        "yourgift.svg",
      ],
      pm: {
        0: [],
        1: [],
        2: [],
      },
    };
  },
};
</script>
