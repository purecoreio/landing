<template>
    <v-sheet class="border-t">
        <v-container class="my-0 px-10 pb-0">
            <v-row class="mb-0" align="center">
                <v-col>
                    <v-btn href="https://twitter.com/purecoreio" target="_blank" class="mr-4" icon="mdi-twitter"
                        variant="plain" />
                    <!-- <v-btn to="/discord" icon="mdi-discord" variant="plain" /> -->
                </v-col>
                <v-col class="text-right">
                    <span>
                        <v-icon size="tiny">mdi-copyright</v-icon> purecore.io {{ new Date().getFullYear() }}
                    </span>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>
<script>
import { Specs } from '../assets/specs';

export default {
    data: () => ({
        services: Specs
    })
}
</script>