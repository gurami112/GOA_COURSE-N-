const fs = require('fs');
const path = require('path');

// Function to create folders
function createFolderStructure(startLevel, endLevel) {
    for (let i = startLevel; i <= endLevel; i++) {
        let levelFolderName;

        // Naming logic
        if (i === 108) {
            levelFolderName = `Level ${i}`; // Level 108 without "Algorithms and AI"
        } else if (i >= 106 && i <= 107) {
            levelFolderName = `Level ${i.toString().padStart(2, '0')} Algorithms and AI`; // Levels 106 and 107 with "Algorithms and AI"
        } else {
            levelFolderName = `Level ${i}`; // Other levels
        }

        const levelFolderPath = path.join(__dirname, levelFolderName);

        // Create the level folder if it doesn't exist
        if (!fs.existsSync(levelFolderPath)) {
            fs.mkdirSync(levelFolderPath);
            fs.mkdirSync(path.join(levelFolderPath, 'Classwork'));
            fs.mkdirSync(path.join(levelFolderPath, 'Homework'));

            // Create app.js in both Classwork and Homework folders
            fs.writeFileSync(path.join(levelFolderPath, 'Classwork', 'app.js'), '// Classwork app.js');
            fs.writeFileSync(path.join(levelFolderPath, 'Homework', 'app.js'), '// Homework app.js');

            console.log(`Created folder: ${levelFolderName}`);
        } else {
            console.log(`Folder already exists: ${levelFolderName}`);
        }
    }
}

// Function to delete folders
function deleteFolderStructure(startLevel, endLevel) {
    for (let i = startLevel; i <= endLevel; i++) {
        let levelFolderName;

        // Naming logic for deletion
        if (i === 108) {
            levelFolderName = `Level ${i}`; // Level 108 without "Algorithms and AI"
        } else if (i >= 106 && i <= 107) {
            levelFolderName = `Level ${i.toString().padStart(2, '0')} Algorithms and AI`; // Levels 106 and 107 with "Algorithms and AI"
        } else {
            levelFolderName = `Level ${i}`; // Other levels
        }

        const levelFolderPath = path.join(__dirname, levelFolderName);

        // Check if the directory exists
        if (fs.existsSync(levelFolderPath)) {
            // Remove the directory and its contents
            fs.rmSync(levelFolderPath, { recursive: true, force: true });
            console.log(`Deleted folder: ${levelFolderName}`);
        } else {
            console.log(`Folder not found: ${levelFolderName}`);
        }
    }
}

// Main function to choose action
function main(action, startLevel, endLevel) {
    if (action === 'create') {
        createFolderStructure(startLevel, endLevel);
    } else if (action === 'delete') {
        deleteFolderStructure(startLevel, endLevel);
    } else {
        console.log('Invalid action. Use "create" or "delete".');
    }
}

// Customize your action and levels here
const action = 'delete'; // Change to 'delete' to remove folders
const startLevel = 109; // Starting level for create or delete
const endLevel = 120; // Ending level for create or delete

main(action, startLevel, endLevel);
