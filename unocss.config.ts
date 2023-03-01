import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno({
      attributifyPseudo: true,
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        color: "inherit",
        // Avoid crushing of icons in crowded situations
        "min-width": "1.2em",
      },
    }),
    presetTypography(),
    presetWebFonts({
      provider: "none",
      fonts: {
        script: "Homemade Apple",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
