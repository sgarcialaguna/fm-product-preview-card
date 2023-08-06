// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography, presetUno, presetWebFonts,
    transformerDirectives, transformerVariantGroup
} from 'unocss'

export default defineConfig({
    shortcuts: [
        // ...
    ],
    theme: {
        colors: {
            cream: 'hsl(30, 38%, 92%)',
            darkcyan: 'hsl(158, 36%, 37%)',
            darkercyan: 'hsl(158, 36%, 18%)',
            darkblue: 'hsl(212, 21%, 14%)',
            grayishblue: 'hsl(228, 12%, 48%)'
        }
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'Montserrat:500,700',
                serif: 'Fraunces:700'
            },
        }),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})
