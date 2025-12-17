const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = "src/assets/Images"; // Root input folder
const outputFolder = "public/webp";      // Root output folder

// Function: recursive folder traversal
function convertFolder(src, dest) {
  // Create output folder if not exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src, { withFileTypes: true });

  files.forEach((file) => {
    const srcPath = path.join(src, file.name);
    const destPath = path.join(dest, file.name);

    if (file.isDirectory()) {
      // Subfolder → recursively call
      convertFolder(srcPath, destPath);
    } else {
      const ext = path.extname(file.name).toLowerCase();
      const baseName = path.basename(file.name, ext);

      if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
        // Convert image
        const outputFilePath = path.join(dest, baseName + ".webp");
        sharp(srcPath)
          .webp({ quality: 80 })
          .toFile(outputFilePath)
          .then(() =>
            console.log(`Converted: ${srcPath} → ${outputFilePath}`)
          )
          .catch((err) => console.error("Error:", err));
      }
    }
  });
}

// Start conversion
convertFolder(inputFolder, outputFolder);
