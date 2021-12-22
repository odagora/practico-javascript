//Código del Cuadrado
console.group("Cuadrados")
//Lado del cuadrado
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");

// Perimetro del cuadrado
const perimetroCuadrado = (input) => input * 4;
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cms");

//Area del cuadrado
const areaCuadrado = (input) => Math.pow(input,2);
console.groupEnd();
// console.log(`El área del cuadrado mide: ${areaCuadrado} cms²`);


//Código del Triangulo
console.group("Triangulo");
//Lados de triangulo
const lado1 = 6;
const lado2 = 6;
const base = 4;
const alturaTriangulo =5;
// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cms, " + ladoTriangulo2 + " cms, " + baseTriangulo + "cms.");
// console.log("La altura del triangulo mide: " + alturaTriangulo + " cms");

//Perimetro del triangulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
// console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cms");
console.log(perimetroTriangulo(lado1, lado2, base));

//Area del triangulo
const areaTriangulo = (base, altura) => (base * altura)/2;
console.groupEnd();
// console.log("El área del triangulo mide: " + areaTriangulo + " cms²");


//Código del Circulos
console.group("Circulos");
//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es " + radioCirculo + " cms.");

// Diametro
const diametroCirculo = (radio) => radio * 2;
// console.log("El diametro del circulo es " + diametroCirculo + " cms.");
// PI
const PI = Math.PI.toFixed(2);
// console.log("PI es " + PI + ".");

// Perimetro
const perimetroCirculo = (diametro) => diametro * PI;
// console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");

//Area
const areaCirculo = (diametro) => (PI * Math.pow(diametro,2)) / 4;
// console.log("El area del circulo es " + areaCirculo + " cms²");
console.groupEnd();

//Definición de funciones con objetos
const cuadrado = (input) => {
    let value = {
        perimetro: input * 4,
        area: input ** 2
    }
    return value;
}

const triangulo = (lado1, lado2 = lado1, base = lado2, altura) => {
    let value = {
        perimetro: lado1 + lado2 + base,
        area: (base, altura)/2
    }
    return value;
} 

const circulo = (diametro) => {
    let value = {
        perimetro: diametro * Math.PI,
        area: (Math.pow(diametro,2) * Math.PI)/4
    }
    return value;
}

function calcularCuadrado () {
    const input = document.getElementById('inputLados');
    const resPerimetro = document.getElementById('pSquareResult');
    const resArea = document.getElementById('aSquareResult');
    
    const value = parseInt(input.value);
    
    const perimetro = perimetroCuadrado(value);
    const area = areaCuadrado(value);
    
    resPerimetro.innerHTML = `${perimetro} cm`;
    resArea.innerHTML = `${area} cm²`;
}

function calcularTriangulo () {
    const inputLado1 = document.getElementById('inputLado1');
    const inputLado2 = document.getElementById('inputLado2');
    const inputBase = document.getElementById('inputBase');
    const inputAltura = document.getElementById('inputAltura');
    const resPerimetro = document.getElementById('pTriangleResult');
    const resArea = document.getElementById('aTriangleResult');

    const lado1 = parseInt(inputLado1.value);
    const lado2 = parseInt(inputLado2.value);
    const base = parseInt(inputBase.value);
    const altura = parseInt(inputAltura.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    const area = areaTriangulo(base, altura);

    resPerimetro.innerHTML = `${perimetro} cm`;
    resArea.innerHTML = `${area} cm²`;
}

function calcularCirculo() {
    const inputDiameter = document.getElementById('inputDiameter');
    const resPerimetro = document.getElementById('pCircleResult');
    const resArea = document.getElementById('aCircleResult');

    const diametro = parseInt(inputDiameter.value);

    const perimetro = perimetroCirculo(diametro);
    const area = areaCirculo(diametro);

    resPerimetro.innerHTML = `${perimetro} cm`;
    resArea.innerHTML = `${area} cm²`;
}
    

function resetSquare () {
    resPerimetro = document.getElementById('pSquareResult');
    resArea = document.getElementById('aSquareResult');
    document.getElementById('formSquare').reset();
    resPerimetro.innerHTML = "0 cm";
    resArea.innerHTML = "0 cm²";
}

function resetTriangle () {
    resPerimetro = document.getElementById('pTriangleResult');
    resArea = document.getElementById('aTriangleResult');
    document.getElementById('formTriangle').reset();
    resPerimetro.innerHTML = "0 cm";
    resArea.innerHTML = "0 cm²";
}

function resetCircle () {
    resPerimetro = document.getElementById('pCircleResult');
    resArea = document.getElementById('aCircleResult');
    document.getElementById('formCircle').reset();
    resPerimetro.innerHTML = "0 cm";
    resArea.innerHTML = "0 cm²";
}