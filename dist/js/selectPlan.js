let planone = document.querySelector('.wrp__planone');
let plantwo = document.querySelector('.wrp__plantwo');
let planthree = document.querySelector('.wrp__planthree');
let checkblockone = document.querySelector('.wrp__checkblockone');
let url = 'https://raw.githubusercontent.com/picpoint/testtasks/master/datas.json';



planone.addEventListener('click', (e) => {
  planone.style.backgroundColor = '#ebf4f7';
  planone.style.border = '1px solid #b8d7e2';
  checkblockone.style.border = '5px solid #34648e';    
  checkblockone.style.borderRadius = '50%';
  checkblockone.style.width = '20px';
  checkblockone.style.height = '30px';
});
