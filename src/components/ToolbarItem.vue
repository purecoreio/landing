<template>
    <div :style="`width: ${cols * 300}px`">
        <v-row>
            <v-col v-for="i in cols" :key="`${item.title}-${i}`">
                <v-list-item :to="element.to" :href="element.href" target="_blank" class="pa-5"
                    v-for="element in item.dropdown.slice(fromCol(i), toCol(i))" :key="element.title">
                    <v-list-item-avatar color="primary">
                        <v-icon v-if="element.icon">
                            {{ element.icon }}
                        </v-icon>
                        <span v-else-if="element.title">
                            {{ element.title[0] }}
                        </span>
                    </v-list-item-avatar>
                    <div class="pl-5">
                        <v-list-item-title>
                            {{ element.title }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{ element.description }}
                        </v-list-item-subtitle>
                    </div>
                </v-list-item>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    props: ["item"],
    computed: {
        cols() {
            return this.item.dropdown.length >= 4 ? 2 : 1
        },
    },
    methods: {
        fromCol(i) {
            return i == 1 ? 0 : (i - 1) * this.item.dropdown.length / 2
        },
        toCol(i) {
            return this.item.dropdown.length >= 4 ? i * this.item.dropdown.length / 2 : this.item.dropdown.length
        }
    },
}
</script>