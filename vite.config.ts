import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@img": path.resolve(__dirname, "./src/assets/img"),
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@firebaseConfig": path.resolve(__dirname, "./src/firebase"),
      "@services": path.resolve(__dirname, "./src/services")
    }
  }
});
