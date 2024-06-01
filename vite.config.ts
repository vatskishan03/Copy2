import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the output dir from dist to build
  // Comment this out if that isn't relevant for your project
  build: {
    outDir: "build",
  },
  plugins: [tsconfigPaths(), react()],
});
