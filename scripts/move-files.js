const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");

/* Usage:
 * node move-files.js <source-pattern> <destination-directory>
 */

// 1. Read command line arguments
const sourcePattern = process.argv[2]; // e.g. 'dist/*.tgz'
const destDir = process.argv[3]; // e.g. '.'

// 2. Check if arguments are provided
if (!sourcePattern || !destDir) {
  console.error(
    "❌ Error: Please provide a source pattern and a destination directory.",
  );
  console.error(
    "Usage: node move-files.js <source-pattern> <destination-directory>",
  );
  process.exit(1);
}

// 3. Find all files matching the source pattern
const sourceDir = path.dirname(sourcePattern); // e.g. 'dist'
const filePattern = path.basename(sourcePattern); // e.g. '*.tgz'
const files = globSync(filePattern, { cwd: sourceDir });

if (files.length === 0) {
  console.error(`❌ Error: No files found matching "${sourcePattern}".`);
  process.exit(1);
}

// 4. Create the destination directory if it doesn't exist
fs.mkdirSync(destDir, { recursive: true });

// 5. Move each found file
for (const filename of files) {
  const sourcePath = path.join(sourceDir, filename);
  const destPath = path.join(destDir, filename);

  try {
    fs.renameSync(sourcePath, destPath);
    console.log(`✅ Moved ${sourcePath} -> ${destPath}`);
  } catch (error) {
    console.error(`❌ Error moving ${filename}: ${error.message}`);
    process.exit(1);
  }
}

console.log("✨ All files moved successfully.");
