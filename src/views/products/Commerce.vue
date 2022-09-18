<template>
    <v-container>
        <hero>
            <template v-slot:title>
                Easily monetize your gaming community
            </template>
            <template v-slot:description>
                Easy payments for your players. Get money, get paid.
            </template>
            <template v-slot:display>
                <monetization />
            </template>
        </hero>
        <compare-table modelValue="tebex" />
    </v-container>
</template>
<script>
import { useMeta } from 'vue-meta';
import Hero from '../../components/Hero.vue';
import Monetization from '../../components/features/Monetization.vue';
import CompareTable from '../../components/compare/CompareTable.vue';
export default {
    setup() {
        useMeta({ title: 'Commerce' })
    },
    components: { Hero, Monetization, CompareTable },
}
</script>