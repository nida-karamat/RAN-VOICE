const fs = require("fs");
const path = require("path");

const inputFolder = "src/assets/Images";
const outputFile = "src/assets/images.js";

let allImages = [];

function scanFolder(folder) {
  const files = fs.readdirSync(folder, { withFileTypes: true });
  files.forEach((file) => {
    const filePath = path.join(folder, file.name);
    if (file.isDirectory()) {
      scanFolder(filePath);
    } else {
      const ext = path.extname(file.name).toLowerCase();
      if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
        const relativePath = filePath.replace(/\\/g, "/").replace(/^src\//, "/");
        allImages.push(relativePath);
      }
    }
  });
}

scanFolder(inputFolder);

const fileContent = `// Auto-generated image paths\nexport const images = [\n${allImages
  .map((img) => `  "${img}"`)
  .join(",\n")}\n];\n`;

fs.writeFileSync(outputFile, fileContent, "utf-8");
console.log(`✅ Image list generated at ${outputFile}`);
