import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/blog/", // 👈 this line is the key
  plugins: [react()],
});
