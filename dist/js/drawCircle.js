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
  ctx.arc(x, y, 30, 0, Pi*2, false);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}


bigCircle();
smallCircle(170, 170);


canvas.addEventListener('mousemove', (e) => {  
  let x = e.offsetX;
  let y = e.offsetY;
  
  // console.log(`X - ${x}`);
  // console.log(`Y - ${y}`);


  if(x > 130 && y > 130) {        
    smallCircle(190, 190);    
  }
  

  ctx.beginPath();


});
