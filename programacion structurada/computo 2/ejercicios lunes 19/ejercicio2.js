const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Ingrese cuántas horas duró cada préstamo: ', (input) => {
	const horasPorPrestamo = parseFloat(input);

	if (isNaN(horasPorPrestamo) || horasPorPrestamo < 0) {
		console.log('Por favor, ingrese una cantidad de horas válida.');
	} else {
		const tarifaPorHora = 2.25;
		let recaudacionTotal = 0;

		for (let prestamo = 1; prestamo <= 4; prestamo++) {
			recaudacionTotal += horasPorPrestamo * tarifaPorHora;
		}

		console.log(`Recaudación total: $${recaudacionTotal.toFixed(2)}`);
	}

	rl.close();
});
