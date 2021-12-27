//Extraer los salarios del archivo salarios.js
const salariosCol = colombia.map(function(persona){
    return persona.salary;
});

//Ordenamos los salarios de forma ascendente
const salariosColSorted = salariosCol.sort(function(salario1, salario2){
    return salario1 - salario2;
});

//Detectamos si el array es par o impar para calcular la mediana
function esPar(numero){
    return numero % 2 === 0; 
}

function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado, elemento) {
            return valorAcumulado + elemento;
        }
    , 0);

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const elemento1 = lista[mitad - 1];
        const elemento2 = lista[mitad];

        const mediana = calcularMediaAritmetica([elemento1, elemento2]);

        return mediana;     
    } else {
        const elemento = lista[mitad];

        return elemento;
    }

}

//Calculo mediana salarios top 10
//Usando splice
// function medianaTop10Salarios(porcentaje){
//     const spliceStart = salariosColSorted.length * (100 - porcentaje) / 100 ;
//     const spliceCount = salariosColSorted.length - spliceStart;

//     const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

//     return medianaSalarios(salariosColTop10);
// }

//Usando slice
function medianaTop10Salarios(porcentaje){
    const porcentajeTop = Math.round((porcentaje / 100) * salariosColSorted.length);
    const salariosColTop10 = salariosColSorted.slice(-porcentajeTop);

    return medianaSalarios(salariosColTop10);
}

const medianaGeneralCol = medianaSalarios(salariosColSorted)
const medianaColTop10 = medianaTop10Salarios(10);

console.log({
    medianaGeneralCol,
    medianaColTop10
});