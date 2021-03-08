function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
    let daysNumbers = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let ul = document.createElement('ul')
    document.body.appendChild(ul)
    ul.id = 'days'
    for(let index = 0; index < daysNumbers.length; index += 1){
     let lista = document.createElement('li')
     document.getElementById('days').appendChild(lista).innerText = daysNumbers[index]
     lista.className = 'day'
     if(daysNumbers[index] == 24 || daysNumbers[index] == 25 || daysNumbers[index] == 31){
     lista.classList.add('holiday')
     }
     if(daysNumbers[index] == 4 || daysNumbers[index] == 11 || daysNumbers[index] == 18 || daysNumbers[index] == 25){
       lista.classList.add('friday')
     }
    }
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.