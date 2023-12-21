
const calculadora = (num1, num2, operacion) => {
    let resultado;

    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            resultado = "operación no valida"    
    }

    return resultado;
};

console.log(calculadora(5, 3, "+"));
console.log(calculadora(10, 4, "-"));
console.log(calculadora(15, 2, "*"));
console.log(calculadora(8, 2, "/"));







function suma (num1, num2){
    return num1 + num2;
};

console.log (suma (10, 10))
console.log (suma (4, 16))
console.log (suma (8, 12))