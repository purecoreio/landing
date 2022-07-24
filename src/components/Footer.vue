<template>
    <v-footer class="py-5">
        <v-container>
            <v-row>
                <v-col class="px-10">
                    <v-btn style="display:inline-block" href="https://twitter.com/purecoreio" target="_blank"
                        class="mr-4" icon="mdi-twitter" variant="plain" />
                    <v-btn style="display:inline-block" to="/discord" class="mx-4" icon="mdi-discord" variant="plain" />
                </v-col>
                <v-col class="px-10 text-right">
                    made with ❤️ by <a target="_blank" href="https://www.buymeacoffee.com/happy">happy</a> from Barcelona
                </v-col>
                <v-col cols="12" class="text-center ">
                    <v-divider class="mb-9" />
                    {{ new Date().getFullYear() }} — <strong>purecore.io</strong>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>