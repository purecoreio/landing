<template>
    <v-row align="center" class="my-10">
        <v-col cols="12" :md="!!$slots.display ? 6 : 12">
            <div :style="!!$slots.display ? 'max-width:500px' : undefined"
                :class="($vuetify.display.mobile || !$slots.display) ? 'text-center' : undefined">
                <h1 class="heading mb-3">
                    <slot name="title" />
                </h1>
                <h2 class="heading">
                    <slot name="description" />
                </h2>
            </div>
            <v-row v-if="!!$slots.display" align="center" class="mt-10">
                <v-col class="text-center" cols="12" md="auto">
                    <a href="https://console.purecore.io/">
                        <v-btn style="display:inline-block" variant="flat" color="primary" size="large">
                            Go To Console
                        </v-btn>
                    </a>
                </v-col>
                <v-col class="text-center" cols="12" md="auto">
                    <v-btn style="display:inline-block" variant="text" color="primary" size="large">
                        Compare with competing services
                        <v-menu open-on-hover activator="parent">
                            <v-list>
                                <v-list-item :to="`/vs/${spec.id}`" v-for="spec in specs" :key="spec.id"
                                    :title="spec.name" />
                            </v-list>
                        </v-menu>
                    </v-btn>
                </v-col>
            </v-row>
        </v-col>
        <template v-if="!!$slots.display">
            <v-spacer />
            <v-col class="d-flex align-center" style="min-height:500px" cols="12" md="5">
                <div class="flex-grow-1">
                    <slot name="display" />
                </div>
            </v-col>
        </template>
    </v-row>
</template>

<script>
import { Specs } from '../assets/specs';
export default {
    computed: {
        specs() {
            return Specs?.others ?? []
        }
    },
}
</script>