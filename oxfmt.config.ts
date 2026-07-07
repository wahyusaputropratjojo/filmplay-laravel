import { defineConfig } from "oxfmt";

export default defineConfig({
  jsdoc: true,
  sortImports: true,
  sortPackageJson: {
    sortScripts: true,
  },
  sortTailwindcss: {
    functions: ["cva"],
  },
  svelte: {
    allowShorthand: true,
    indentScriptAndStyle: true,
    sortOrder: "options-scripts-markup-styles",
  },
  ignorePatterns: [".agents/**", ".github/**"],
});
