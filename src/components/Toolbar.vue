<template>
    <v-app-bar style="overflow:visible" flat border="b" app class="py-0">
        <Logo />
        <vsm-menu :menu="menu" element="header" handler="hover" :screen-offset="10" :dropdown-offset="10">
            <template #default="{ item }">
                <toolbar-item :key="item.title" :item="item" />
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
import ToolbarItem from './ToolbarItem.vue';
export default {
    components: {
        Logo,
        VsmMenu,
        VsmMob,
        ToolbarItem
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
                        icon: 'mdi-application-outline',
                        title: 'Website',
                        description: 'Import your already owned templates and use the legacy CMS or use elements on your own website',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-brain',
                        title: 'Smart Detection',
                        description: 'Detect potential customers by comparing with existing customer behavior',
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
                    {
                        icon: 'mdi-cable-data',
                        title: 'Integrations',
                        description: 'Account state, payment refunds and dispute sync with your favourite gateways',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-bank-transfer-in',
                        title: 'Money Governance',
                        description: 'Funds go directly into your linked wallets instead of being transfered thru our account',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-circle-multiple-outline',
                        title: 'Credit',
                        description: 'Unable to link a certain wallet? Get paid by using purecore credit',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                ]
            },
            {
                title: 'Hosting', dropdown: [
                    {
                        icon: 'mdi-function',
                        title: 'Fast',
                        description: 'Extremely fast single-core score CPUs with dedicated vCPUs at a price never before seen',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-package-variant',
                        title: 'No Bloatware',
                        description: 'Dockerized enviroments with Alpine Linux to ensure your server is using as much compute realstate as possible',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-piggy-bank-outline',
                        title: 'Cheap',
                        description: 'You are not getting better deals for this level of dedicated hardware, period',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-source-fork',
                        title: 'Availability',
                        description: 'EC2-like autoscaling of programmable instance spin-ups for high availability under all loads',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-download-network-outline',
                        title: 'Migration',
                        description: 'Easily migrate from your existing hosting using server-grade network speeds to have your server back online quickly',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-apple-keyboard-command',
                        title: 'Developer Tooling',
                        description: 'Locally test and easily launch new features and fixes with GitHub repo sync and grifpkg',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                ]
            },
            {
                title: 'Identity', dropdown: [
                    {
                        icon: 'mdi-account-search',
                        title: 'Login Suggestions',
                        description: 'Automatically detect the players looking at your website and suggest them to login',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-door',
                        title: 'Official Integrations',
                        description: 'Xbox Live, Steam, Discord and many other services to authenticate using their game profile',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-form-textbox-password',
                        title: 'Network Integrations',
                        description: 'Login using network credentials from systems such as AuthMe in a safe way',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-lock',
                        title: 'Secure',
                        description: 'The safely designed elements for account managment ensure private account data can\t be accessed',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                ]
            },
            { title: 'Analytics', dropdown: [] },
            { title: 'Community', dropdown: [] },
        ]
    })
}
</script>