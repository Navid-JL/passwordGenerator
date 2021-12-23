const clipboardBtn = document.getElementById('button-addon2').addEventListener('click', (e) => {
  const passwordTxt = document.getElementById('passwordTxt')
  navigator.clipboard.writeText(passwordTxt.value)
  const p = document.createElement('p')
  p.innerText = 'Copied '
  const i = document.createElement('i')
  i.className = 'bi bi-check-circle-fill'
  p.appendChild(i)
  document.getElementById('formHeadingDiv').appendChild(p)
  setTimeout(() => {
    document.getElementById('formHeadingDiv').lastChild.remove()
  }, 700)
})

function updateLengthValue(value) {
  document.getElementById('lengthVal').innerHTML = `${value} Characters`
}

function setIntialValue() {
  document.getElementById('lengthVal').innerHTML =
    document.getElementById('customRange2').value + ' ' + 'Characters'
}

const submitBtn = document.querySelector('#submitBtn').addEventListener('click', (e) => {
  e.preventDefault()
  const symbolsBtn = document.getElementById('btn-check-outlined1')
  const numbersBtn = document.getElementById('btn-check-outlined2')
  const LowerCaseBtn = document.getElementById('btn-check-outlined3')
  const UpperCaseBtn = document.getElementById('btn-check-outlined4')
  const lengthRange = document.getElementById('customRange2')
  if (symbolsBtn.checked || numbersBtn.checked || UpperCaseBtn.checked || UpperCaseBtn.checked) {
    const password = generatePassword(
      lengthRange.value,
      symbolsBtn.checked,
      numbersBtn.checked,
      LowerCaseBtn.checked,
      UpperCaseBtn.checked
    )
    const passwordTxt = document.getElementById('passwordTxt')
    passwordTxt.value = password
    document.getElementById('formHeading').innerHTML = '<i class="bi bi-shield-lock-fill"></i>'
  }
})
