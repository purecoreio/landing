<template>
    <vsm-menu :menu="menu" element="header" handler="hover" :screen-offset="10" :dropdown-offset="10">
        <template v-slot="{ item }">
            <toolbar-item :items="item?.items ?? []" />
        </template>
        <template v-slot:title="data">
            <router-link class="navlink" :to="`/${data?.item?.dropdown ?? ''}`">
                {{ data.item.title }}
            </router-link>
        </template>
    </vsm-menu>
</template>

<style>
.navlink {
    text-decoration: none !important;
    color: inherit;
}

.vsm-link {
    color: black;
}

.vsm-link.vsm-active,
.vsm-link:hover,
.navlink.router-link-exact-active {
    color: #448aff
}
</style>

<script>
import 'vue-stripe-menu/dist/vue-stripe-menu.css';
import { VsmMenu, VsmMob } from 'vue-stripe-menu'
import ToolbarItem from './ToolbarItem.vue';

export default {
    components: {
        VsmMenu,
        VsmMob,
        ToolbarItem
    },
    props:["menu"],
}
</script>