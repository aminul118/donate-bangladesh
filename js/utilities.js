// console.log('I am utility');

// ! Function for getting Input Value
function getInputValueById(id) {
  const inputValueText = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValueText);
  return inputNumber;
}

function getTextValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}


