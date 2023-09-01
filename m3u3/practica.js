const valor1 = prompt('Ingrese la distancia');

switch (valor1 > 0){
    case (valor1 > 0 && valor1 <= 1000): document.write('Vaya a pie');
    break;
    case (valor1 > 1000 && valor1 <= 10000): document.write('Vaya en bicicleta');
    break;
    case (valor1 > 10000 && valor1 <= 30000): document.write('Vaya en colectivo');
    break;
    case (valor1 > 30000 && valor1 <= 100000): document.write('Vaya en auto');
    break;
    case (valor1 > 100000): document.write('Vaya en avion');
}