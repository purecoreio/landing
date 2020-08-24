<template>
  <marquee-text :repeat="3" :duration="250">
    <v-img
      width="120"
      contain
      :class="shadow != null && shadow == true ? 'mr-12 elevation-7' : 'mr-12'"
        style="display:inline-block; border-radius:14px"
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
  props: ["pm","shadow"],
};
</script>
<style scoped lang="css">
.marquee-text-text {
  animation-direction: reverse !important;
}
</style>
