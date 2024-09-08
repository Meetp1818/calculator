//1. HTML collection of all buttons
let buttons = document.getElementsByTagName("button");

//2. convert all collection in array
let buttonsArray = Array.from(buttons);

//3. add 'click' event listener on all the buttons
buttonsArray.forEach((button) => {
  button.addEventListener("click", printNum);
});

//4. Create a function which will called by event listener
function printNum(event) {
  //4.1 Get the button click by user eg. <button>C<button>
  let button = event.target;

  //4.2 Get the innerHTML of the button eg.C
  let newValue = button.innerHTML;

  //4.3 get the screen and update the new value
  let screen = document.getElementById("screen");

  //4.4 clear screen if button 'C' is clicked
  if (newValue === "C") {
    screen.value = "";
    return;
  }

  if (newValue === "+-") {
    if (screen.value[0] === "-") {
      screen.value = screen.value.slice(1);
    } else {
      screen.value = "-" + screen.value;
    }
    return;
  }

  if ("+-*/%".includes(newValue)) {
    let signValue = screen.value;
    if (
      signValue.includes("+") ||
      signValue.includes("*") ||
      signValue.includes("/") ||
      signValue.includes("-") ||
      signValue.includes("%")
    ) {
      alert("sign is already present");
      return;
    }
  }
  //4.5 evaluate answer if click on =
  if (newValue === "=") {
    let ans = 0;
    if (screen.value.includes("+")) {
      ans = performSum(screen.value);
      screen.value = ans;
      return;
    }

    if (screen.value.includes("-")) {
      ans = performSub(screen.value);
      screen.value = ans;
      return;
    }

    if (screen.value.includes("*")) {
      ans = performMul(screen.value);
      screen.value = ans;
      return;
    }
    if (screen.value.includes("%")) {
      ans = performModulo(screen.value);
      screen.value = ans;
      return;
    }

    if (screen.value.includes("/")) {
      ans = performDiv(screen.value);
      screen.value = ans;
      return;
    }
  }
  screen.value += newValue;
}

//value='1 0 0 + 2 0 0 0'
//      '0 1 2 3 4 5 6 7
function performSum(value) {
  let plusIndex = value.indexOf("+");
  let num1 = value.slice(0, plusIndex);
  let num2 = value.slice(plusIndex + 1);
  let sum = Number(num1) + Number(num2);
  return sum;
}

function performSub(value) {
  let subIndex = value.indexOf("-");
  let num1 = value.slice(0, subIndex);
  let num2 = value.slice(subIndex + 1);
  let sub = Number(num1) - Number(num2);
  return sub;
}

function performMul(value) {
  let mulIndex = value.indexOf("*");
  let num1 = value.slice(0, mulIndex);
  let num2 = value.slice(mulIndex + 1);
  let mul = Number(num1) * Number(num2);
  return mul;
}

function performDiv(value) {
  let divIndex = value.indexOf("/");
  let num1 = value.slice(0, divIndex);
  let num2 = value.slice(divIndex + 1);
  if (Number(num2) === 0) {
    alert("Error");
    return "";
  }
  let div = Number(num1) / Number(num2);
  return div;
}

function performModulo(value) {
  let moduloIndex = value.indexOf("%");
  let num1 = value.slice(0, moduloIndex);
  let num2 = value.slice(moduloIndex + 1);
  let modulo = Number(num1) % Number(num2);
  return modulo;
}
