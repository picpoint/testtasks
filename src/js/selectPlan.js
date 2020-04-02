let planone = document.querySelector('.wrp__planone');
let plantwo = document.querySelector('.wrp__plantwo');
let planthree = document.querySelector('.wrp__planthree');
let checkblockone = document.querySelector('.wrp__checkblockone');
let url = 'https://raw.githubusercontent.com/picpoint/testtasks/master/datas.json';
let slct = document.querySelector('.wrp__slct');
let obj;

console.log(slct);


window.addEventListener('load', () => {
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', url);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
      obj = xhr.response;

      for(let i = 0; i < obj.nol.length; i++) {
        console.log(obj.nol[i]);
        let option = document.createElement('option', `value="${obj.nol[i]}"`);
        option.innerHTML = obj.nol[i];
        slct.appendChild(option);
      }
    }
  });  
  
  xhr.send(); 
});





