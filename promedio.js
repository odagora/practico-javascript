function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce(
    function (valorAcumulado, elemento) {
        return valorAcumulado + elemento;
    }
    , 0);

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}