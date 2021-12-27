const coupons = [
    {
        name: "descuento uno",
        discount: 10,
    },
    {
        name: "descuento dos",
        discount: 20,
    },
    {
        name: "descuento tres",
        discount: 30,
    },
    {
        name: "descuento cuatro",
        discount: 40,
    },
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;
  
    return precioConDescuento;
  
  }

function calcularPrecioFinal() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const userCoupon = coupons.find((coupon) => 
        coupon.name === couponValue
    );

    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("resultPrice");
        resultP.innerText = "El precio con descuento es de: $" + precioConDescuento;
    }

} 