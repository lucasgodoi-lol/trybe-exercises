const randomNumber = () => {
    return Math.round(Math.random() * 100)
}


const showString = (str) => {
  return str.toUpperCase();
}

const showFirstLetter = (str) => {
    return str[0];
}

const concatStrings = (str1, str2) => {
    return `${str1}${str2}`
} 


module.exports = { randomNumber, showFirstLetter , showString , concatStrings }