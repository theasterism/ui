import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { publish } from "@tanstack/config/publish";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

await publish({
  packages: [
    {
      name: "@theanalogcompany/orphos",
      packageDir: "packages/orphos",
    },
  ],
  branchConfigs: {
    production: {
      prerelease: false,
    },
    dev: {
      prerelease: true,
    },
  },
  rootDir: resolve(__dirname, ".."),
  branch: process.env.BRANCH,
  tag: process.env.TAG,
  ghToken: process.env.GH_TOKEN,
});
