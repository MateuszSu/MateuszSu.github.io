let wspinacz = document.getElementsByClassName('wspinacz')[0];
let i = 500;
window.addEventListener('scroll', e=> {
  if(i>50){
    wspinacz.style.top = i + 'px';
    i-=3;}
  });