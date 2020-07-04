<template>
  <marquee-text :repeat="3" :duration="250">
    <v-img
      width="120"
      height="100"
      contain
      class="mr-12"
      style="display:inline-block"
      v-for="(img, i) in pm"
      :key="i"
      :src="require(`../assets/pm/${img}`)"
    />
  </marquee-text>
</template>
<script>
import MarqueeText from "vue-marquee-text-component";
export default {
  components: {
    MarqueeText,
  },
  props: ["pm"],
};
</script>
<style scoped lang="css">
.marquee-text-text {
  animation-direction: reverse !important;
}
</style>
