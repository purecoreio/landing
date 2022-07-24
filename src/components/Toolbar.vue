<template>
    <v-app-bar flat border="b" app>
        <Logo />
        <v-spacer />
        <v-btn href="https://console.purecore.io" variant="flat" color="primary" append-icon="mdi-login-variant">
            Go To Console
        </v-btn>
    </v-app-bar>
</template>
<script>
import Logo from './Logo.vue';
export default {
    components: { Logo }
}
</script>