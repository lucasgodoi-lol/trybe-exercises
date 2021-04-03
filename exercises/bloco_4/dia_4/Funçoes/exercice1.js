// Exercice 1 
function verificaPalindromo (string) {
    //uma plavara é palindromo quando sua leitura é feita tanto normalmente quanto de trás pra frente
    for(let index = 0; index < string.length; index += 1){
      if(string[index] === string[string.length -1 - index]){
        return true
      }else{
        return false
      }
    }
  }
  console.log(verificaPalindromo("trybe"));
  console.log(verificaPalindromo("arara"));