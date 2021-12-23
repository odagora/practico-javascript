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


function calcularPrecioConDescuento (precio, descuento) {
    const precioDescuento = precio * (100 - descuento) / 100;

    return precioDescuento;
}

function calcularPrecioFinal () {
    const precio = document.getElementById('inputPrice');
    const descuento = document.getElementById('inputDiscount');

    const precioValor = precio.value;
    const descuentoValor = descuento.value;

    const precioFinal =calcularPrecioConDescuento(precioValor, descuentoValor);

    const valorPrecioFinal = document.getElementById('resultPrice');

    valorPrecioFinal.innerText = `Precio final con descuento del ${descuentoValor}% es de ${precioFinal}`;
}