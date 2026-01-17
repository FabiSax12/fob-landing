import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

// Definir la colección de eventos (solo para que Astro no genere warning)
// Los datos se cargan manualmente via loader.ts para compatibilidad con Decap CMS
const eventos = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/eventos" }),
});

export const collections = {
  eventos,
};
