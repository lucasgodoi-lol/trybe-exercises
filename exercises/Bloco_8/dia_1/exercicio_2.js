const resultadoSorteio = (NumeroSelecionado) => {
    const numeroAleatorio = Math.ceil(Math.random() * 5);
    console.log(numeroAleatorio)
    if(numeroAleatorio === NumeroSelecionado) {
        return `Parabéns você ganhou`
    } 
    return `Tente Novamente`
}

const result = (fn, numeroAleatorio) => {
  return  (numeroSelecionado) => fn (numeroSelecionado, numeroAleatorio)
}

const resulte = result(resultadoSorteio);
console.log(resulte(5))
