<template>
  <v-container>
    <hero>
      <template v-slot:title>
        Analytics
      </template>
      <template v-slot:description>
        All of our products include detailed analytics. This is not a 'separate' product, but an extension of
        every thing purecore has to offer. You won't miss a single data point anywhere. Commerce, hosting, website and
        community. Everything has analytics.
        <v-row class="mt-10" align="center">
          <v-col cols="6">
            <v-btn block size="large" variant="flat" color="primary" to="/commerce#analytics">
              Commerce Analytics
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn block size="large" variant="flat" color="primary" to="/hosting#analytics">
              Hosting Analytics
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn block size="large" variant="flat" color="primary" to="/website#analytics">
              Website Analytics
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn block size="large" variant="flat" color="primary" to="/community#analytics">
              Community Analytics
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </hero>
  </v-container>
</template>
<script>
import Hero from '../../components/Hero.vue';
export default {
  components: { Hero },
}
</script>