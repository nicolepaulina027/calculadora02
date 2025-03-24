function sumar(a, b) {
    return a + b;
}

function restar(a, b)  {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (a === 0) {
        return "No se puede dividir por cero"
    }
    return a / b;
}

function calcular() {
    let continuar = true; 

    while (continuar) {
        const opcion = prompt(
            "calculadora\nSeleccione una opcion:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir"
        );

        if (opcion === '5') {
            alert("Gracias por usar la calculadora!");
            continuar = false;
            break;
        }

        const num1 = parseFloat(prompt("Ingrese el primer numero:")); 
        const num2 = parsefloat(prompt("Ingrese el segundo numero"));

        if(isNaN(num1) || isNaN(num2)) {
            alert("Por favor, ingrese numeros validos.");
            continue;
        }

        let resultado;

        switch (opcion) {
            case '1':
                resultado = sumar(num1, num2);
            break;
            case '2':
                resultado = restar(num1, num2);
            break;
            case '3':
                resultado = multiplicar(num1, num2);
                break;
                case '4':
                    resultado = dividir(num1, num2);
                    break;
                dafault:
                alert("opcion no valida. Intente de nuevo");
                continue;
        }

        alert('El resultado es; ${resultado}');
    }
}

console.log("La calculadora se ejecutara mediante la consola.");
calcular(); 



