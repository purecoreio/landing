<template>
  <v-container>
    <hero>
      <template v-slot:title>
        Take a deeper look into your community
      </template>
      <template v-slot:description>
        Make use of your data. Get detailed analytics from everything
      </template>
      <template v-slot:display>
        <analytics />
      </template>
    </hero>
    <compare-table modelValue="plan"/>
    <v-row class="mt-10" align="center">
      <v-col cols="6">
        <v-btn class="py-9" block size="large" variant="flat" color="primary" to="/commerce#analytics">
          Commerce Analytics
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn class="py-9" block size="large" variant="flat" color="primary" to="/hosting#analytics">
          Hosting Analytics
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn class="py-9" block size="large" variant="flat" color="primary" to="/website#analytics">
          Website Analytics
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn class="py-9" block size="large" variant="flat" color="primary" to="/community#analytics">
          Community Analytics
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { useMeta } from 'vue-meta';
import Hero from '../../components/Hero.vue';
import Analytics from '../../components/features/Analytics.vue';
import CompareTable from '../../components/compare/CompareTable.vue';
export default {
  setup() {
    useMeta({ title: 'Analytics' })
  },
  components: { Hero, Analytics, CompareTable },
}
</script>