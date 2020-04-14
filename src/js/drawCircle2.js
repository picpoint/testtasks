let canvas2 = document.getElementById('cnv2');
let ctx2 = canvas.getContext('2d');

//const Pi = Math.PI;


class DrawCircles2 {
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
      
      console.log('------------');
      console.log(`X - ${x}`);
      console.log(`Y - ${y}`);
      console.log('------------');

      this.ctx.clearRect(0, 0, 500, 500);
      
      if(x < 250 - 180) {
        x = 50;        
        console.log(`X < 70 == ${x}`);
        console.log(`Y < 470 == ${y}`);
        this.smallCircle(x, y);
      } else if(x > 470) {
        x = 450;                
        console.log(`X < 70 == ${x}`);
        console.log(`Y < 470 == ${y}`);
        this.smallCircle(x, y);
      } else if(y < 70) {
        y = 50;
        console.log(`X < 70 == ${x}`);
        console.log(`Y < 470 == ${y}`);
        this.smallCircle(x, y);
      } else if(y > 470) {
        y = 450;
        console.log(`X < 70 == ${x}`);
        console.log(`Y < 470 == ${y}`);
        this.smallCircle(x, y);
      } else {
        console.log(`X < 70 == ${x}`);
        console.log(`Y < 470 == ${y}`);
        this.smallCircle(x - 20, y - 20);
      }
      
      this.bigCircle();      
      
    });
  }

}


let drws2 = new DrawCircles2(canvas2, ctx2);
drws2.bigCircle();
drws2.smallCircle(170, 170);
drws2.makeDraw();

