<template>
    <v-card class="mb-4" color="primary" variant="outlined">
        <v-card color="black" class="pa-5" variant="flat" :rounded="0">
            <v-row align="center">
                <v-col cols="auto">
                    <v-select theme="dark" hide-details variant="solo" v-model="product" :items="products"
                        desnsity="compact" single-line />
                </v-col>
                <v-spacer />
                <v-col cols="3" md="2" class="text-center">
                    {{ specs.ours.name }}
                </v-col>
                <v-col cols="3" md="2" class="text-center">
                    <v-select theme="dark" hide-details variant="solo" v-model="selected" :items="this.specs?.others"
                        desnsity="compact" single-line item-title="name" item-value="id" />
                </v-col>
            </v-row>
        </v-card>
        <div v-for="feature in Object.keys(specs.ours[product])" :key="feature">
            <div class="pa-5">
                <v-row align="center">
                    <v-col>
                        {{ feature }}
                    </v-col>
                    <v-col cols="3" md="2" class="text-center">
                        <integration :val="specs.ours[product][feature]" />
                    </v-col>
                    <v-col cols="3" md="2" class="text-center">
                        <integration v-if="selected" :val="selectedSpec[product]?.[feature]" />
                    </v-col>
                </v-row>
            </div>
            <v-divider />
        </div>
    </v-card>
    <v-alert v-if="selected" variant="text" class="text-center" color="grey">
        <small>
            <b>Disclaimer:</b> this information may not be up to date. <b>always check deals on {{ selectedSpec.name }}
                (<u>{{ selectedSpec.url }}</u>)
                before making a decision</b>. We are happy to have competition from anybody, and this page doesn't mean
            to
            disrespect {{ selectedSpec.name }}'s work. If you believe this information is wrong, please, publish a
            PR <a target="_blank" class="text-grey"
                href="https://github.com/purecoreio/landing/tree/main/src/assets/specs">here</a>.
        </small>
    </v-alert>
</template>

<script>
import { Specs } from "../../assets/specs"
import Integration from "./Integration.vue";
export default {
    emits: ["update:modelValue"],
    data: () => ({
        specs: Specs,
        selected: null,
        products: ['hosting', 'monetization', 'community', 'website'],
        product: 'hosting'
    }),
    watch: {
        selected(val) {
            this.$emit('update:modelValue', val)
            if (this.selectedSpec.preferred) this.product = this.selectedSpec.preferred
        }
    },
    components: { Integration },
    props: ["modelValue"],
    mounted() {
        this.selected = this.modelValue
    },
    computed: {
        selectedSpec() {
            if (!this.selected) return null
            return this.specs.others.find(s => s.id == this.selected)
        }
    }
}
</script>
