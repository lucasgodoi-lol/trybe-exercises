let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34 ,
    medals: {
        golden: 2 ,
        silver: 3,
  },
  bestInTheWorld :{
      datas : [2006, 2007, 2008, 2009, 2010, 2018]
  }
  }
  console.log("A jogadora " + player['name'] + " " + player['lastName'] + " " + "tem" + " " + player['age'] + " " + "anos de idade")
  
  console.log("A jogadora" + ' ' + player['name'] + " " +  player['lastName'] + " " + "foi eleitada a melhor do mundo por" + " " + Object.keys(player.bestInTheWorld.datas).length + ' ' + 'vezes')