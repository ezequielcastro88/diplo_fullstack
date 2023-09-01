
const numeros = [1, 2, 3, 30, 20, 25];
let mimaximonumero = 0
for (let index = 0; index < numeros.length; index++) {
    const minumeroactual = numeros[index];
    if( mimaximonumero<minumeroactual){
        
        mimaximonumero = minumeroactual
    }
}
console.log(' max '+ mimaximonumero )