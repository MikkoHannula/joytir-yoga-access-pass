import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

//Vite-configuration
export default defineConfig(({ mode }) => ({
  server: {
    host: "localhost", // Localhost for development
    port: 8080,
  },
  plugins: [
    react(),
    // mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
