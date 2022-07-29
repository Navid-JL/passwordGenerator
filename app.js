const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=']
const characterCodes = Array.from(Array(26)).map((_, i) => {
  return i + 97
})
const lowerCaseLetters = characterCodes.map((code) => {
  return String.fromCharCode(code)
})
const upperCaseLetters = lowerCaseLetters.map((letter) => {
  return letter.toUpperCase()
})

const findRandom = (arr, length) => {
  let result = []
  if (Array.isArray(arr)) {
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * arr.length)
      result.push(arr[randomIndex])
    }
  }
  return result
}

function generatePassword(length, hasSymbols, hasNumbers, hasLowercase, hasUppercase) {
  let c = 0
  let selectedCategories = []

  if (hasSymbols === true) {
    c++
    selectedCategories.push(symbols)
  }
  if (hasNumbers === true) {
    c++
    selectedCategories.push(numbers)
  }
  if (hasLowercase === true) {
    c++
    selectedCategories.push(lowerCaseLetters)
  }
  if (hasUppercase === true) {
    c++
    selectedCategories.push(upperCaseLetters)
  }

  if (length < c) {
    return 'Length cannot be less than the number of selected categories'
  }

  let randomCharacters = []

  if (length > 0) {
    let calcLength = [Math.round(length / c), Math.floor(length / c), Math.floor(length / c)]
    calcLength.push(Math.round(length - (calcLength[0] + calcLength[1] + calcLength[2])))

    let k = 0
    for (let i = 0; i < selectedCategories.length; i++) {
      randomCharacters.push(findRandom(selectedCategories[i], calcLength[k]))
      if (k < 4) {
        k++
      }
    }
    let password = ''

    for (let i = 0; i < randomCharacters.length; i++) {
      for (let j = 0; j < randomCharacters[i].length; j++) {
        password += randomCharacters[i][j]
      }
    }

    password = password
      .split('')
      .sort(function () {
        return 0.5 - Math.random()
      })
      .join('')

    return password
  }
}
