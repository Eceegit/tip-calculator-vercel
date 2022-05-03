"use strict";

let btnPercent = '';
let custom = document.querySelector('#customInput');
let hidden = document.querySelector('.hidden');
 
hidden.style.display = 'none';
  
  
function calcPercentage(btnPercent) {
  let bill = document.getElementById("bill").value;
  //parsefloat is to treat bill as a number inorder to make total calc possible in line 10
  bill = parseFloat(bill);

  let noOfPeople = document.getElementById("no-of-people").value;
  
  
  if(noOfPeople <= 0){
    hidden.style.display = 'block';
    hidden.style.fontSize = 'small';
    hidden.style.color = 'red';
    
  }

  let tip = bill * (btnPercent / 100);
  let tipPerPerson = tip / noOfPeople;
  let totalPerPerson = (tip + bill) / noOfPeople;
  document.getElementById("tip-per-person").innerHTML =  "$" + tipPerPerson.toFixed(2);
  document.getElementById("total-per-person").innerHTML =  "$" + totalPerPerson.toFixed(2);

  //this means ones this above function runs, it resets it back to 0.05
  btnPercent = 5;
}

function tip5() {
  calcPercentage(5);
 }
function tip10() {
 calcPercentage(10);
}
function tip15() {
  calcPercentage(15);
}
function tip25() {
  calcPercentage(25);
}
function tip50() {
  calcPercentage(50);
}

custom.addEventListener('input', function(){
  if(custom !=0){
let custom = Number( document.getElementById('customInput').value);
   
    calcPercentage(custom);
  }
 
})

let resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener("click", function () {
   bill.value = 0;
  //parsefloat is to treat bill as a number inorder to make total calc possible in line 10

   let noOfPeople = 0;
   document.getElementById("no-of-people").value = noOfPeople;
  let tipAmount = '$0.00';
  let total = '$0.00';
  document.getElementById("tip-per-person").innerHTML = tipAmount;
  document.getElementById("total-per-person").innerHTML = total;
  custom.value = '';
  hidden.style.display = 'none';
});
// let billValue = document.querySelector('#bill').value;
// let noOfPeople = Number(document.querySelector('#no-of-people').value);
// const tipPercent = document.querySelectorAll('.btn-percent');
//  console.log(noOfPeople, billValue);

// function calculateTip(){
//  let bill = parseFloat(billValue.value);

// //alert pop-up
//  if(billValue === '' || tipPercent <= 0 || noOfPeople === ''){
//  	alert('please enter the required values');
//  	return;
//  }
//  billValue.value = bill.toFixed(2);

//  let totalTip = parseFloat((bill * tipPercent).toFixed(2));

//  document.getElementsById('tip-per-person').innerHTML = totalTip;
//  console.log(totalTip);
// }

// tipPercent.addEventListener('click', calculateTip);
// console.log()
// const tipPercents = document.querySelectorAll('.btn-percent');
// console.log(tipPercents);
// tipPercents.forEach(function(tipPercent){
//     tipPercent.addEventListener('click', calculateTip);
// })

// const bill = [
//     22,
//     295,
//     176,
//     440,
//     37,
//     105,
//     10,
//     1100,
//     86,
//     52
// ]

// const tips = [];
// // const tip = billValue > 50 && billValue <= 300 ? billValue * 0.15 :
// // billValue * 0.2 ;
// const totals = []

// const calcTip =

//     tipPercent.addEventListener('click',function() {
//         return bill >= 50 && bill <= 300 ? bill * 0.15 :
//         bill * 0.2 ;
//     });
