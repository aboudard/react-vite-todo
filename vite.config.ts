import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const { VITE_APP_BASE } = process.env;

// https://vite.dev/config/
export default defineConfig({
  base: VITE_APP_BASE ?? "/",
  plugins: [react()],
});
