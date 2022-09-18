<template>
    <v-container>
        <hero>
            <template v-slot:title>
                Unrivaled performance
            </template>
            <template v-slot:description>
                Dedicated vCPU cores for the price of shared ones.
            </template>
            <template v-slot:display>
                <hosting/>
            </template>
        </hero>
        <compare-table modelValue="pebblehost" />
    </v-container>
</template>
<script>
import { useMeta } from 'vue-meta';
import Hero from '../../components/Hero.vue';
import CompareTable from '../../components/compare/CompareTable.vue';
import Hosting from '../../components/features/Hosting.vue';
export default {
    setup() {
        useMeta({ title: 'Hosting' })
    },
    components: { Hero, CompareTable, Hosting },
}
</script>