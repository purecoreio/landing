/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    global: {
      elevation: 0,
      ripple: false,
      hideDetails: true,
    },
    VExpansionPanel: {
      rounded: 10,
    },
    VBtn: {
      color: 'primary',
      rounded: 10,
    },
    VAvatar: {
      rounded: 1,
      color: 'primary',
      variant: 'tonal',
    },
    VAlert: {
      variant: 'tonal',
      rounded: 10,
    },
    VBtnGroup: {
      variant: 'tonal',
      color: 'primary',
      rounded: 10,
    },
    VSlider: {
      rounded: 10,
      color: 'primary'
    },
    VSwitch: {
      color: 'primary',
    },
    VCheckbox: {
      color: 'primary',
    },
    VRadioGroup: {
      color: 'primary'
    },
    VProgressLinear: {
      rounded: 10,
      color: 'primary'
    },
    VTextField: {
      singleLine: true,
      color: 'primary',
    },
    VCard: {
      rounded: 10,
      border: true,
    },
    VTooltip:{
      theme:'light'
    },
    VAppBar: {
      border: "b",
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#82b1ff',
          secondary: '#82b1ff',
          accent: '#b6e3ff',
          error: '#ff8a65',
          surface:'#171717'
        },
      },
      light: {
        dark: false,
        colors: {
          primary: '#448aff',
          secondary: '#448aff',
          accent: '#83b9ff',
          error: '#ff8a65',
        }
      }
    },
  },
})
