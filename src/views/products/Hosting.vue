<template>
    <v-container>
        <hero>
            <template v-slot:title>
                Hosting
            </template>
            <template v-slot:description>
                True dedicated vCPUs for the price of shared vCPUs. Autoscaling. Detailed hardware information. You
                won't find cheaper prices for dedicated vCPUs anywhere else; our profit margin is crazy thin, we
                cover some expenses with purecore+ subscriptions — a business model you won't find on any of the
                existing competing services.
            </template>
        </hero>
        <compare-table modelValue="pebblehost" />
    </v-container>
</template>
<script>
import { useMeta } from 'vue-meta';
import CompareTable from '../../components/compare/CompareTable.vue'
import Hero from '../../components/Hero.vue';
export default {
    setup() {
        useMeta({ title: 'Hosting' })
    },
    components: { CompareTable, Hero },
}
</script>