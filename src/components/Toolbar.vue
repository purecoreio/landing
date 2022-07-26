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
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
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
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                    {
                        icon: 'mdi-package-variant',
                        title: 'No Bloatware',
                        description: 'Dockerized enviroments with Alpine Linux to ensure your server is using as much compute realstate as possible',
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                    {
                        icon: 'mdi-piggy-bank-outline',
                        title: 'Cheap',
                        description: 'You are not getting better deals for this level of dedicated hardware, period',
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                    {
                        icon: 'mdi-source-fork',
                        title: 'Scalable',
                        description: 'EC2-like autoscaling of programmable instance spin-ups for high availability under all loads',
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                    {
                        icon: 'mdi-download-network-outline',
                        title: 'Migration',
                        description: 'Easily migrate from your existing hosting using server-grade network speeds to have your server back online quickly',
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                    {
                        icon: 'mdi-apple-keyboard-command',
                        title: 'Developer Tooling',
                        description: 'Locally test and easily launch new features and fixes with GitHub repo sync and grifpkg',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-shield-sync-outline',
                        title: 'Machine Supervisor',
                        description: 'If you don\'t want to switch to purecore hosting, install purecore supervisor and manage your servers from our panel',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                    {
                        icon: 'mdi-sync',
                        title: 'Up-to-date',
                        description: 'The software suite is up to date and the server binaries are updated right away on every release, no more CVEs!',
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
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
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
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                    {
                        icon: 'mdi-lock',
                        title: 'Secure',
                        description: 'The safely designed elements for account managment ensure private account data can\'t be accessed',
                        href: "https://docs.purecore.io/checkout/summary"
                    },
                ]
            },
            {
                title: 'Analytics', dropdown: [
                    {
                        icon: 'mdi-google-circles-communities',
                        title: 'Community Analytics',
                        description: 'See how your community is evolving with analytics about growth, playtime, anonimized geolocatio and more',
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                    {
                        icon: 'mdi-account',
                        title: 'Player Analytics',
                        description: 'We provide meaningful and respectful analytics about individual players',
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                    {
                        icon: 'mdi-vote',
                        title: 'Vote Analytics',
                        description: 'Track your network votes on server lists to help you understand how your voting score is evolving',
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                    {
                        icon: 'mdi-web',
                        title: 'Website Analytics',
                        description: 'Understand how your website is used by your players and improve online presence',
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                    {
                        icon: 'mdi-server',
                        title: 'Instance Analytics',
                        description: 'Learn how your players navigate your network and how your gamemodes are being played',
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                    {
                        icon: 'mdi-memory',
                        title: 'Infrastructure Analytics',
                        description: 'Use purecore hosting or self-host purecore supervisor to track your infrastructure performance',
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                ]
            },
            {
                title: 'Community', dropdown: [
                    {
                        icon: 'mdi-graph',
                        title: 'Friends',
                        description: 'Relationship scores get automatically built based on game interactions between players',
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                    {
                        icon: 'mdi-discord',
                        title: 'Discord Bot',
                        description: 'Closely integrate discord profiles with game profiles and keep track of who is who',
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                    {
                        icon: 'mdi-forum',
                        title: 'Forum Integrations',
                        description: 'Integrate purecore with your favourite forum software or use our own',
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                    {
                        icon: 'mdi-bell-badge',
                        title: 'Notifications',
                        description: 'Notify your players about updates and upcoming events via both push and email',
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                    {
                        icon: 'mdi-account-group',
                        title: 'Staff',
                        description: 'Share literally any part of your community (infrastructure, monetization, etc) with authorized players',
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                    {
                        icon: 'mdi-checkbox-multiple-marked-circle-outline',
                        title: 'Polls & Forms',
                        description: 'Automatically suggest satisfactions polls, staff applications forms or similar to elegible players',
                        href: "https://docs.purecore.io/checkout/summary",
                        beta: true,
                    },
                ]
            },
        ]
    })
}
</script>