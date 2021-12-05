const btnTotal = document.querySelector(".btn-calc-total");
const btnMonthlyPayment = document.querySelector(".btn-calc-monthpay");
const btnPureBankInt = document.querySelector(".btn-calc-bankint");
const resp = document.querySelector(".resp");

const loanVal = document.querySelector(".loan");
const intVal = document.querySelector(".int");
const termVal = document.querySelector(".term");

const messages = [
  "Bank Total Interest Will be",
  "Your Total Bill Is",
  "You Will Have To Pay Monthly",
];

const markup = function (data, text) {
  const markup = `
  <div class="card text-white bg-success mb-3 mt-3" style="max-width: 18rem;">
  <div class="card-header">Result</div>
  <div class="card-body">
    <h5 class="card-title">Here is your data</h5>
    <p class="card-text">${text} ${data} of Pounds</p>
  </div>
</div>
  `;
  resp.innerHTML = "";
  resp.insertAdjacentHTML("afterbegin", markup);
};

const calcInterest = function () {
  const intDecimal = intVal.value / 100;
  const totalInt = termVal.value * intDecimal * loanVal.value;
  markup(totalInt, messages[0]);
};

const calcTotal = function () {
  const yearsToMonth = termVal.value / 12;
  const intDecimal = intVal.value / 100;
  const totalInt = termVal.value * intDecimal * loanVal.value;
  const finalAmountToPay = parseInt(totalInt) + parseInt(loanVal.value);
  markup(finalAmountToPay, messages[1]);
};

const calcMonth = function () {
  const yearsToMonth = termVal.value * 12;
  const intDecimal = intVal.value / 100;
  const totalInt = termVal.value * intDecimal * loanVal.value;
  const finalAmountToPay = parseInt(totalInt) + parseInt(loanVal.value);
  const monthPay = Math.round(finalAmountToPay / yearsToMonth);
  markup(monthPay, messages[2]);
};

btnTotal.addEventListener("click", calcTotal);
btnPureBankInt.addEventListener("click", calcInterest);
btnMonthlyPayment.addEventListener("click", calcMonth);
