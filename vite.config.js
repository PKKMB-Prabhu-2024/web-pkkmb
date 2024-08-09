import path from "path";
import { sync } from "glob";

/** @type {import('vite').UserConfig} */
export default {
  root: "./src",
  build: {
    outDir: path.resolve(__dirname, "./public"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve('src/index.html'),
        "ormawa-fakultas": path.resolve('src/ormawa-fakultas/index.html'),
        "ormawa-universitas": path.resolve('src/ormawa-universitas/index.html'),
        sejarah: path.resolve('src/sejarah/index.html'),
        "virtual-tour": path.resolve('src/virtual-tour/index.html'),
      }
    }
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") }
    ]
  }
}