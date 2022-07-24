<template>
    <v-app-bar style="overflow:visible" flat border="b" app class="py-0">
        <Logo />
        <vsm-menu :menu="menu" element="header" handler="hover" :screen-offset="10" :dropdown-offset="10">
            <template #default="{ item }">
                <div style="width: 300px">
                    <v-list-item :to="element.to" :href="element.href" target="_blank" class="pa-5"
                        v-for="element in item.dropdown" :key="element.title">
                        <v-list-item-avatar color="primary">
                            <v-icon v-if="element.icon">
                                {{ element.icon }}
                            </v-icon>
                            <span v-else-if="element.title">
                                {{ element.title[0] }}
                            </span>
                        </v-list-item-avatar>
                        <div class="pl-5">
                            <v-list-item-title>
                                {{ element.title }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ element.description }}
                            </v-list-item-subtitle>
                        </div>
                    </v-list-item>
                </div>
            </template>
            <template #title="data">
                {{ data.item.title }}
            </template>
        </vsm-menu>
        <v-spacer />
        <v-btn href="https://console.purecore.io" variant="flat" color="primary" append-icon="mdi-login-variant">
            Go To Console
        </v-btn>
    </v-app-bar>
</template>
<style>
.vsm-link {
    color: black
}

.vsm-link.vsm-active,
.vsm-link:hover {
    color: #448aff
}
</style>
<script>
import 'vue-stripe-menu/dist/vue-stripe-menu.css';
import { VsmMenu, VsmMob } from 'vue-stripe-menu'

import Logo from './Logo.vue';
export default {
    components: {
        Logo,
        VsmMenu,
        VsmMob
    },
    data: () => ({
        menu: [
            {
                title: 'Monetization', dropdown: [
                    {
                        icon: 'mdi-currency-eur',
                        title: 'Checkout',
                        description: 'Easily integrate checkout on your website with about 10 lines of code',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-cursor-default-click',
                        title: 'Dashboard',
                        description: 'Your dashboard uses highly configurable native integrations with all your payment gateways',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-brain',
                        title: 'Smart Detection',
                        description: 'Your player data is in sync with purecore and we can detect potential customers',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-brightness-percent',
                        title: 'Engagement',
                        description: 'Largely boost your revenue with upselling and (very) advanced discount logic',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-badge-account',
                        title: 'Identity',
                        description: 'Identities are automatically detected: billing details automatically filled',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                ]
            },
            { title: 'Identity', dropdown: [] },
            { title: 'Hosting', dropdown: [] },
            { title: 'Analytics', dropdown: [] },
            { title: 'Community', dropdown: [] },
        ]
    })
}
</script>