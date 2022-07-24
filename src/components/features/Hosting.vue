<template>
    <v-card variant="tonal" color="primary lighten-4" style="width:100%" class="pa-3">
        <v-row>
            <v-col cols=" 12">
                <v-text-field ref="instance" hide-details variant="outlined" label="Instance" v-model="name" />
            </v-col>
            <v-col cols="12">
                <v-select hide-details variant="outlined" :items="cpus" label="CPU" v-model="cpu"></v-select>
            </v-col>
            <v-col cols="12">
                <div class="text-caption">Memory</div>
                <v-slider hide-details color="primary" :ticks="tickLabels1" :max="3" step="1" show-ticks="always"
                    tick-size="4" v-model="memory" />
            </v-col>
            <v-col cols="12">
                <div class="text-caption">Compute Units</div>
                <v-slider hide-details color="primary" :ticks="tickLabels2" :max="2" step="1" show-ticks="always"
                    tick-size="4" v-model="compute" />
            </v-col>
            <v-col cols="block">
                <v-btn :loading="loading" :class="clicked ? 'pressed' : null" ref="host" block variant="flat"
                    color="primary">
                    <v-icon v-if="success">
                        mdi-check
                    </v-icon>
                    <span v-else>Host</span>
                </v-btn>
            </v-col>
        </v-row>
        <div style="position:absolute;width:100%;height:100%;top:0px">
        </div>
    </v-card>
</template>
<style>
.pressed {
    transition: 100ms;
    transform: scale(0.97);
}
</style>
<script>
export default {
    async mounted() {
        await this.wait()
        await this.typewrite("survival", 'name')
        await this.wait()
        this.cpu = this.cpus[0]
        await this.wait()
        this.memory = 2
        await this.wait()
        this.compute = 1
        await this.wait()
        this.clicked = true
        await this.wait(200)
        this.clicked = false
        this.loading = true
        await this.wait(700)
        this.loading = false
        this.success = true

    },
    methods: {
        async typewrite(value, target) {
            for (let char = 0; char < value.length + 1; char++) {
                this[target] = String(value).substring(0, char)
                await this.wait(50)
            }
        },
        async wait(time = 400) {
            await new Promise(resolve => setTimeout(resolve, time));
        }
    },
    data: () => ({
        tickLabels1: {
            0: '2GB',
            1: '4GB',
            2: '8GB',
            3: '16GB',
        },
        tickLabels2: {
            0: '1vCPU',
            1: '2vCPUs',
            2: '4vCPUs',
        },
        compute: 0,
        cpus: ['Intel® Core™ i9-12900K'],
        cpu: null,
        memory: 0,
        name: '',
        clicked: false,
        loading: false,
        success: false
    })
}
</script>