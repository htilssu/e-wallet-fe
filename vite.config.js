import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      exposes: {
        Login: "src/components/auth/LoginForm.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "ESNext",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (
            id.includes("react-router-dom") ||
            id.includes("@remix-run") ||
            id.includes("react-router")
          ) {
            return "@react-router";
          }
        },
      },
    },
    cssCodeSplit: true,
  },
});
