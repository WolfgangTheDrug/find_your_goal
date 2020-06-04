const palette = {
    yellow: "#FFFF66",
    blue: "#00FEFC",
    brown: "#494738",
    pink: "#AEAC9A"
}

const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.fillStyle = palette.brown;
ctx.fillRect(0, 0, canvas.width, canvas.height);

const goalSize = .01 * Math.ceil(canvas.width);
// The goal will be a square with side length being equal to 1% of the window's width.

ctx.beginPath();
ctx.fillStyle = palette.yellow;
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.stroke();

function mouseClickPosition(e) {
    console.log(e.clientX, e.clientY);
}

canvas.addEventListener("click", mouseClickPosition);
