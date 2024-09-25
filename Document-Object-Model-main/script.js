// Change the text of the header using getElementById and innerHTML
function changeText() {
    document.getElementById("header").innerHTML = "You have changed the header text!";
}

// Change the color of the paragraph using getElementsByClassName and style property
function changeColor() {
    let paragraphs = document.getElementsByClassName("content");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "red";
    }
}

// Move the paragraph using getElementsByTagName and style property
function moveParagraph() {
    let paragraphs = document.getElementsByTagName("p");
    if (paragraphs.length > 0) {
        paragraphs[0].style.position = "relative";
        paragraphs[0].style.top = "200px";
    }
}

// Change the image source using getElementById
function changeImage() {
    document.getElementById("myImage").src = "image2.jpeg";
}
