const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la longitud en metros: ', (metrosInput) => {
  const metros = parseFloat(metrosInput);

  if (isNaN(metros)) {
    console.log('Error: Por favor ingrese un número válido.');
  } else {
    const centimetros = metros * 100;
    console.log(`\n${metros} metros equivalen a ${centimetros} centímetros.`);
  }

  rl.close();
});