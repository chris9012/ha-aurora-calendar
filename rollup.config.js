import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { copyFileSync } from "fs";

const HA_DEST = String.raw`\\homeassistant\config\custom_components\aurora_calendar\aurora-calendar-card.js`;
const BUILT_FILE = "custom_components/aurora_calendar/aurora-calendar-card.js";

function deployToHA() {
  return {
    name: "deploy-to-ha",
    writeBundle() {
      try {
        copyFileSync(BUILT_FILE, HA_DEST);
        console.log("✓ Deployed to HA custom_components — hard refresh browser to see changes");
      } catch (e) {
        console.warn(`⚠ HA deploy skipped: ${e.message}`);
      }
    },
  };
}

export default {
  input: "src/aurora-calendar-card.ts",
  output: {
    file: "custom_components/aurora_calendar/aurora-calendar-card.js",
    format: "es",
    inlineDynamicImports: true,
  },
  plugins: [
    resolve(),
    typescript({ tsconfig: "./tsconfig.json" }),
    deployToHA(),
  ],
  // Suppress circular dependency warnings from Lit internals
  onwarn(warning, warn) {
    if (warning.code === "CIRCULAR_DEPENDENCY") return;
    warn(warning);
  },
};
