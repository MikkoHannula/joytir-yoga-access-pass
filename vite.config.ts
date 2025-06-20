import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Tämä tiedosto määrittelee Vite-konfiguraation
export default defineConfig(({ mode }) => ({
  server: {
    host: "localhost", // Vaihdettu localhostiin, jotta toimii paikallisesti
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
