import './style.css'

let answer = Math.floor(Math.random() * 100);
const check = document.querySelector(".check");
const num = document.querySelector(".num");
const result = document.querySelector(".result");
console .log(answer);
let min = 1;
let max = 100;

check.addEventListener('click',function(e){
  e.preventDefault();
  if(num.value==""){
    alert("請輸入內容");
    return;
  }else if(num.value==answer){
    result.innerHTML=`<p>恭喜!!答對了</p>`;
    return;
  }else if(num.value<=answer){
    min = num.value
    result.innerHTML=`<p>*${num.value}~${max}</p>`;
    return;
  }else{
    max = num.value
    result.innerHTML=`<p>*${min}~${num.value}</p>`;
    return;
  }
})