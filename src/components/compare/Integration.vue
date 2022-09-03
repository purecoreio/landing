<template>
    <v-chip v-if="val == 0" color="warning" append-icon="mdi-approximately-equal" text="Partially Included" />
    <v-chip v-else-if="val == 1" color="success" append-icon="mdi-check" text="Included" />
    <v-chip v-else-if="val == 2" color="warning" append-icon="mdi-approximately-equal" text="Incomplete, Paid" />
    <v-chip v-else-if="val == 3" color="primary" append-icon="mdi-check" text="Complete, Paid" />
    <v-chip v-else-if="val == 4" color="success" append-icon="mdi-progress-check" text="Planned" />
    <v-chip v-else-if="val" color="black" variant="flat" prepend-icon="mdi-approximately-equal">{{ val }} €</v-chip>
    <v-chip v-else color="red" append-icon="mdi-close" text="missing"/>
</template>


<script>
/*
    PARTIAL = 0,
    YES = 1,
    PARTIAL_PAID = 2,
    YES_PAID = 3,
    PLANNED = 4
*/
export default {
    props: ["val"]
}
</script>