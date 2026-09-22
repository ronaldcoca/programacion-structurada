const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el precio del producto ($): ', (precioInput) => {
  rl.question('Ingrese el porcentaje de descuento (%): ', (descuentoInput) => {
    const precio = parseFloat(precioInput);
    const porcentaje = parseFloat(descuentoInput);

    if (isNaN(precio) || isNaN(porcentaje)) {
      console.log('Error: Debe ingresar valores numéricos válidos.');
    } else {
      const montoDescuento = precio * (porcentaje / 100);
      const precioFinal = precio - montoDescuento;

      console.log('\n--- Detalle del Descuento ---');
      console.log(`Precio original: $${precio.toFixed(2)}`);
      console.log(`Descuento aplicado (${porcentaje}%): $${montoDescuento.toFixed(2)}`);
      console.log(`Precio final a pagar: $${precioFinal.toFixed(2)}`);
    }

    rl.close();
  });
});