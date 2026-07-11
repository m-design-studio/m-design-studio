let images = {

    menu: [
        "29af5ac23852679ebae26fa65d20f424.png",
        "2aa79027847b705c280faafd32b65841.jpeg",
        "bf3114097cccc4bfcb4b6cf27e623d23.png",
        "IMG_1155.jpeg"
    ],

    poster: [
        "IMG_1141.jpeg",
        "IMG_1144.jpeg",
        "IMG_1145.jpeg",
        "3932a3a1739259aff6223a195dff3ecf.png",
        "IMG_1166.jpeg"
    ],

    brand: [
        "469556c6f63d54e79171e0a62d780078.png",
    
    ],

    logo: [
        "IMG_1292.jpeg"
    ]

};


let currentImages = [];
let currentIndex = 0;


function openGallery(type) {

    currentImages = images[type];
    currentIndex = 0;

    document.getElementById("galleryImage").src = currentImages[currentIndex];

    document.getElementById("gallery").style.display = "flex";

}


function closeGallery() {

    document.getElementById("gallery").style.display = "none";

}


function nextImage() {

    currentIndex++;

    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }

    document.getElementById("galleryImage").src = currentImages[currentIndex];

}


function prevImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }

    document.getElementById("galleryImage").src = currentImages[currentIndex];

}