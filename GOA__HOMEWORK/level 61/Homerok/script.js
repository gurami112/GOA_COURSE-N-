
const changeStyleButton = document.getElementById('changeStyleButton');

changeStyleButton.addEventListener('click', function() {
    const contentDiv = document.getElementById('content');

    contentDiv.style.backgroundColor = '#ffcccc';
    contentDiv.style.color = '#333';
    contentDiv.style.border = '2px solid #ff0000';
});
