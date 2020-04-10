let canvas = document.getElementById('cnv');
let ctx = canvas.getContext('2d');

const Pi = Math.PI;


function bigCircle() {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#34648e';
  ctx.arc(250, 250, 230, 0, Pi*2, false);
  ctx.closePath();  
  ctx.stroke();
}


function smallCircle(x, y) {
  ctx.beginPath();
  ctx.lineWidth = 1;  
  ctx.fillStyle = '#0294bf';
  ctx.arc(x, y, 25, 0, Pi*2, false);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}


function randValue() {
  return Math.floor(Math.random() * 1000);  
}


bigCircle();
smallCircle(170, 170);




canvas.addEventListener('mousemove', (e) => {  
  let x = e.offsetX;
  let y = e.offsetY;
  
  console.log(`X - ${x}`);
  console.log(`Y - ${y}`);

  let randX = randValue();
  let randY = randValue();
  
  ctx.clearRect(0, 0, 500, 500);
    
  smallCircle(x - 20, y - 20);
  bigCircle();
  


});

