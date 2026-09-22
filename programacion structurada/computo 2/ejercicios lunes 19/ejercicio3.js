const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el gasto diario en transporte ($): ', (input) => {
    const gastoDiario = parseFloat(input);

    if (isNaN(gastoDiario) || gastoDiario < 0) {
        console.log('Por favor, ingrese un monto válido.');
    } else {
        let gastoAcumulado = 0; // Variable acumuladora

        console.log('\n--- Seguimiento Diario ---');
        
        // Bucle for para los 6 días
        for (let dia = 1; dia <= 6; dia++) {
            gastoAcumulado += gastoDiario; // Suma acumulativa
            console.log(`Día ${dia}: Gasto acumulado = $${gastoAcumulado.toFixed(2)}`);
        }

        console.log('\n--- Resultado Final ---');
        console.log(`El gasto total al cabo de 6 días es: $${gastoAcumulado.toFixed(2)}`);
    }

    rl.close();
});