let planone = document.querySelector('.wrp__planone');
let plantwo = document.querySelector('.wrp__plantwo');
let planthree = document.querySelector('.wrp__planthree');
let checkblockone = document.querySelector('.wrp__checkblockone');
let arrplans = [planone, plantwo, planthree];
let slct = document.querySelector('.wrp__slct');
let selectedplantext1 = document.querySelector('.wrp__selectedplan').firstElementChild;                                 // нижний текст показывающий выбранный план
let selectedplantext2 = document.querySelector('.wrp__selectedplan').lastElementChild;
let totalPrice = document.querySelector('.wrp__price').lastElementChild;                                                // кнопка в которой отображается итоговая сумма
let url = 'https://raw.githubusercontent.com/picpoint/testtasks/master/datas.json';
let obj;



window.addEventListener('load', () => {
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', url);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
      obj = xhr.response;

      for(let i = 0; i < obj.nol.length; i++) {        
        let option = document.createElement('option');
        option.value = obj.nol[i];
        option.innerHTML = obj.nol[i];
        slct.appendChild(option);
      }
    }
  });  
  
  xhr.send(); 
});



class BuyLicens {
  constructor(massplans, blockPlan, slct) {
    this.massplans = massplans;
    this.blockPlan = blockPlan;
    this.slct = slct;
  }

  selectMethod() {
    let numbofplan;
    let selectValue;

    this.blockPlan.addEventListener('click', (e) => {
      for(let i = 0; i < this.massplans.length; i++) {                
        this.massplans[i].style.backgroundColor = '#f8f8f8';
        this.massplans[i].style.border = 'none';        
        
        if(this.blockPlan == e.currentTarget) {
          this.blockPlan.style.backgroundColor = '#ebf4f7';
          this.blockPlan.style.border = '1px solid #b8d7e2';                    
          selectedplantext1.innerText = 'Selected plan: ';
          numbofplan = e.currentTarget.firstElementChild.lastElementChild.firstElementChild.innerHTML;          
          selectedplantext2.innerText = numbofplan.substr(13);          
          //console.log(numbofplan);
        }
      }      
      
      numbofplan = numbofplan.substr(14);
      console.log(numbofplan);

      if(numbofplan == 1) {
        totalPrice.innerText = '$ 13';
      } else if(numbofplan == 2) {
        totalPrice.innerText = '$ 22';
      } else if(numbofplan == 3) {
        totalPrice.innerText = '$ 34';
      }
      

    });    

    this.slct.addEventListener('click', () => {
      //console.log(this.slct.value);      
      selectValue = this.slct.value;
      console.log(selectValue);
    });


  }




}


let pln1 = new BuyLicens(arrplans, planone, slct);
pln1.selectMethod();

let pln2 = new BuyLicens(arrplans, plantwo, slct);
pln2.selectMethod();

let pln3 = new BuyLicens(arrplans, planthree, slct);
pln3.selectMethod();