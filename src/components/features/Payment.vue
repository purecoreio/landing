<template>
    <!--<v-scroll-y-transition>
        <div class="text-center mb-5" v-if="elapsed">
            <v-chip variant="outlined" color="black">
                {{elapsed}} second<span v-if="elapsed>1">s</span>
            </v-chip>
        </div>
    </v-scroll-y-transition>-->
    <div :class="`fade ${transitioning ? 'faded' : ''}`">
        <div v-if="step==0">
            <v-card :class="`pressable ${clickingPackage ? 'pressed' : ''}`" color="primary" style="margin:auto"
                max-width="200px">
                <div class="pa-10 text-center">
                    <v-icon style="font-size:54px">mdi-package-variant</v-icon>
                </div>
                <v-sheet class="text-center" color="black">
                    <div class="pb-3 pt-4">3.99€</div>
                    <div style="height:4px">
                        <v-fade-transition>
                            <v-progress-linear v-show="addingVisible" height="4px" stream v-model="addingProgress"
                                color="primary" />
                        </v-fade-transition>
                    </div>
                </v-sheet>
            </v-card>
        </div>
        <div v-if="step == 1">
            <v-card style="margin:auto" :elevation="0">
                <p class="text-overline text-center">Continue as...</p>
                <v-card :class="`py-5 px-3 pressable ${clickingProfile ? 'pressed' : ''}`" variant="tonal">
                    <v-list-item prepend-avatar="https://minotar.net/helm/quiquelhappy" title="quiquelhappy"
                        append-icon="mdi-arrow-right" />
                </v-card>
            </v-card>
        </div>
        <div v-if="step == 2">
            <v-card variant="tonal" class="py-5 px-3 mb-3">
                <v-list-item title="Barcelona, ES" subtitle="Saved billing address">
                    <template v-slot:append>
                        <v-img style="border-radius:3px" width="30px" src="https://countryflagsapi.com/svg/es" />
                    </template>
                </v-list-item>
            </v-card>
            <v-btn :elevation="0" :loading="loadingPayment" class block
                :class="`py-6 pressable ${clickingBuy ? 'pressed' : ''}`" color="black">
                <v-icon class="mr-1">{{success ? 'mdi-check' : 'mdi-apple'}}</v-icon> <span v-if="!success">Pay</span>
            </v-btn>
        </div>
    </div>
</template>

<style>
.pressable {
    transform: scale(1);
    transition: 200ms;
}

.pressable.pressed {
    transform: scale(0.9);
}

.fade {
    transition: 200ms;
    opacity: 1;
    transform: scale(1);
}

.faded {
    opacity: 0;
    transform: scale(1.1);
}
</style>

<script>
export default {
    data: () => ({
        clickingPackage: false,
        clickingProfile: false,
        clickingBuy: false,
        addingProgress: 0,
        addingVisible: false,
        step: 0,
        transitioning: false,
        loadingPayment: false,
        success: false,
        elapsed: 0
    }),
    async mounted() {
        await new Promise(resolve => setTimeout(resolve, 1500))
        this.elapsed = 1
        const timer = setInterval(() => {
            this.elapsed++
        }, 1000);
        await this.packageSelect()
        await this.transition(1)
        await new Promise(resolve => setTimeout(resolve, 1500));
        await this.profileSelect()
        await this.transition(2)
        await new Promise(resolve => setTimeout(resolve, 1500));
        await this.payment()
        clearInterval(timer)
    },
    methods: {
        async profileSelect() {
            this.clickingProfile = true
            await new Promise(resolve => setTimeout(resolve, 200))
            this.clickingProfile = false
        },
        async packageSelect() {
            this.clickingPackage = true
            this.addingProgress = 0
            this.addingVisible = true
            await new Promise(resolve => setTimeout(resolve, 200))
            this.clickingPackage = false
            this.addingProgress = 17
            await new Promise(resolve => setTimeout(resolve, 200))
            this.addingProgress = 100
            await new Promise(resolve => setTimeout(resolve, 200))
            this.addingVisible = false
        },
        async transition(step) {
            this.transitioning = true
            await new Promise(resolve => setTimeout(resolve, 200))
            this.step = step
            this.transitioning = false
        },
        async payment() {
            this.clickingBuy = true
            this.loadingPayment = true
            await new Promise(resolve => setTimeout(resolve, 200))
            this.clickingBuy = false
            await new Promise(resolve => setTimeout(resolve, 3000))
            this.loadingPayment = false
            this.success = true
        }
    }
}
</script>