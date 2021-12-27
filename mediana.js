function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
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

function ordenarArreglo (lista) {
    arregloOrdenado = lista.sort(function (elemento1, elemento2){
        return elemento1 - elemento2;
    });

    return arregloOrdenado;
}

function calcularMediana (lista) {
    const listaOrdenada = ordenarArreglo(lista);
    const mitadLista = parseInt(listaOrdenada.length / 2);
    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista];
        const elemento2 = listaOrdenada[mitadLista - 1];

        const promedio = calcularMediaAritmetica([elemento1, elemento2]);

        mediana = promedio;

        return mediana;
    } else {
        mediana = listaOrdenada[mitadLista];

        return mediana;
    }
}

