<template>
    <v-container>
        <v-row style="margin-top:120px">
            <v-col cols="6">
                <h1 class="text-h2">Turn your gaming community into a business</h1>
            </v-col>
            <v-col>

            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { useMeta } from 'vue-meta';
import CompareTable from '../../components/compare/CompareTable.vue'
import Hero from '../../components/Hero.vue';
export default {
    setup() {
        useMeta({ title: 'Commerce' })
    },
    components: { CompareTable, Hero },
}
</script>