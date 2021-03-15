function statesOfBrazil(){
    const arrayStates = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']
   for(let index = 0; index < arrayStates.length; index += 1){
       const states = document.createElement('option');
       document.getElementById('input-estados').appendChild(states);
       states.innerHTML = arrayStates[index]
   }
}
statesOfBrazil();




   