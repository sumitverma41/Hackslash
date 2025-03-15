const canvas = document.getElementById("ok");
const ctx = canvas.getContext("2d");

function resizecan() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawback();
}


function drawback() {

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

window.addEventListener("resize", resizecan);
resizecan();


let can = document.getElementById("final");
let c = can.getContext("2d");


function resize() {
    can.width = window.innerWidth;
    can.height = window.innerHeight;
    draw();
}
 function draw(){
    c.fillStyle = "rgba(245, 248, 250, 0.89)";
    c.moveTo(0,can.height*0.8);
    c.lineTo(can.width*0.5,0);
    c.lineTo(can.width,can.height*0.8);
    c.lineTo(can.width,can.height);
    c.lineTo(0,can.height);
    c.fill();
 }

resize();