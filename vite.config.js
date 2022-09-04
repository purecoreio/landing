import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(/*{
			template: {
				transformAssetUrls: {
					tags: {
						'v-img': ['src'],
					}
				}
			}
		}*/),
		vuetify({ autoImport: true }),
	],
})
