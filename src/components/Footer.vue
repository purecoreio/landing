<template>
    <v-sheet color="grey-lighten-5 mt-10">
        <v-container class="my-0 px-10">
            <v-row class="mb-0">
                <v-col cols="12" md="4">
                    <p class="text-overline mb-5">
                        <v-chip size="small" label class="mr-1 mb-1">VS</v-chip> COMPARE WITH COMPETING SERVICES
                    </p>
                    <v-row>
                        <v-col cols="6" v-for="spec in services.others" :key="spec.id">
                            <a style="text-decoration: none;"
                                :href="`https://purecore.io/vs/${spec.id}`">{{spec.name}}</a>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col class="text-right" cols="12" md="8">
                    <p class="text-overline mb-5">
                        SUPPORT DEVELOPMENT<v-chip size="small" label class="ml-1 mb-1">
                            <v-icon color="grey-darken-2">mdi-piggy-bank</v-icon>
                        </v-chip>
                    </p>
                    <v-row>
                        <v-col cols="12">
                            made with ❤️ by <a target="_blank" href="https://www.buymeacoffee.com/happy">happy</a> from
                            Barcelona
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
    <v-sheet color="grey-lighten-4">
        <v-container class="my-0 px-10 pb-0">
            <v-row class="mb-0" align="center">
                <v-col>
                    <v-btn href="https://twitter.com/purecoreio" target="_blank" class="mr-4" icon="mdi-twitter"
                        variant="plain" />
                    <v-btn to="/discord" icon="mdi-discord" variant="plain" />
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