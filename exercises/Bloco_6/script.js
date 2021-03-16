function statesOfBrazil(){
    const arrayStates = ['Selecione um estado', 'Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']
   for(let index = 0; index < arrayStates.length; index += 1){
       const states = document.createElement('option');
        const pai = document.getElementById('input-estados')
        pai.appendChild(states)
       states.innerHTML = arrayStates[index]
   }
}
statesOfBrazil();

function  data(){
    const button = document.querySelector('#buttonDate');
    button.addEventListener('click', () => {
        const input = document.querySelector('#input-data');
        const valor =  input.value.split('/')
        const dia = parseInt(valor[0]);
        const mes = parseInt(valor[1]);
        const ano = parseInt(valor[2]);
        console.log(dia)
        if(dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && ano > 1990 && ano <= 3000){
        }else {
            alert('erro contextualizada!')
        }
    })
}
data();