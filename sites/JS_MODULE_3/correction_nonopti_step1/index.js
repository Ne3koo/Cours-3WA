let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let y = 0;
let direction = 1;

function moveBall() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.arc(100, y, 10, 0, 2 * Math.PI);
    ctx.fill();

    if (y + 10 >= 200) {
        direction = -1;
    }
    else if (y - 10 <= 0) {
        direction = 1;
    }

    y = y + 1 * direction;
    let anim = window.requestAnimationFrame(moveBall);
}

moveBall();
