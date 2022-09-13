<template>
    <v-footer class="py-5" absolute app>
        <v-container>
            <v-row class="px-10" align="center">
                <v-col>
                    <v-btn href="https://twitter.com/purecoreio" target="_blank" class="mr-4" icon="mdi-twitter"
                        variant="plain" />
                    <v-btn to="/discord" icon="mdi-discord" variant="plain" />
                </v-col>
                <v-col class="text-right">
                    made with ❤️ by <a target="_blank" href="https://www.buymeacoffee.com/happy">happy</a> from
                    Barcelona
                </v-col>
            </v-row>
            <v-divider class="my-9" />
            <p class="text-center">
               <v-icon size="tiny">mdi-copyright</v-icon> purecore.io {{ new Date().getFullYear() }}
            </p>
        </v-container>
    </v-footer>
</template>