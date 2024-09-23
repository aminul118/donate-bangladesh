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



// ! Show a section

function showSectionById(id) {

  // * Hide All the section

  document.getElementById('donation-section').classList.add('hidden');
  document.getElementById('history-added').classList.add('hidden');


  // * Show the section with with the provided id as parameter
  document.getElementById(id).classList.remove('hidden');

}



