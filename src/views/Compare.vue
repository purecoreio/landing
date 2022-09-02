<template>
    <v-container>
        <div class="text-center">
            <h1 class="my-10">purecore.io<v-chip class="mx-3">VS</v-chip>{{ specs[service].name }}</h1>
            <h3 class="mb-10" style="max-width:600px;margin:auto;line-height:32px">
                Forget about having to pay multiple for subscriptions on multiple services. purecore.io is an all-in-one
                package that provides most of the stuff you already use for free, and provides new features for a
                reduced price, with a single subscription.
            </h3>
        </div>
        <compare-table v-model="service" />
    </v-container>
</template>

<script>
import { Specs } from '../assets/specs';
import CompareTable from '../components/compare/CompareTable.vue';
export default {
    props: ["service"],
    components: { CompareTable },
    data: () => ({
        specs: Specs.others,
    }),
}
</script>