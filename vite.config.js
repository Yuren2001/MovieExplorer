import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "./", // ✅ Set base to './' for relative paths (important for Vercel)
  build: {
    outDir: "dist", // Default is 'dist' – Vercel expects this
    minify: "terser", // Minify output using terser
  },
  server: {
    port: 3000, // Optional: useful for local dev
    open: true,
  },
});
