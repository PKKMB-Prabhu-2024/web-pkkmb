import path from "path";
import { sync } from "glob";

/** @type {import('vite').UserConfig} */
export default {
  root: "./src",
  build: {
    outDir: "./public",
    emptyOutDir: true
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") }
    ]
  }
}