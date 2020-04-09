let canvas = document.getElementById('cnv');
let ctx = canvas.getContext('2d');

const Pi = Math.PI;


function bigCircle() {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#34648e';
  ctx.arc(250, 250, 230, 0, Pi*2, false);
  ctx.stroke();
}


function smallCircle() {
  ctx.beginPath();
  ctx.lineWidth = 1;  
  ctx.fillStyle = '#0294bf';
  ctx.arc(170, 170, 30, 0, Pi*2, false);
  ctx.stroke();
  ctx.fill();
}


bigCircle();
smallCircle();



