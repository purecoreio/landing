<template>
    <div v-for="(product) in Object.keys(specs.ours)" :key="product">
        <template v-if="!['name', 'akas', 'url', 'developerTooling'].includes(product)">
            <v-card color="white" elevation="4" class="mb-4">
                <v-card color="black" class="pa-5" variant="flat" :rounded="0">
                    <v-row align="center">
                        <v-col>
                            <h2>{{ product }}</h2>
                        </v-col>
                        <v-col cols="3" md="2" class="text-center">
                            {{ specs.ours.name }}
                        </v-col>
                        <v-col cols="3" md="2" class="text-center">
                            <v-select hide-details variant="flat" v-model="selected" :items="competingServices"
                                desnsity="compact" single-line item-title="display" item-value="key" />
                        </v-col>
                    </v-row>
                </v-card>
                <div class="pa-5">
                    <div v-for="feature in Object.keys(specs.ours[product])" :key="feature">
                        <v-row align="center">
                            <v-col>
                                {{ feature }}
                            </v-col>
                            <v-col cols="3" md="2" class="text-center">
                                <integration :val="specs.ours[product][feature]" />
                            </v-col>
                            <v-col cols="3" md="2" class="text-center">
                                <integration :val="specs.others[selected]?.[product]?.[feature]" />
                            </v-col>
                        </v-row>
                        <v-divider class="my-4" />
                    </div>
                </div>
            </v-card>
        </template>
    </div>
</template>

<script>
import { Specs } from "../../assets/specs"
import Integration from "./Integration.vue";
export default {
    data: () => ({
        specs: Specs,
        selected: 'tebex'
    }),
    components: { Integration },
    computed: {
        competingServices() {
            return Object.keys(this.specs.others).map(s => {
                const spec = this.specs.others[s]
                return {
                    key: s,
                    display: spec.name
                }
            })
        }
    }
}
</script>
