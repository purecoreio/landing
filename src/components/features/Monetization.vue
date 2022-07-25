<template>
    <v-card style="width:100%;height:305px" class="py-2" dark color="black" variant="flat">
        <prism-editor v-model="code" :highlight="highlighter" line-numbers />
    </v-card>
</template>

<script>

import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';

import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';
export default {
    components: {
        PrismEditor,
    },
    data: () => ({
        code: ""
    }),
    async mounted() {
        await this.wait(400)
        this.typewrite(`import { Checkout } from 'purecore'

const checkout = await Checkout.create({
    profile: {
        eid: '8a0b22c3-f85a-4465-b0ea-732fcbcf1e86',
        service: 'minecraft:java'
    },
    items: [...]
    currency: 'EUR',
})

checkout.mount('#payment-element')`, 'code')
    },
    methods: {
        highlighter(code) {
            return highlight(code, languages.js);
        },
        async typewrite(value, target) {
            for (let char = 0; char < value.length + 1; char++) {
                this[target] = String(value).substring(0, char)
                await this.wait(10)
            }
        },
        async wait(time) {
            await new Promise(resolve => setTimeout(resolve, time));
        }
    },
}
</script>
<style>
.hidden {
    width: 0px;
    height: 0px;
    visibility: hidden;
    position: absolute;
}
</style>