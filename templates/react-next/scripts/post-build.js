const fs = require('fs-extra');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const nextDir = path.join(outDir, '_next');
const newNextDir = path.join(outDir, 'next');
const indexHtml = path.join(outDir, 'index.html');

async function postBuild() {
  try {
    // 1. Rename out/_next to out/next
    if (await fs.pathExists(nextDir)) {
      await fs.rename(nextDir, newNextDir);
      console.log('Renamed _next directory to next.');
    }

    // 2. Read out/index.html
    let htmlContent = await fs.readFile(indexHtml, 'utf8');

    // 3. Replace all occurrences of /_next/ with /next/
    htmlContent = htmlContent.replace(/\/_next\//g, '/next/');
    console.log('Replaced /_next/ with /next/ in index.html.');

    // 4. Write the modified content back to out/index.html
    await fs.writeFile(indexHtml, htmlContent, 'utf8');
    console.log('Successfully updated index.html.');

  } catch (err) {
    console.error('Error during post-build script:', err);
    process.exit(1);
  }
}

postBuild();