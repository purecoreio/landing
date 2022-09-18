<template>
    <v-container>
        <hero>
            <template v-slot:title>
                Let's make your community <b>better</b>
            </template>
            <template v-slot:description>
                Easily monetize, host and study your gaming community
            </template>
            <template v-slot:display>
                <feature-animation />
            </template>
        </hero>
        <v-alert>
            This landing page is still under construction. purecore is a huge project that is being lead by a
            one-person team. Consider joining our Discord to keep yourself posted about upcoming open betas and
            other testing campaigns!
        </v-alert>
    </v-container>
</template>
<script>
import FeatureCheckbox from '../components/feature/FeatureCheckbox.vue'
import FeatureAnimation from '../components/feature/FeatureAnimation.vue'
import { Specs } from '../assets/specs';
import Hero from '../components/Hero.vue';
export default {
    components: { FeatureCheckbox, FeatureAnimation, Hero },
    computed: {
        specs() {
            return Specs?.others ?? []
        }
    },
}
</script>