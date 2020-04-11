let canvas = document.getElementById('cnv');
let ctx = canvas.getContext('2d');

const Pi = Math.PI;


class DrawCircles {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  bigCircle() {
    this.ctx.beginPath();
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = '#34648e';
    this.ctx.arc(250, 250, 230, 0, Pi*2, false);
    this.ctx.closePath();  
    this.ctx.stroke();
  }
  
  smallCircle(x, y) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;  
    this.ctx.fillStyle = '#0294bf';
    this.ctx.arc(x, y, 25, 0, Pi*2, false);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }

  makeDraw() {
    this.canvas.addEventListener('mousemove', (e) => {  
      let x = e.offsetX;
      let y = e.offsetY;        
      
      this.ctx.clearRect(0, 0, 500, 500);
      this.smallCircle(x - 20, y - 20);
      this.bigCircle();
      
      
      
    });
  }

}


let drws = new DrawCircles(canvas, ctx);
drws.bigCircle();
drws.smallCircle(170, 170);
drws.makeDraw();

