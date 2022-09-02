<template>
    <div :style="`width: ${cols * 300}px`">
        <v-row align="center">
            <v-col v-for="i in cols" :key="`${i}-${items[0].title}`">
                <v-list-item v-for="element in items.slice(fromCol(i), toCol(i))" :key="element.title" target="_blank" :title="element.title" :subtitle="element.description"
                    class="pa-5">
                    <template v-slot:prepend>
                        <v-icon v-if="element.icon">
                            {{ element.icon }}
                        </v-icon>
                        <span v-else-if="element.title">
                            {{ element.title[0] }}
                        </span>
                    </template>
                </v-list-item>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    props: ["items"],
    computed: {
        cols() {
            return this.items.length >= 4 ? 2 : 1
        },
    },
    methods: {
        fromCol(i) {
            return i == 1 ? 0 : (i - 1) * this.items.length / 2
        },
        toCol(i) {
            return this.items.length >= 4 ? i * this.items.length / 2 : this.items.length
        }
    },
}
</script>