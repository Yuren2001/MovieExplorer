import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    // Ensure the build directory is 'dist' (default)
    outDir: "dist", // Vercel expects the build output in the 'dist' directory
    // Minify the code for production
    minify: "terser",
  },
  server: {
    // This can be useful for local development when testing deployment setups
    port: 3000, // You can change the port as needed
    open: true, // Open the browser when the server starts
  },
  // If you're using any base URL, define it here
  base: "/MovieExplorer", // Make sure it's '/' or your custom base path
});
