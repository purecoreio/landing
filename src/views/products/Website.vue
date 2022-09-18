<template>
    <v-container>
        <hero>
            <template v-slot:title>
                Make your website your own
            </template>
            <template v-slot:description>
                Use our CMS, or integrate purecore on your website
            </template>
            <template v-slot:display>
                <monetization />
            </template>
        </hero>
    </v-container>
</template>
<script>
import { useMeta } from 'vue-meta';
import Hero from '../../components/Hero.vue';
import CompareTable from '../../components/compare/CompareTable.vue';
import Monetization from '../../components/features/Monetization.vue';
export default {
    setup() {
        useMeta({ title: 'Website' })
    },
    components: { Hero, CompareTable, Monetization },
}
</script>