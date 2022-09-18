<template>
    <v-window :key="slide" :show-arrows="false" :class="fadeClass" v-model="slide">
        <v-window-item>
            <div class="d-flex fill-height justify-center align-center">
                <Analytics />
            </div>
        </v-window-item>
        <v-window-item>
            <div class="d-flex fill-height justify-center align-center">
                <Hosting />
            </div>
        </v-window-item>
        <v-window-item>
            <div class="d-flex fill-height justify-center align-center">
                <Monetization />
            </div>
        </v-window-item>
    </v-window>
</template>

<script>
import Analytics from '../features/Analytics.vue'
import Hosting from '../features/Hosting.vue';
import Monetization from '../features/Monetization.vue';
export default {
    data: () => ({
        swithing: false,
        slide: 0,
        maxSlides: 3
    }),
    computed: {
        fadeClass() {
            let base = "fade";
            if (this.swithing) {
                base += " faded";
            }
            return base;
        }
    },
    methods: {
        async switch() {
            this.swithing = true;
            await new Promise(resolve => setTimeout(resolve, 300));
            this.slide++;
            if (this.slide >= this.maxSlides)
                this.slide = 0;
            await new Promise(resolve => setTimeout(resolve, 300));
            this.swithing = false;
        }
    },
    mounted() {
        setInterval(async () => {
            await this.switch();
        }, 1000 * 8);
    },
    components: { Analytics, Hosting, Monetization }
}
</script>

<style scoped>
.fade {
    transition: opacity 200ms;
    opacity: 1;
}

.faded {
    opacity: 0;
}
</style>