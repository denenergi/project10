import '../styles/index.scss';

import { tarifs } from './constants';
import { services } from './constants';
import { services1 } from './constants';
import { payTo } from './constants';

let balance = 100;
console.log(tarifs);
const counter_value = document.querySelectorAll('#counter_value');
const payments = [];
const payment = {
  id: 'water',
  meterId: counter_value[0].value,
  current: '',
  previous: '',
  amount: '',
};

const center_title = document.querySelector('.center__title');
const container = document.querySelector(".left");
const left_company = container.getElementsByClassName("left__company");
const center_desc = document.querySelector('.center__desc');

for (let i = 0; i < left_company.length; i++) {
    left_company[i].addEventListener("click", function() {
      const current = document.getElementsByClassName("selected");
      current[0].className = current[0].className.replace(" selected", "");
      this.className += " selected"; 
      const selected = document.querySelector('.selected');
      const company_desc = selected.querySelector('.left__company-desc'); 
      center_title.innerText = company_desc.innerText;  
      for(let bills in payTo){
        if(document.getElementById(`${bills}`).classList.contains("selected")) {
          center_desc.innerText = payTo[bills];
          payment.id = bills;
        }}
    });
  };
  // 2 TASK
const indication = document.querySelector('.btn');
const btn_outline = document.querySelector('.btn-outline');
const meters = document.getElementById('meters');
document.addEventListener('DOMContentLoaded', () => {
  if (!!meters) {
    meters.addEventListener("input", x => {
          const count = x.target.value;
          payment.meterId = count;
          console.log(payment);
      });
  }
});
const getN1 = document.getElementById('previous');
getN1.addEventListener('change', ChangeValueProduct1);
function ChangeValueProduct1(){
  payment.previous = +this.value;
  if(payment.previous < 0){
    alert('number below zero');
    throw new Error ('number below zero');
  };
}
const getN2 = document.getElementById('current');
getN2.addEventListener('input', ChangeValueProduct2);
function ChangeValueProduct2(){
  payment.current = +this.value;
  console.log(payment);
  if(payment.previous > payment.current){
    alert('previous must be > current');
    throw new Error ('previous must be > current');
  };
  if(payment.current < 0){
    alert('number below zero');
    throw new Error ('number below zero');
  };
  if(+payment.current < 0 || +payment.previous < 0){
    alert('Введите показания');
    throw new Error ('Enter number');
  }
}

// 3 TASK
const list_item = document.querySelector('.list__item');
const form__summary = document.querySelector('.form__summary-list');
const price = document.querySelector('.price');
const total = document.getElementById('total');
const targetLi = document.querySelectorAll("ul.form__summary-list li.list__item p span.price b");
indication.addEventListener('click', function(){
  if(payment.previous > payment.current){
    alert('previous must be > current');
    throw new Error ('previous must be > current');
  }if (isNaN(payment.current) || isNaN(payment.previous)){
    alert('not Number');
    throw new Error ('not Number');
  }else{
  payment.amount = tarifs[payment.id] * (payment.current - payment.previous);
  payments.push({...payment});
  console.log(payments);
  form__summary.insertAdjacentHTML('afterbegin', `<li class="list__item"><p><span class="list__item-label">${payment.meterId}</span><span class="price">$ <b>${payment.amount}</b></span></p></li>`);

  const counter_value = document.querySelectorAll('#counter_value');
  for (let i = 0; i < counter_value.length; i++){
  if (counter_value[i].value === payment.meterId){
    counter_value[i].setAttribute('disabled', '');
  }
}
  const arrSum = [];
  const targetLi = document.querySelectorAll("ul.form__summary-list li.list__item p span.price b");
  
  for (let i = 0; i < targetLi.length -1; i++)
  // sum += (+targetLi[i].innerText);
  // console.log(sum);
  arrSum.push(+targetLi[i].innerText);
  if (arrSum.length === 1){
    targetLi[targetLi.length-1].innerText = arrSum[0];
  };
  const summa = arrSum.reduce((total, amount) => {
    let result = total + amount;
    targetLi[targetLi.length-1].innerText = result;
    return (result);
  });

  
}});
//TASK 4
const taxes_pay = document.getElementById('taxes_pay');
const water_pay = document.getElementById('water_pay');
const internet_pay = document.getElementById('internet_pay');
const security_pay = document.getElementById('security_pay');
const exchange_pay = document.getElementById('exchange_pay');
const right_payments = document.querySelector('.right__payments-fields');
const right_payment = right_payments.querySelectorAll('input');
function res(){
const reset = document.querySelectorAll('.form__summary-list > li:not(:last-child)');
const transactions__list = document.querySelector('.transactions__list');
const list__item2 = transactions__list.querySelectorAll('.list__item');
reset.forEach(el => el.remove());
targetLi[targetLi.length-1].innerText = 0;
  taxes_pay.removeAttribute('checked');
  security_pay.removeAttribute('checked');
  list__item2.forEach(el => el.remove());
}
res();
btn_outline.addEventListener('click', function(){
const transactions__list = document.querySelector('.transactions__list');
const list__item2 = transactions__list.querySelectorAll('.list__item');
const reset = document.querySelectorAll('.form__summary-list > li:not(:last-child)');
balance = 100;
reset.forEach(el => el.remove());
targetLi[targetLi.length-1].innerText = 0;
list__item2.forEach(el => el.remove());
function remove(){
  right_payment.forEach(el => el.removeAttribute('checked'));
}
remove(); 
});
//TASK 5
const pay_div = document.querySelector('.right__payments-footer');
const pay = pay_div.querySelector('.btn');
const transactions__list = document.querySelector('.transactions__list');
let i = 0;
indication.addEventListener('click', function(){
  for (let i = 0; i < payments.length; i++)
    if(payments[i].meterId === counter_value[i].value){
      let k = i + 1;
        payment.meterId = counter_value[k].value;
  }

  for (let i = 0; i < payments.length; i++){
  for(let companyName1 in services1){
    if(payments[i].id === companyName1){
    services1[companyName1].setAttribute('checked', '');
  }}
}
})

let v = 0;
pay.addEventListener('click', function(){
  const list__item2 = transactions__list.querySelectorAll('.list__item');
  for(let companyName in services){
    if(services[companyName].hasAttribute('checked')){
        balance -= payments[v + (transactions__list.childNodes.length - 3)].amount;
        v++;
    if (balance > 0) {
      transactions__list.insertAdjacentHTML('afterbegin', `<li class="list__item">${companyName}: успешно оплачено</li>`);
    } else {
      transactions__list.insertAdjacentHTML('afterbegin', `<li class="list__item list__item-error ">${companyName}: ошибка транзакции</li>`);
    }
    // console.log(transactions__list.childNodes[v-1].innerText);
    v = 0;
    console.log(balance);
  }
};
});
