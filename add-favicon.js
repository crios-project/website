const fs = require('fs');
const path = require('path');

const faviconCode = `
  <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <meta name="apple-mobile-web-app-title" content="Crios" />
  <link rel="manifest" href="/site.webmanifest" />
`;

function updateHtmlFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      updateHtmlFiles(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (!content.includes('favicon-96x96.png')) {
        content = content.replace(
          /<head([^>]*)>/i,
          `<head$1>\n${faviconCode}`
        );
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
      }
    }
  });
}

updateHtmlFiles('/Users/dhaikage/Downloads/Website');