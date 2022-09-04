<template>
    <v-app-bar style="overflow:visible" flat border="b" app class="py-0 pl-2">
        <router-link style="text-decoration:none;color:initial" to="/">
            <Logo />
        </router-link>
        <hover-menu :menu="menu" />
        <v-spacer />
        <v-btn color="grey" icon to="/discord" class="mr-3">
            <v-icon icon="mdi-discord" />
            <v-tooltip location="bottom" activator="parent">
                Discord
            </v-tooltip>
        </v-btn>
        <v-btn color="grey" icon href="https://docs.purecore.io" class="mr-3">
            <v-icon icon="mdi-apple-keyboard-command" />
            <v-tooltip location="bottom" activator="parent">
                Docs
            </v-tooltip>
        </v-btn>
        <v-btn href="https://console.purecore.io" variant="flat" color="primary" append-icon="mdi-login-variant">
            Go To Console
        </v-btn>
    </v-app-bar>
</template>
<script>
import HoverMenu from './HoverMenu.vue';

import Logo from './Logo.vue';
export default {
    components: {
        Logo,
        HoverMenu,
    },
    data: () => ({
        menu: [
            {
                title: 'Monetization',
                dropdown: 'monetization',
                items: [
                    {
                        icon: 'mdi-currency-eur',
                        title: 'Checkout',
                        description: 'Easily integrate checkout on your website with about 10 lines of code',

                    },
                    {
                        icon: 'mdi-application',
                        title: 'Website',
                        description: 'Use already owned templates with the legacy CMS or use elements on your website',

                    },
                    {
                        icon: 'mdi-brain',
                        title: 'Smart Detection',
                        description: 'Detect potential customers by comparing with existing customer behavior',


                    },
                    {
                        icon: 'mdi-brightness-percent',
                        title: 'Engagement',
                        description: 'Largely boost your revenue with upselling and (very) advanced discount logic',

                    },
                    {
                        icon: 'mdi-badge-account',
                        title: 'Identity',
                        description: 'Identities are automatically detected: billing details automatically filled',

                    },
                    {
                        icon: 'mdi-cable-data',
                        title: 'Integrations',
                        description: 'Account state, payment refunds and dispute sync with your favourite gateways',

                    },
                    {
                        icon: 'mdi-bank-transfer-in',
                        title: 'Money Governance',
                        description: 'Funds go directly into your linked wallets instead of being transfered thru our account',

                    },
                    {
                        icon: 'mdi-circle-multiple-outline',
                        title: 'Credit',
                        description: 'Unable to link a certain wallet? Get paid by using purecore credit',

                    },
                ]
            },
            {
                title: 'Hosting',
                dropdown: 'hosting',
                items: [
                    {
                        icon: 'mdi-function',
                        title: 'Fast',
                        description: 'Extremely fast single-core score CPUs with dedicated vCPUs at a record price for an excellent playability',


                    },
                    {
                        icon: 'mdi-package-variant',
                        title: 'No Bloatware',
                        description: 'Enviroments with minimal bloatware so your server can use as much compute realstate as possible',


                    },
                    {
                        icon: 'mdi-piggy-bank-outline',
                        title: 'Cheap',
                        description: 'We have other products to back our revenue: our hosting profit margin is small and you get excellent deals',


                    },
                    {
                        icon: 'mdi-source-fork',
                        title: 'Scalable',
                        description: 'EC2-like autoscaling and programmable instance spin-ups for high availability under all loads',


                    },
                    {
                        icon: 'mdi-download-network-outline',
                        title: 'Migration',
                        description: 'Mantain your uptime by migrating from your existing hosting using our rsync (s)FTP helper',


                    },
                    {
                        icon: 'mdi-apple-keyboard-command',
                        title: 'Developer Tooling',
                        description: 'Locally test and easily launch new features and fixes with GitHub repo sync and grifpkg',

                    },
                    {
                        icon: 'mdi-shield-sync-outline',
                        title: 'Machine Supervisor',
                        description: 'use your existing infrastructure with purecore supervisor and manage your servers from our panel',

                    },
                    {
                        icon: 'mdi-sync',
                        title: 'Up-to-date',
                        description: 'The server binaries are updated right away on every release, no more CVEs!',

                    },
                ]
            },
            {
                title: 'Website',
                dropdown: 'website',
                items: [
                    {
                        icon: 'mdi-account-search',
                        title: 'Login Suggestions',
                        description: 'Automatically detect the players looking at your website and suggest them to login',


                    },
                    {
                        icon: 'mdi-door',
                        title: 'Official Integrations',
                        description: 'Xbox Live, Steam, Discord and many other services to authenticate using their game profile',

                    },
                    {
                        icon: 'mdi-form-textbox-password',
                        title: 'Network Integrations',
                        description: 'Login using network credentials from systems such as AuthMe in a safe way',


                    },
                    {
                        icon: 'mdi-lock',
                        title: 'Secure',
                        description: 'The safely designed elements for account managment ensure private account data can\'t be accessed',

                    },
                ]
            },
            {
                title: 'Analytics',
                dropdown: 'analytics',
                items: [
                    {
                        icon: 'mdi-google-circles-communities',
                        title: 'Community Analytics',
                        description: 'See how your community is evolving with analytics about growth, playtime, anonimized geolocatio and more',


                    },
                    {
                        icon: 'mdi-account',
                        title: 'Player Analytics',
                        description: 'We provide meaningful and respectful analytics about individual players and their presence',


                    },
                    {
                        icon: 'mdi-vote',
                        title: 'Vote Analytics',
                        description: 'Track your network votes on server lists to help you understand how your voting score is evolving',


                    },
                    {
                        icon: 'mdi-web',
                        title: 'Website Analytics',
                        description: 'Understand how your website is used by your players, integrate external services and increase page visits',


                    },
                    {
                        icon: 'mdi-server',
                        title: 'Instance Analytics',
                        description: 'Learn how your players navigate your network and how your gamemodes are being played',


                    },
                    {
                        icon: 'mdi-memory',
                        title: 'Infrastructure Analytics',
                        description: 'Use purecore hosting or self-host purecore supervisor to track your infrastructure performance',


                    },
                ]
            },
            {
                title: 'Community',
                dropdown: 'community',
                items: [
                    {
                        icon: 'mdi-graph',
                        title: 'Friends',
                        description: 'Relationship scores get automatically built based on online interactions between players',


                    },
                    {
                        icon: 'mdi-discord',
                        title: 'Discord Bot',
                        description: 'Closely integrate discord profiles with game profiles and keep track of who is who at all times',


                    },
                    {
                        icon: 'mdi-forum',
                        title: 'Forum Integrations',
                        description: 'Integrate purecore with your favourite forum software with purecore identity and role sync',


                    },
                    {
                        icon: 'mdi-bell',
                        title: 'Notifications',
                        description: 'Notify your players about updates and upcoming events via both push and email',


                    },
                    {
                        icon: 'mdi-account-group',
                        title: 'Staff',
                        description: 'Share literally any part of your management panel with authorized players and custom staff roles',


                    },
                    {
                        icon: 'mdi-checkbox-multiple-marked-circle-outline',
                        title: 'Polls & Forms',
                        description: 'Automatically suggest satisfactions polls, staff applications forms or similar to elegible players',


                    },
                    {
                        icon: 'mdi-gavel',
                        title: 'Punishments & Appeals',
                        description: 'Manage punishments directly from your dashboard and allow banned players to appeal',


                    },
                    {
                        icon: 'mdi-emoticon-wink',
                        title: 'Network Profiles',
                        description: 'Players can customize their profile to make it unique on your network',


                    },
                ]
            },
        ]
    })
}
</script>