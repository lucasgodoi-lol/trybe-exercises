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

  function feriado(nameButton){
    let newButton = document.createElement('button')
    document.querySelector('.buttons-container').appendChild(newButton)
    newButton.innerText = nameButton;
    newButton.id = 'btn-holiday'
  }
  feriado('Feriados')
  
function eventClickButton(){
  let holidayClass = document.getElementsByClassName('holiday');
  let button = document.getElementById('btn-holiday');
  let newcolor = 'white'
  let backgroundColor = 'rgb(238,238,238)'
  button.addEventListener('click', function(){
    for(let index = 0;index < holidayClass.length; index += 1){
     if(holidayClass[index].style.backgroundColor === newcolor){
       holidayClass[index].style.backgroundColor = backgroundColor;
     }else {
       holidayClass[index].style.backgroundColor = newcolor
     }
    }
  })
}
eventClickButton();

function friday(fri){
  let buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(buttonFriday)
  buttonFriday.innerText = fri;
}
friday('Sexta-Feira');

function buttonFriday(){
  let friday = document.getElementById('btn-friday');
  let fridayClick = document.getElementsByClassName('friday');
  let newcolor = 'blue';
  let backgroundColor = 'rgb(238,238,238)';
  friday.addEventListener('click', function(){
  for(let index = 0; index < fridayClick.length; index += 1){
    if(fridayClick[index].style.backgroundColor === newcolor){
      fridayClick[index].style.backgroundColor = backgroundColor;
    }else {
      fridayClick[index].style.backgroundColor = newcolor
    }
  }
  })
}
buttonFriday()

  // Escreva seu código abaixo.

  function passarMouse(){
    const day = document.getElementById('days');
    day.addEventListener('mouseover', (e) => {
      const target1 = e.target;
      const days = document.querySelectorAll('.day');
      for(let index = 0; index < days.length; index += 1){
        days[index].style.fontSize = '20px'
        if(target1.classList.contains('day')){
         target1.style.fontSize = '40px'
        }
      }
    })
  }
  passarMouse();
  const paiDiv = document.querySelector('.my-tasks');
  // Exercicio 7
  function tarefaPersonalizada(nomeTarefa){
   const tasks = document.createElement('span');
   paiDiv.appendChild(tasks);
   tasks.innerText = nomeTarefa;
  }
tarefaPersonalizada('Jogar')

// Exercicio 8;

function color (cor){
 const cor1 = document.createElement('div');
 cor1.classList.add('task');
 cor1.style.backgroundColor = cor
 paiDiv.appendChild(cor1)
}
color('purple')