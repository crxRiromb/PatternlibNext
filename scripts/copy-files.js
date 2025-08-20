const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");

// 1. Read command line arguments
const sourcePattern = process.argv[2]; // e.g. 'package.json' or 'src/**/*.css'
const destDir = process.argv[3]; // e.g. 'dist'

// 2. Check if arguments are present
if (!sourcePattern || !destDir) {
  console.error(
    "❌ Error: Please provide a source pattern and a destination directory.",
  );
  console.error(
    "Usage: node copy-files.js <source-pattern> <destination-directory>",
  );
  process.exit(1);
}

// 3. Find all files matching the source pattern
const sourceDir = path.dirname(sourcePattern);
const filePattern = path.basename(sourcePattern);
const files = globSync(filePattern, {
  cwd: sourceDir === "." ? process.cwd() : sourceDir,
  nodir: true,
});

if (files.length === 0) {
  console.error(`❌ Error: No files found matching "${sourcePattern}".`);
  process.exit(1);
}

// 4. Create the destination directory if it doesn't exist
fs.mkdirSync(destDir, { recursive: true });

// 5. Copy each found file
for (const filename of files) {
  const sourcePath = path.join(sourceDir === "." ? "" : sourceDir, filename);
  const destPath = path.join(destDir, path.basename(filename)); // Use basename to avoid copying folder structure

  try {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✅ Copied ${sourcePath} -> ${destPath}`);
  } catch (error) {
    console.error(`❌ Error copying ${filename}: ${error.message}`);
    process.exit(1);
  }
}

console.log("✨ All files copied successfully.");
