let canvas2 = document.getElementById('cnv2');
let ctx2 = canvas2.getContext('2d');



class DrwCrcl extends DrawCircles {
  constructor(canvas, ctx) {
    super();
    this.canvas = canvas;
    this.ctx = ctx;
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


let drws2 = new DrwCrcl(canvas2, ctx2);
drws2.bigCircle();
drws2.smallCircle(170, 170);
drws2.makeDraw();

