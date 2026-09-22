const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la cantidad en dólares ($): ', (dolaresInput) => {
  rl.question('Ingrese el tipo de cambio del euro (ej. 0.88): ', (tipoCambioInput) => {
    const dolares = parseFloat(dolaresInput);
    const tipoCambio = parseFloat(tipoCambioInput);

    if (isNaN(dolares) || isNaN(tipoCambio)) {
      console.log('Error: Ingrese montos y tasas de cambio válidos.');
    } else {
      const euros = dolares * tipoCambio;
      console.log(`\n$${dolares.toFixed(2)} USD equivalen a €${euros.toFixed(2)} EUR (Tasa: ${tipoCambio}).`);
    }

    rl.close();
  });
});