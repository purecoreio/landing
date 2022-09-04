<template>
    <v-container>
        <hero>
            <template v-slot:title>
                Community
            </template>
            <template v-slot:description>
                Micro and macro analysis for everything related to your community, plus a complete set of engagement
                tools to keep your players talking on Discord, playing on your server and visiting your website.
            </template>
        </hero>
        <compare-table modelValue="plan" />
    </v-container>
</template>
  <script>
  import CompareTable from '../../components/compare/CompareTable.vue'
  import Hero from '../../components/Hero.vue';
  export default {
    components: { CompareTable, Hero },
  }
  </script>