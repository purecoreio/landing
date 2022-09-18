<template>
    <v-container>
        <hero>
            <template v-slot:title>
                The home for your community
            </template>
            <template v-slot:description>
                From hosting to monetization. This is the perfect place for your players            </template>
            <template v-slot:display>
                <v-card class="pa-5 text-center" variant="text">
                    <pre>placeholder</pre> player profiles and relationships
                </v-card>
            </template>
        </hero>
        <compare-table modelValue="plan" />
    </v-container>
</template>
<script>
import { useMeta } from 'vue-meta';
import Hero from '../../components/Hero.vue';
import Monetization from '../../components/features/Monetization.vue';
import CompareTable from '../../components/compare/CompareTable.vue';
export default {
    setup() {
        useMeta({ title: 'Community' })
    },
    components: { Hero, Monetization, CompareTable },
}
</script>