// Styles
import "@mdi/font/css/materialdesignicons.css";
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    icons: {
      iconFont: "mdi",
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        dark: {
          dark: true,
          colors: {
            primary: '#82b1ff',
            secondary: '#82b1ff',
            accent: '#b6e3ff',
            error: '#ff8a65',
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
      }
    }
  }
)
