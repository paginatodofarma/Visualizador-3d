const fs = require('fs');
const path = require('path');

const modelosDir = path.resolve(__dirname, 'Modelos');
const outFile = path.resolve(__dirname, 'modelos.json');

if (!fs.existsSync(modelosDir)) {
    console.error('Carpeta Modelos no existe:', modelosDir);
    process.exit(1);
}

const modelFiles = fs.readdirSync(modelosDir)
    .filter((file) => file.toLowerCase().endsWith('.glb'))
    .map((file) => path.basename(file, path.extname(file)));

fs.writeFileSync(outFile, JSON.stringify(modelFiles, null, 2));
console.log('modelos.json generado con', modelFiles.length, 'modelos');
