export function SortAZ(x, y){
    if (x.name.toLowerCase() < y.name.toLowerCase()) {return -1;}
    if (x.name.toLowerCase() > y.name.toLowerCase()) {return 1;}
    return 0;
}

export function SortZA(x, y){
    if (x.name.toLowerCase() < y.name.toLowerCase()) {return 1;}
    if (x.name.toLowerCase() > y.name.toLowerCase()) {return -1;}
    return 0;
}


export function SortFUERZA(x, y){
    if (x.fuerza < y.fuerza) {return -1;}
    if (x.fuerza > y.fuerza) {return 1;}
    return 0;
}

export function SortFUERZAB(x, y){
    if (x.fuerza < y.fuerza) {return 1;}
    if (x.fuerza > y.fuerza) {return -1;}
    return 0;
}


export function filtroChec(poke, check){
  if(check.length === 2){return poke}
  if(check[0] === "misp"){
    const a = poke.filter((p) => p.id.length > 5)
    return a
  }else{
    const b = poke.filter((p) => p.id.length < 5)
    return b
  }
}



const filtrarG = function(a,search){
    var listf = a
    
      if(search.length === 1){
        var listf2 = []
        for (let i = 0; i < listf.length; i++) {
          for (let j = 0; j < listf[i].type.length; j++) {
              
           if(listf[i].type[j].toLowerCase() === search[0]){
             listf2.push(listf[i])
           }    
          
          }
        
        }
        return listf2
       }
      if(search.length > 1){
        var listf2 = []
        for (let i = 0; i < listf.length; i++) {
         for (let j = 0; j < listf[i].type.length; j++) {
           if(listf[i].type[j].toLowerCase() === search[0]){
             listf2.push(listf[i])
           }    
          
          }
          
        }
        var gens = search.slice(1)
        return filtrarG(listf2, gens)
      }
      return listf
    
    
    
    
    
    
    
    
    
    }
  
  export default filtrarG


  