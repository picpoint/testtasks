let canvas = document.getElementById('cnv1');                                                        // элемент канвас на странице
let ctx = canvas.getContext('2d');                                                                   // контекст канваса

const Pi = Math.PI;                                                                                  // константа Пи для окружности


class DrawCircles {                                                                                  // класс для рисования окружностей
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  bigCircle() {                                                                                      // метод рисования большой окружности
    this.ctx.beginPath();                                                                            // начинаем путь 
    this.ctx.lineWidth = 3;                                                                          // ширина линии
    this.ctx.strokeStyle = '#34648e';                                                                // цвет
    this.ctx.arc(250, 250, 230, 0, Pi*2, false);                                                     // рисуем окружность с параметрами центра 250-250 радиусом 230 и полный оборот
    this.ctx.closePath();                                                                            // закрываем путь
    this.ctx.stroke();                                                                               // обводим
  }
  
  smallCircle(x, y) {                                                                                // метод рисования малой окружности
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;  
    this.ctx.fillStyle = '#0294bf';
    this.ctx.arc(x, y, 25, 0, Pi*2, false);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }

  makeDraw() {                                                                                        // метод рисования
    this.canvas.addEventListener('mousemove', (e) => {                                                // вешаем событие на движение мыши
      let x = e.offsetX;                                                                              // получаем координаты курсора по Х
      let y = e.offsetY;                                                                              // получаем координаты курсора по Y
      this.ctx.clearRect(0, 0, 500, 500);                                                             // очищаем область размером 500х500
      this.smallCircle(x - 20, y - 20);                                                               // малый круг находится над курсором
      this.bigCircle();                                                                               // рисуем большую окружность
      this.ctx.clip();                                                                                // вычитаем малую окружность из большой
    });
  }

}


let drws = new DrawCircles(canvas, ctx);                                                              // применяем класс
drws.bigCircle();
drws.smallCircle(170, 170);
drws.makeDraw();

