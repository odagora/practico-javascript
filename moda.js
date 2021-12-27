function calcularModa(lista) {
    //Almacenar frecuencias de números en un objeto
    const listaCount = {};
    lista.map(function(elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    });

    //Convertir el objeto a un array y ordenarlo
    const listaMod = Object.entries(listaCount).sort(
        function(elemento1, elemento2){
            return elemento1[1] - elemento2[1];
        }
    );

    //Hallar la moda como el último elemento del array
    const moda = listaMod[listaMod.length - 1]; 

    return moda;
}

// function mode(arr){
//     return [...arr].sort((a,b) =>
//           arr.filter(v => v===a).length
//         - arr.filter(v => v===b).length
//     ).pop();
// }
