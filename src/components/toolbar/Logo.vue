<template>
    <div class="d-flex align-center justify-center">
        <!--<v-img alt="purecore.io logo" class="mr-3" contain src="/isotype.png" width="35" />-->
        <span class="mr-3" style="font-size: 30px; padding-bottom: 5px">
            purecore
            <v-chip v-if="!$vuetify.display.mobile" color="primary" size="small"> BETA </v-chip>
        </span>
    </div>
</template>