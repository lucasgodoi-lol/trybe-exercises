document.querySelector("#pai").firstElementChild.nextElementSibling
document.querySelector("#elementoOndeVoceEsta").parentNode.style.backgroundColor = "red"
document.querySelector("#primeiroFilhoDoFilho").innerText = "Exercicios Doom "
document.querySelector("#pai").firstElementChild
document.querySelector("#elementoOndeVoceEsta").previousElementSibling
document.querySelector("#elementoOndeVoceEsta").nextSibling
document.querySelector('#elementoOndeVoceEsta').nextElementSibling
document.querySelector("#pai").firstElementChild.nextElementSibling.nextElementSibling

// Exercicio video 2
let brother = document.createElement("div")
document.querySelector('#pai').appendChild(brother)

// 2 
let child = document.createElement("p");
document.querySelector('#elementoOndeVoceEsta').appendChild(child)

// 3
let chil2 = document.createElement("p")
document.querySelector('#primeiroFilhoDoFilho').appendChild(chil2)

// 4
chil2.className = "SonOfSon"
console.log(document.querySelector('.SonOfSon').parentElement.parentElement.nextElementSibling)
// // Acesse o elemento elementoOndeVoceEsta .
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai .
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de pai .