import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: [{ find: /^@\/(.*)/, replacement: "/src/$1" }],
  },
  test: {
    globals: true,
    coverage: {
      lines: 95,
      branches: 95,
      functions: 95,
    },
  },
});
