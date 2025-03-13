const canvas = document.getElementById("ok");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawBackground();
}


function drawBackground() {

    ctx.fillStyle = "rgb(30, 60, 255)";
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.8, 0); 
    ctx.lineTo(canvas.width, 0); 
    ctx.lineTo(canvas.width, canvas.height * 0.30); 
    ctx.lineTo(canvas.width*0.9,canvas.height*0.41)
    ctx.lineTo(canvas.width,canvas.height*0.52)
    ctx.lineTo(canvas.width,canvas.height*0.9)
    ctx.lineTo(canvas.width*0.514,canvas.height*0.578)
    ctx.lineTo(canvas.width*0.514,canvas.height*0.217)

    ctx.fill();

}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
