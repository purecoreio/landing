/**
 * plugins/webfontloader.ts
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts() {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')
  webFontLoader.load({
    google: {
      families: [
        'Sora', 'Jetbrains Mono'
      ],
    },
  })
}
