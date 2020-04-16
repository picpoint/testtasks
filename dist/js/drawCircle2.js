let canvas2 = document.getElementById('cnv2');                                                    // второй канвас во втором окне
let ctx2 = canvas2.getContext('2d');                                                              // получаем контекст



class DrwCrcl extends DrawCircles {                                                               // класс DrwCrcl расширяем на основе старого класса DrawCircles
  constructor(canvas, ctx) {
    super();
    this.canvas = canvas;
    this.ctx = ctx;
  }


  makeDraw() {                                                                                    // метод рисования
    this.canvas.addEventListener('mousemove', (e) => {                                            // вешаем событие по движению мыши
      let x = e.offsetX;
      let y = e.offsetY;              

      this.ctx.clearRect(0, 0, 500, 500);
      
      if(x < 70) {                                                                                // условия не выхода за границу круга
        x = 50;                
        this.smallCircle(x, y);
      } else if(x > 470) {
        x = 450;                        
        this.smallCircle(x, y);
      } else if(y < 70) {
        y = 50;        
        this.smallCircle(x, y);
      } else if(y > 470) {
        y = 450;        
        this.smallCircle(x, y);
      } else {        
        this.smallCircle(x - 20, y - 20);
      }
      
      this.bigCircle();      
      
    });
  }

}


let drws2 = new DrwCrcl(canvas2, ctx2);                                                           // применяем класс
drws2.bigCircle();
drws2.smallCircle(170, 170);
drws2.makeDraw();

