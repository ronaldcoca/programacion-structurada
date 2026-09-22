const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Ingrese cuánto ahorra por día: $', (input) => {
	const ahorroDiario = parseFloat(input);

	if (isNaN(ahorroDiario) || ahorroDiario < 0) {
		console.log('Por favor, ingrese una cantidad válida.');
	} else {
		let totalAhorrado = 0;

		for (let dia = 1; dia <= 5; dia++) {
			totalAhorrado += ahorroDiario;
		}

		console.log(`Total ahorrado al finalizar los 5 días: $${totalAhorrado.toFixed(2)}`);
	}

	rl.close();
});
