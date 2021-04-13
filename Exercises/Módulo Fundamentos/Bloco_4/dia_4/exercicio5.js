let info2 ={
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim',
  };



  let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'Sim'
};

  for(key in info){
      for(key2 in info2)
     if(key === key2 && info[key] !== info2[key2]){
         console.log(info[key] + " " + "e " + info2[key2])
      
     }
    
} if(info.recorrente === info2.recorrente){
    console.log("Ambos recorrentes")

}
