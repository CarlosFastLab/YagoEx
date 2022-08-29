const sumNum1Selector = document.getElementById('sum-num1');
const sumNum2Selector = document.getElementById('sum-num2');
const sumResultSelector = document.getElementById('sum-result');
const sumBtn = document.getElementById('sum-btn');

function sum () {
  console.log('---SUM CALLED?---')
  // '1'
  // +'1'
  // 1
  sumResultSelector.value = +sumNum1Selector.value + +sumNum2Selector.value;
}

sumBtn.addEventListener('click', sum);

const multNum1Selector = document.getElementById('mult-num1');
const multNum2Selector = document.getElementById('mult-num2');
const multResultSelector = document.getElementById('mult-result');
const multBtn = document.getElementById('mult-btn');

function mult () {
  multResultSelector.value = +multNum1Selector.value * +multNum2Selector.value;
}

multBtn.addEventListener('click', mult);

const divisionNum1Selector = document.getElementById('division-num1');
const divisionNum2Selector = document.getElementById('division-num2');
const divisionResultSelector = document.getElementById('division-result');
const divisionBtn = document.getElementById('division-btn');

function division () {
  divisionResultSelector.value = parseInt(divisionNum1Selector.value) / parseInt(divisionNum2Selector.value);
}

divisionBtn.addEventListener('click', division);
