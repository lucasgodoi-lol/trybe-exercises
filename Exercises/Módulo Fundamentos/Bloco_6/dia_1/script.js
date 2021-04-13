function statesOfBrazil() {
    const arrayStates = ['Selecione um estado', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
    for (let index = 0; index < arrayStates.length; index += 1) {
        const states = document.createElement('option');
        const pai = document.getElementById('input-estados')
        pai.appendChild(states)
        states.innerHTML = arrayStates[index]
    }
}
statesOfBrazil();

// function  data(){
//     const button = document.querySelector('#buttonDate');
//     button.addEventListener('click', () => {
//         const input = document.querySelector('#input-data');
//         const valor =  input.value.split('/')
//         const dia = parseInt(valor[0]);
//         const mes = parseInt(valor[1]);
//         const ano = parseInt(valor[2]);
//         console.log(dia)
//         if(dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && ano > 1990 && ano <= 3000){
//         }else {
//             alert('erro contextualizada!')
//         }
//     })
// }
// data();
function data(maxYear) {
    const picker = new Pikaday({
        field: document.getElementById('input-data'),
        format: 'DD/MM/YYYY',
        minYear: 2000,
        maxYear: maxYear
    });
}
data(2030);

function colorInput() {
    const input = document.querySelectorAll('input')
    for (let index = 0; index < input.length; index += 1) {
        input[index].style.color = 'black'
        input[index].style.fontWeight = 900;
        input[index].classList.add('color')
    }
}
colorInput();



function click() {
    const form = document.querySelector('form')
    form.addEventListener('click', (e) => {
        const target1 = e.target
        const color = document.getElementsByClassName('color')
        for (let index = 0; index < color.length; index += 1) {
            color[index].style.backgroundColor = 'white'
            if (target1.localName === 'input') {
                target1.style.backgroundColor = 'LavenderBlush'
            }
        }
    })
}
click();

function colors() {
    const option = document.querySelectorAll('option');
    for (let index = 0; index < option.length; index += 1) {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        const rgb = `rgb(${r}, ${g}, ${b})`
        if (rgb !== 'rgb(255, 255, 255)') {
            option[index].style.backgroundColor = rgb;
        }
        option[index].style.color = 'white'
        option[index].style.fontWeight = 900;
    }
}
colors();


function colorsOption() {
    const select = document.querySelector('select');
    select.addEventListener('click', (e) => {
        const option = document.querySelectorAll('option');
        for (let index = 0; index < option.length; index += 1) {
            const r = Math.floor(Math.random() * 255)
            const g = Math.floor(Math.random() * 255)
            const b = Math.floor(Math.random() * 255)
            const rgb = `rgb(${r}, ${g}, ${b})`
            if (rgb !== 'rgb(255, 255, 255)') {
                option[index].style.backgroundColor = rgb;
            }
        }
    })
}
colorsOption();

function click2() {
    const textarea = document.getElementById('text-ultimoEmprego').style.fontWeight = 900;
    const form = document.querySelector('form')
    form.addEventListener('click', (e) => {
        const target1 = e.target
        const textarea = document.getElementById('text-ultimoEmprego')
        textarea.style.backgroundColor = 'white'
        if (target1.localName === 'textarea') {
            target1.style.backgroundColor = 'LavenderBlush'
        }
    })
}
click2();

new JustValidate('.js-form', {})
