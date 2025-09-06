// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon({
      include: {
        // Include only three `mdi` icons in the bundle
        ai: ['message-filled'],
        // Include all `uis` icons
        // uis: ['*']
      }
    })],
});
