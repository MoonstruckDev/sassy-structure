const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to create a folder
const createFolder = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`Created folder: ${folderPath}`);
  } else {
    console.log(`Folder already exists: ${folderPath}`);
  }
};

// Function to create a file
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
];

// Create folders
folderStructure.forEach((folder) => createFolder(folder));

// Ask the user if they want to create files
rl.question('Do you want to create scss files as well? (y/n): ', (answer) => {
  if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
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

    createFile('sass/style.scss', '');

    console.log('Files created successfully!');
  } else {
    console.log('No files were created.');
  }

  // Close the readline interface
  rl.close();
});

// Handle close event
rl.on('close', () => {
  console.log('Folder structure and files created successfully!');
  process.exit(0);
});
