import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#448aff',
                secondary: '#448aff',
                accent: '#83b9ff',
                error: '#ff8a65',
            },
            dark: {
                primary: '#448aff',
                secondary: '#448aff',
                accent: '#83b9ff',
                error: '#ff8a65',
            }
        },
    },
})

export default vuetify;