const track = document.getElementById("image-gallery-id");

window.onmousedown = e => {
    e.clientX;
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * 2000;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    nextPercentageForImage = (parseFloat(track.dataset.prevPercentage) + (percentage)) / 15;
    console.log("nextPercentageImage = " + nextPercentageForImage);

    track.dataset.percentage = nextPercentage;

    track.scrollLeft = nextPercentage;

    for(const image of track.getElementsByClassName("gallery-image")){
        image.style.objectPosition = `${nextPercentageForImage}% 50%`;
    }
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

function directToInsta(){
    window.open("https://www.instagram.com", "_blank");
}

function directToMail(){
    window.open("https://mail.google.com", "_blank");
}
