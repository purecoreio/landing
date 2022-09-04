<template>
    <v-container>
        <hero>
            <template v-slot:title>
                Commerce
            </template>
            <template v-slot:description>
                Get money, get paid. Increase your revenue by saving on subscriptions you don't need; purecore offers
                everything you'll ever need for free, plus some amazing perks with purecore+, which is way cheaper than
                equivalent subscriptions on competing services.
            </template>
        </hero>
        <compare-table modelValue="tebex" />
    </v-container>
</template>
  <script>
  import CompareTable from '../../components/compare/CompareTable.vue'
  import Hero from '../../components/Hero.vue';
  export default {
    components: { CompareTable, Hero },
  }
  </script>