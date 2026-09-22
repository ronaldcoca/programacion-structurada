const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese cualquier dato: ', (datoOriginal) => {
  // Conversión con parseFloat()
  const resultadoParse = parseFloat(datoOriginal);

  // Comprobación con isNaN()
  const esNaN = isNaN(resultadoParse);

  console.log('\n--- Resultados de la Validación ---');
  console.log(`1. Dato ingresado por el usuario: "${datoOriginal}"`);
  console.log(`2. Resultado de parseFloat(): ${resultadoParse}`);
  console.log(`3. Resultado retornado por isNaN(): ${esNaN}`);

  if (esNaN) {
    console.log('-> El dato ingresado NO es un número válido.');
  } else {
    console.log('-> El dato ingresado es o contiene un número válido.');
  }

  rl.close();
});