const billAmount = document.getElementById("bill-amount");
const tips = document.getElementsByName("tip");
const customTip = document.getElementById("custom-tip");
const numOfPeople = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const resetBtn = document.getElementById("reset-button");
const errorMsg = document.getElementById("error-message");

let tip, amount, people;
window.onload = reset();

tips.forEach((tipPercent) => {
  tipPercent.addEventListener("click", () => {
    tip = Number(tipPercent.value);
    console.log(tipPercent.checked);
    customTip.value = "";
    if (people >= 1) {
      calculateTip();
    }
  });
});

["input", "focus"].forEach((event) => {
  customTip.addEventListener(event, () => {
    tips.forEach((tipPercent) => {
      if (tipPercent.checked) {
        tipPercent.checked = false;
      }

      tip = Number(customTip.value);
      if (people >= 1) {
        calculateTip();
      }
    });
  });
});

billAmount.addEventListener("input", () => {
  amount = Number(billAmount.value);
  if (people >= 1) {
    calculateTip();
  }
});

numOfPeople.addEventListener("input", () => {
  people = Number(numOfPeople.value);
  if (people < 1) {
    numOfPeople.classList.remove("focus:ring-[#26C2AE]");
    numOfPeople.classList.add("focus:ring-[#E17457]");
    numOfPeople.classList.add("ring", "ring-[#E17457]");
    errorMsg.classList.remove("hidden");
  } else {
    numOfPeople.classList.remove("focus:ring-[#E17457]");
    numOfPeople.classList.remove("ring", "ring-[#E17457]");
    numOfPeople.classList.add("focus:ring-[#26C2AE]");
    errorMsg.classList.add("hidden");
    calculateTip();
  }
});

resetBtn.addEventListener("click", reset);

function calculateTip() {
  resetBtn.disabled = false;
  let totalTip = (tip * amount) / 100;
  let totalAmt = amount + totalTip;

  tipAmount.innerText = "$" + (totalTip / people).toFixed(2);
  totalAmount.innerText = "$" + (totalAmt / people).toFixed(2);
}

function reset() {
  tip = 0;
  amount = 0;
  people = 0;
  tips.checked = false;
  numOfPeople.classList.remove("focus:ring-[#E17457]");
  numOfPeople.classList.remove("ring", "ring-[#E17457]");
  numOfPeople.classList.add("focus:ring-[#26C2AE]");
  errorMsg.classList.add("hidden");
  resetBtn.disabled = true;
  billAmount.value = "";
  numOfPeople.value = "";
  customTip.value = "";
  tipAmount.innerText = "$0.00";
  totalAmount.innerText = "$0.00";
}