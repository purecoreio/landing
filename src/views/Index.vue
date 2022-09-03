<template>
    <v-sheet>
        <v-container>
            <v-row align="center">
                <v-col cols="12" md="6">
                    <div style="padding-right:100px">
                        <h1 style="font-size:50px;">Let's make your community <b>better</b>.</h1>
                        <h2 style="font-size:30px;">Easily monetize, host and study your gaming community</h2>
                    </div>
                    <div class="mt-10">
                        <a href="https://console.purecore.io/">
                            <v-btn style="display:inline-block" variant="flat" class="mr-2" color="primary"
                                size="large">
                                Go To Console
                            </v-btn>
                        </a>
                        {{ specs }}
                        <!--<v-btn style="display:inline-block" variant="text" color="primary" size="large">
                            Compare with competing services
                            <v-menu v-if="specs" activator="parent">
                                <v-list>
                                    <v-list-item :to="`/vs/${spec.id}`" v-for="spec in specs" :key="spec"
                                        :title="spec.name" />
                                </v-list>
                            </v-menu>
                        </v-btn>-->
                    </div>
                </v-col>
                <v-spacer />
                <v-col cols="12" md="5">
                    <feature-animation />
                </v-col>
            </v-row>
            <div class="mt-10">
                <a style="text-decoration:none;color:gray" href="#more">
                    <center>
                        <p class="mb-5">
                            Learn more
                        </p>
                        <v-icon class="animated-down">
                            mdi-chevron-down
                        </v-icon>
                    </center>
                </a>
            </div>
        </v-container>
    </v-sheet>
    <v-sheet>
        <v-container>
            <v-divider class="mt-10 mb-5" />
            <v-row id="more" align="center">
                <v-col cols="12">
                    <h1 class="text-center my-10">An absolute unit.</h1>
                </v-col>
                <v-col cols="12" md="5">
                    <h2><b>purecore is an all-in-one package for your community.</b></h2>
                    <h2 class="my-5">Forget having to pay for multiple-site subscriptions in order to host, monetize and
                        study your community.</h2>
                </v-col>
                <v-spacer />
                <v-col cols="12" md="4">
                    <v-card variant="tonal" color="primary" class="pa-6">
                        <h3 style="font-weight: 400;">
                            <feature-checkbox>High performance hosting</feature-checkbox>
                            <feature-checkbox>Full-featured monetization</feature-checkbox>
                            <feature-checkbox>Excellent developer tooling</feature-checkbox>
                            <feature-checkbox>Community management</feature-checkbox>
                            <feature-checkbox>Detailed analytics</feature-checkbox>
                        </h3>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>
<script>
import FeatureCheckbox from '../components/FeatureCheckbox.vue'
import FeatureAnimation from '../components/FeatureAnimation.vue'
import { Specs } from '../assets/specs';
export default {
    components: { FeatureCheckbox, FeatureAnimation },
    computed: {
        specs() {
            return Specs?.others ?? []
        }
    }
}
</script>
<style scoped>
h1,
h2 {
    font-weight: 400
}

.animated-down {
    animation: downArrow 3s infinite
}

@keyframes downArrow {
    0% {
        transform: translateY(0px);
    }

    10% {
        transform: translateY(10px);
    }

    40% {
        transform: translateY(0px);
    }

    100% {
        transform: translateY(0px);
    }
}
</style>