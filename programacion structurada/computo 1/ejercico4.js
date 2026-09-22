const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el precio unitario del producto ($): ', (precioInput) => {
  rl.question('Ingrese la cantidad a comprar: ', (cantidadInput) => {
    const precioUnitario = parseFloat(precioInput);
    const cantidad = parseInt(cantidadInput);

    if (isNaN(precioUnitario) || isNaN(cantidad)) {
      console.log('Error: Asegúrese de ingresar datos numéricos correctos.');
    } else {
      const totalPagar = precioUnitario * cantidad;
      console.log('\n--- Resumen de Compra ---');
      console.log(`Precio unitario: $${precioUnitario.toFixed(2)}`);
      console.log(`Cantidad: ${cantidad}`);
      console.log(`Total a pagar: $${totalPagar.toFixed(2)}`);
    }

    rl.close();
  });
});