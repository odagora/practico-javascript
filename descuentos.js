// const precioOriginal = 100;
// const descuento = 15;
// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

//Array con cupones de descuento
const cupones = [
    "descuento uno",
    "descuento dos",
    "descuento tres"
];

function calcularPrecioConDescuento (precio, descuento) {
    const precioDescuento = precio * (100 - descuento) / 100;

    return precioDescuento;
}

function calcularPrecioFinal () {
    const precio = document.getElementById('inputPrice');
    const cupon = document.getElementById('inputCoupon');

    const precioValor = precio.value;
    const cuponValor = cupon.value;

    let descuento;

    switch(cuponValor){
        case cupones[0]:
            descuento = 10;
            break;
        case cupones[1]:
            descuento = 20;
            break;
        case cupones[2]:
            descuento = 30;
            break;
    }

    const precioFinal =calcularPrecioConDescuento(precioValor, descuento);

    const valorPrecioFinal = document.getElementById('resultPrice');

    valorPrecioFinal.innerText = `Precio final con descuento del ${descuento}% es de ${precioFinal}`;
}