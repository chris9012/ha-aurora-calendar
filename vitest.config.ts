import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    include: ["tests/frontend/**/*.test.ts"],
    coverage: {
      include: ["src/**/*.ts"],
      exclude: ["src/**/*.test.ts", "src/aurora-calendar-card.ts"],
    },
  },
});
