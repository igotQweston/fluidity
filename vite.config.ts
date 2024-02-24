/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { checker } from "vite-plugin-checker"

export default defineConfig(() => {
  return {
    base: "./",
    build: {
      outDir: "build",
      rollupOptions: {
    input: './index.html', // adjust the path if needed
  }
    },
    plugins: [
      react(),
      checker({
        typescript: true,
        eslint: {
          lintCommand: "eslint ./src",
          dev: {
            logLevel: ["error"],
          },
        },
      }),
    ],
  }
})
