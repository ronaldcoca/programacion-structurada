const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Nombre del empleado: ', (nombre) => {
  rl.question('Horas trabajadas en la semana: ', (horasInput) => {
    rl.question('Pago por hora: ', (pagoInput) => {
      // Conversión de tipos con funciones globales
      const horas = parseInt(horasInput);
      const pagoPorHora = parseFloat(pagoInput);

      if (isNaN(horas) || isNaN(pagoPorHora)) {
        console.log('Error: Las horas y el pago deben ser números válidos.');
      } else {
        const salarioSemanal = horas * pagoPorHora;
        console.log('\n--- Resumen de Salario ---');
        console.log(`Empleado: ${nombre}`);
        console.log(`Horas trabajadas: ${horas}`);
        console.log(`Pago por hora: $${pagoPorHora.toFixed(2)}`);
        console.log(`Salario semanal total: $${salarioSemanal.toFixed(2)}`);
      }

      rl.close();
    });
  });
});