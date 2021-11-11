let rent = document.getElementById('rent');
let phone = document.getElementById('phone');
let result = document.getElementById('result');

document.getElementById('btn').addEventListener('click', calculateResults);

// calculate Results
function calculateResults(e){
  let total = parseInt(rent.value) + parseInt(phone.value);
  result.innerText = "$" + " " + total;


  e.preventDefault();
}
