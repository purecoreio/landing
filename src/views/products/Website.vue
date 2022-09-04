<template>
    <v-container>
        <hero>
            <template v-slot:title>
                Website
            </template>
            <template v-slot:description>
                Build your website in the very same way you are used to, reuse your bought templates
                compatible competing with services here! You can also integrate every piece of purecore tech on your custom
                built website by using elements, which help you cover everything from checkout pages to player
                authentication on your externally hosted website.
            </template>
        </hero>
        <compare-table modelValue="pebblehost" />
    </v-container>
</template>
  <script>
  import CompareTable from '../../components/compare/CompareTable.vue'
  import Hero from '../../components/Hero.vue';
  export default {
    components: { CompareTable, Hero },
  }
  </script>