import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "./src"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/ui": path.resolve(__dirname, "./src/ui"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/services": path.resolve(__dirname, "./src/services"),
      "@/styles": path.resolve(__dirname, "./src/styles"),
    },
  },
});
