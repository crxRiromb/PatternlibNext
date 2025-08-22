import fs from "fs";
import path from "path";

type CleanMode = "build" | "install" | "all";

/**
 * Searches for and deletes target files/folders
 * based on the specified mode.
 * @param directory The current directory
 * @param mode The mode ('build', 'install' or 'all')
 */
function cleanWorkspace(directory: string, mode: CleanMode): void {
  const entries = fs.readdirSync(directory);

  for (const entry of entries) {
    const fullPath = path.join(directory, entry);

    try {
      const stats = fs.lstatSync(fullPath);

      if (stats.isDirectory()) {
        const isNodeModules = entry === "node_modules";
        const isDist = entry === "dist";

        if ((mode === "install" || mode === "all") && isNodeModules) {
          console.log(`🗑️ Deleting installation folder: ${fullPath}`);
          fs.rmSync(fullPath, { recursive: true, force: true });
        } else if ((mode === "build" || mode === "all") && isDist) {
          console.log(`🗑️ Deleting build folder: ${fullPath}`);
          fs.rmSync(fullPath, { recursive: true, force: true });
        } else {
          cleanWorkspace(fullPath, mode);
        }
      } else if (stats.isFile()) {
        const isPackageLock = entry === "package-lock.json";
        const isTgz = entry.endsWith(".tgz");

        if ((mode === "install" || mode === "all") && isPackageLock) {
          console.log(`🗑️ Deleting installation file: ${fullPath}`);
          fs.unlinkSync(fullPath);
        } else if ((mode === "build" || mode === "all") && isTgz) {
          console.log(`🗑️ Deleting build file: ${fullPath}`);
          fs.unlinkSync(fullPath);
        }
      }
    } catch (error) {
      console.error(`Error processing ${fullPath}:`, error);
    }
  }
}

const mode = (process.argv[2] as CleanMode) || "all";

if (!["build", "install", "all"].includes(mode)) {
  console.error(
    '❌ Invalid argument! Valid options are: "build", "install" or "all" (default).',
  );
  process.exit(1);
}

const startPath = process.cwd();
console.log(
  `🚀 Starting cleanup in mode "${mode}" for directory: ${startPath}`,
);

try {
  cleanWorkspace(startPath, mode);
  console.log("✅ Cleanup completed successfully!");
} catch (error) {
  console.error("An unexpected error occurred:", error);
}
