<template>
  <v-sheet style="overflow: hidden" :color="bgcolor">
    <v-container class="pt-10 pb-10" style="max-width: 1000px">
      <v-row align="center">
        <v-col cols="12" md="6">
          <h2>{{feature}}</h2>
          <h3>{{description}}</h3>
          <v-chip class="mt-4" label color="primary">$0 on purecore</v-chip>
        </v-col>
        <v-col cols="6" v-if="$vuetify.breakpoint.mdAndUp">
          <div>
            <v-row align="center">
              <v-col cols="6">
                <v-img class="floating" contain height="100px" :src="img" />
              </v-col>
              <v-col cols="6">
                <h1 class="floating2">
                  <i>{{price}}</i>
                </h1>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  props: ["bgcolor", "description", "feature", "left", "img", "price"]
};
</script>

<style lang="css">
.floating {
  animation: float;
  animation-duration: 8s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.floating2 {
  animation: float2;
  animation-duration: 8s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
@keyframes float {
  0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(-20px);
  }

  100% {
    transform: translatey(0px);
  }
}
@keyframes float2 {
  0% {
    transform: translatey(-20px);
  }

  50% {
    transform: translatey(0px);
  }

  100% {
    transform: translatey(-20px);
  }
}
</style>