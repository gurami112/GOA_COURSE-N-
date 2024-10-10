let fileNames = ["image1.jpg", "document.pdf", "image2.jpg", "notes.txt", "photo.jpg"];
let jpgFiles = fileNames.filter(function(file) {
    return file.endsWith(".jpg");
});

console.log(jpgFiles);
