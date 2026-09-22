const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la cantidad de entradas vendidas diariamente: ', (input) => {
    const entradasDiarias = parseInt(input);

    if (isNaN(entradasDiarias) || entradasDiarias < 0) {
        console.log('Por favor, ingrese un número entero válido.');
    } else {
        const totalEntradas = entradasDiarias * 5;
        console.log(`\n--- Resultados ---`);
        console.log(`Entradas vendidas por día: ${entradasDiarias}`);
        console.log(`Días de venta: 5`);
        console.log(`Total de entradas vendidas: ${totalEntradas}`);
    }

    rl.close();
});