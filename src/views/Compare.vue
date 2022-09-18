<template>
    <v-container>
        <hero>
            <template v-slot:title>
                purecore.io<v-chip class="mx-3">VS</v-chip>{{ selectedSpec.name }}
            </template>
            <template v-slot:description>
                Forget about having to pay multiple for subscriptions on multiple services. purecore.io is an all-in-one
                package that provides most of the stuff you already use for free, and provides new features for a
                reduced price, with a single subscription.
            </template>
        </hero>
        <compare-table v-if="service" v-model="service" />
    </v-container>
</template>

<script>
import { useMeta } from 'vue-meta';
import { Specs } from '../assets/specs';
import CompareTable from '../components/compare/CompareTable.vue';
import Hero from '../components/Hero.vue';
export default {
    setup(props) {
        // TODO may not work
        const spec = Specs.others.find(s => s.id == props.service)
        // 'monetization' | 'hosting' | 'website' | 'community'
        useMeta({ title: `purecore.io, a better ${spec.preferred} alternative to ${spec.name}` })
    },
    props: {
        service: {
            type: String,
            default: null
        }
    },
    components: { CompareTable, Hero },
    data: () => ({
        specs: Specs.others,
    }),
    watch: {
        service(s) {
            this.$router.replace({ path: `/vs/${s}` })
        }
    },
    computed: {
        selectedSpec() {
            if (!this.service) return
            return this.specs.find(s => s.id == this.service)
        }
    }
}
</script>