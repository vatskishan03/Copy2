import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the output dir from dist to build
  build: {
    outDir: "build",
  },
  plugins: [tsconfigPaths(), react()],
});
