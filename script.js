document.getElementById('redButton').addEventListener("click", (e) => {
    openWindow('colours/red.html');
});

document.getElementById('greenButton').addEventListener("click", (e) => {
    openWindow('colours/green.html');
});

document.getElementById('blueButton').addEventListener("click", (e) => {
    openWindow('colours/blue.html');
});

document.getElementById('purpleButton').addEventListener("click", (e) => {
    openWindow('colours/purple.html');
});

document.getElementById('orangeButton').addEventListener("click", (e) => {
    openWindow('colours/orange.html');
});

document.getElementById('yellowButton').addEventListener("click", (e) => {
    openWindow('colours/yellow.html');
});

document.getElementById('pinkButton').addEventListener("click", (e) => {
    openWindow('colours/pink.html');
});

document.getElementById('blackButton').addEventListener("click", (e) => {
    openWindow('colours/black.html');
});

document.getElementById('whiteButton').addEventListener("click", (e) => {
    openWindow('colours/white.html');
});

randomColor()

function openWindow(colour) {
    var colour;

    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=0,height=0,left=-1000,top=-1000`;
    
    open(`/${colour}`, "SolidColour", params);
}