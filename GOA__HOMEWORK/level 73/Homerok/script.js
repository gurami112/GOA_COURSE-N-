let posX = 0;
let posY = 0;
const maxPosX = 250;
const maxPosY = 250;
const container = document.getElementById('child');

function moveRight() {
    if (container && posX < maxPosX) {
        posX++;
        container.style.left = posX + 'px';
    }
}

function moveLeft() {
    if (container && posX > 0) {
        posX--;
        container.style.left = posX + '5px';
    }
}

function moveDown() {
    if (container && posY < maxPosY) {
        posY++;
        container.style.top = posY + '5px';
    }
}

function moveUp() {
    if (container && posY > 0) {
        posY--;
        container.style.top = posY + '5px';
    }
}

function handleKeyPress(event) {
    console.log(`Key pressed: ${event.key}`); // Log the key pressed
    if (event.key === 'ArrowRight') {
        moveRight();
    } else if (event.key === 'ArrowLeft') {
        moveLeft();
    } else if (event.key === 'ArrowDown') {
        moveDown();
    } else if (event.key === 'ArrowUp') {
        moveUp();
    }
}

document.addEventListener('keydown', handleKeyPress);
