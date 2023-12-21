const fs = require('fs');
const path = require('path');

const createFolder = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`Created folder: ${folderPath}`);
  } else {
    console.log(`Folder already exists: ${folderPath}`);
  }
};

const createFile = (filePath, content) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`Created file: ${filePath}`);
  } else {
    console.log(`File already exists: ${filePath}`);
  }
};

// Define folder structure
const folderStructure = [
  'sass',
  'sass/base',
  'sass/components',
  'sass/layout',
  'sass/pages',
  'sass/sass-utils',
  'sass/vendors',
];

// Create folders
folderStructure.forEach((folder) => createFolder(folder));

// Create files with initial content
createFile('sass/base/_reset.scss', '');
createFile('sass/base/_typography.scss', '');

createFile('sass/components/_buttons.scss', '');
createFile('sass/components/_carousel.scss', '');
createFile('sass/components/_cover.scss', '');
createFile('sass/components/_dropdown.scss', '');

createFile('sass/layout/_navigation.scss', '');
createFile('sass/layout/_grid.scss', '');
createFile('sass/layout/_header.scss', '');
createFile('sass/layout/_footer.scss', '');
createFile('sass/layout/_sidebar.scss', '');
createFile('sass/layout/_forms.scss', '');

createFile('sass/pages/_home.scss', '');
createFile('sass/pages/_contact.scss', '');

createFile('sass/sass-utils/_variables.scss', '');
createFile('sass/sass-utils/_functions.scss', '');
createFile('sass/sass-utils/_mixins.scss', '');
createFile('sass/sass-utils/_helpers.scss', '');

createFile('sass/vendors/_bootstrap.scss', '');
createFile('sass/vendors/_jquery-ui.scss', '');

createFile('sass/style.scss', '');

console.log('Folder structure and files created successfully!');
