let planone = document.querySelector('.wrp__planone');                                                                 // первый блок LICENSE PLAN #1
let plantwo = document.querySelector('.wrp__plantwo');                                                                 // второй блок LICENSE PLAN #2
let planthree = document.querySelector('.wrp__planthree');                                                             // третий блок LICENSE PLAN #3
let arrplans = [planone, plantwo, planthree];                                                                          // массив блоков LICENSE PLAN #1/#2/#3
let slct = document.querySelector('.wrp__slct');                                                                       // тег select выбор количества лицензий
let selectedplantext1 = document.querySelector('.wrp__selectedplan').firstElementChild;                                // нижний текст показывающий надпись Selected plan
let selectedplantext2 = document.querySelector('.wrp__selectedplan').lastElementChild;                                 // нижний текст показывающий номер выбраттного плана #1/#2/#3
let totalPrice = document.querySelector('.wrp__price').lastElementChild;                                               // кнопка в которой отображается итоговая сумма
let buy = document.querySelector('.wrp__buy').firstElementChild;                                                       // кнопка купить
let url = 'https://raw.githubusercontent.com/picpoint/testtasks/master/datas.json';                                    // url откуда считывает json-файл
let obj;
let urlToOpen;
let numbofplan;
let selectValue = 1;        



window.addEventListener('load', () => {                                                                                // события загрузки страницы
  let xhr = new XMLHttpRequest();                                                                                      // |- при данном событии происзодит ajax запрос на сервер
  xhr.responseType = 'json';                                                                                           // |- и считывание данных
  xhr.open('GET', url);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
      obj = xhr.response;

      for(let i = 0; i < obj.nol.length; i++) {                                                                        // перебираем весь объект
        let option = document.createElement('option');                                                                 // по количеству данных, создаём тег option
        option.value = obj.nol[i];                                                                                     // value присваиваем i-е значение
        option.innerHTML = obj.nol[i];                                                                                 // так же i-е значение вставляем внутрь
        slct.appendChild(option);                                                                                      // option вставляем в select
      }
    }
  });  
  
  xhr.send(); 
});




class BuyLicens {                                                                                                       // класс для покупки лицензии
  constructor(massplans, blockPlan, slct, btnbuy) {                                                                             // в конструктор передаём массив блоков, 
    this.massplans = massplans;                                                                                         // |- конкретный блок и select 
    this.blockPlan = blockPlan;
    this.slct = slct;
    this.btnbuy = btnbuy;
  }


  selectMethod() {
    this.blockPlan.addEventListener('click', (e) => {                                                                   // вешаем событие на конкретную кнопку
      for(let i = 0; i < this.massplans.length; i++) {                                                                  // перебераем массив блоков
        this.massplans[i].style.backgroundColor = '#f8f8f8';                                                            // каждому применяем оформление не активное
        this.massplans[i].style.border = 'none';        
        
        if(this.blockPlan == e.currentTarget) {                                                                         // если блок это тот по которому кликнули, 
          this.blockPlan.style.backgroundColor = '#ebf4f7';                                                             // |- применяем фон и рамку активного
          this.blockPlan.style.border = '1px solid #b8d7e2';                    
          selectedplantext1.innerText = 'Selected plan: ';                                                              // в нижнюю надпись вставляем текст выбранного плана 
          numbofplan = e.currentTarget.firstElementChild.lastElementChild.firstElementChild.innerHTML;          
          selectedplantext2.innerText = numbofplan.substr(13);                                                          // выделяем подстроку с номером плана и вставляем в 
        }                                                                                                               // |- нижнюю надпись
      }
      
      numbofplan = numbofplan.substr(14);                                                                               // присваиваем переменной numbofplan номер плана
      
      this.slct.addEventListener('click', () => {                                                                       // вещаем на select событие
        selectValue = this.slct.value;                                                                                  // переменной selectValue присваиваем значение из списка
      });      

      if(numbofplan == 1) {                                                                                             // если выбранный план 1 - в поле TOTAL:
        totalPrice.innerHTML = '$' + 13 * selectValue;                                                                  // |- вставляем определённое значение
      } else if(numbofplan == 2) {                                                                                      // |- и т.д. для каждого
        totalPrice.innerHTML = '$' + 22 * selectValue;        
      } else if(numbofplan == 3) {
        totalPrice.innerHTML = '$' + 34 * selectValue;        
      }

      let sup = document.createElement('sup');                                                                          // создаём элемент sup
      sup.style.fontSize = '1rem';
      totalPrice.insertAdjacentHTML('beforeEnd', '<sup>US</sup>');                                                      // вставляем внутрь элемента в конец            
    });
  }



  followOnLink() {
    this.btnbuy.addEventListener('click', (e) => {    
      let url = new URL('https://someserver.ru');
      let urlParams = url.searchParams;
      urlParams.append('number_of_plan', numbofplan);
      urlParams.append('select_value', selectValue);            
      urlToOpen = url.href;        
      window.open(urlToOpen, '_blank');    
    });
  }


}




let pln1 = new BuyLicens(arrplans, planone, slct, buy);
pln1.selectMethod();
pln1.followOnLink();

let pln2 = new BuyLicens(arrplans, plantwo, slct, buy);
pln2.selectMethod();
pln2.followOnLink();

let pln3 = new BuyLicens(arrplans, planthree, slct, buy);
pln3.selectMethod();
pln3.followOnLink();