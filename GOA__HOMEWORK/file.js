const fs = require('fs');
const path = require('path');

// Function to create folders with conditional naming logic
function createFolderStructure(startLevel, endLevel) {
    for (let i = startLevel; i <= endLevel; i++) {
        let levelFolderName;

        // Determine folder naming based on level
        if (i >= 106 && i <= 108) {
            levelFolderName = `Level ${i.toString().padStart(2, '0')} Algorithms and AI`;
        } else {
            levelFolderName = `Level ${i}`;
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

        // Determine folder naming based on level
        if (i >= 106 && i <= 108) {
            levelFolderName = `Level ${i.toString().padStart(2, '0')} Algorithms and AI`;
        } else {
            levelFolderName = `Level ${i}`;
        }

        const levelFolderPath = path.join(__dirname, levelFolderName);

        // Delete the level folder if it exists
        if (fs.existsSync(levelFolderPath)) {
            fs.rmSync(levelFolderPath, { recursive: true, force: true });
            console.log(`Deleted folder: ${levelFolderName}`);
        } else {
            console.log(`Folder not found: ${levelFolderName}`);
        }
    }
}

// Example usage
const startLevelCreate = 108; // Set the starting level for creation
const endLevelCreate = 120; // Set the ending level for creation

// Uncomment to create folders
// createFolderStructure(startLevelCreate, endLevelCreate);

// Example usage for deletion
const startLevelDelete = 108; // Set the starting level for deletion
const endLevelDelete = 120; // Set the ending level for deletion

// Uncomment to delete folders
deleteFolderStructure(startLevelDelete, endLevelDelete);
