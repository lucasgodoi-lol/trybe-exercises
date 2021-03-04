// Exercice  One ;

let n = 5;
let asteristik = "*"
let line = ""

for(let index = 0;index < n;index ++){
    line = line + asteristik
}
for(let index = 0;index < n ; index ++){
    // console.log(line)
}


// Exercice two ;
n = 5;
asteristik = "*"
line = ""



for(let index = 0;index < n;index ++){
    line = line + asteristik
    // console.log(line)
}


n = 5;
asteristik = "*";
line = "";
let espaco = " " ;
let linha2 = "";
for(let index = 0;index < n;index += 1){
    line = line + asteristik;
  for(let index2 = 4;index2 <= 1;index2 -- )
    linha2 = espaço + linha2;
  if(linha2[index2] < line[index]){
      console.log(linha2 + line)
  }
        }    
      
    
       

