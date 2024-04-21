export default {
  input: "src/index.js",
  output: ["esm", "cjs"].map((format) => ({
    name: "wuji-ui",
    format,
    dir: "dist",
    entryFileNames: `wuji-ui-utils.[format].js`,
    preserveModulesRoot: "src",
  })),
  plugins: [],
};
