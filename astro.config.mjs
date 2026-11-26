import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://sid200026.com",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
