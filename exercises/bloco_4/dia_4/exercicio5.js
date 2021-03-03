//Exercicio 5
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
};



let info2 = {
    personagem: "Tio Patinha",
    origem: "Christmas on Bear Mountain,Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}

for (let key in info) {
    for(let key2 in info2){
    if(info[key] !== info2[key2] && key === key2){
    console.log(info[key] +  " e " + info2[key2])
    }
 }
}
 if (info['recorrente'] === info2['recorrente']) {
    console.log("Ambos recorrentes")
} 


