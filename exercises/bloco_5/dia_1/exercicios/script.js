//  Exercicio 1
function paragrafo(p,p2){
  document.getElementsByTagName("p")[0].innerText = p
  document.getElementsByTagName("p")[1].innerText = p2
  }
  paragrafo("Daqui a dois anos eu espero estar empregado em uma boa empresa, e podendo viajar com minha familia.","Aprender inglês e varias linguagens de programação")

  
//   Exercicio 2 
function corQuadrado(color){
    document.getElementsByClassName('main-content')[0].style.backgroundColor = color
   }
corQuadrado("rgb(76,164,109)")

// Exercicio 3 ;
function redSquare(color1){
    document.getElementsByClassName('center-content')[0].style.backgroundColor = color1;
}
redSquare("white");

// Exercicio 4 ;

function errorText(text){
    document.getElementsByClassName('title')[0].innerText = "Exercício 5.1 - Java" + text;
}
errorText("Script")


// Exercicio 5;
function upperCase(){
    let letterBigger = document.getElementsByTagName('p');
    for(let index = 0; index < letterBigger.length;index ++){
        letterBigger[index].style.textTransform = "uppercase"
    }

}
upperCase()

