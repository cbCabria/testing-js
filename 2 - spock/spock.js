const rules = {
   'piedra':['tijeras'],
   'spock':['piedra','tijeras'],
   'papel':['piedra'],
   'tijeras':['papel']
}

function spock(a, b){
  if(a==b){
     return 'empate';
  }        

   return rules[a].includes(b) ? a : b;
    
}
module.exports = spock;