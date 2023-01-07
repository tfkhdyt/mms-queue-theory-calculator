import { factorial } from './factorial';

export function calculatePo(arrivalRate: number, serviceRate: number, numberOfServers: number) {
	const a = sigma(arrivalRate, serviceRate, numberOfServers);
	const b =
		(1 / factorial(numberOfServers)) *
		(arrivalRate / serviceRate) ** numberOfServers *
		((numberOfServers * serviceRate) / (numberOfServers * serviceRate - arrivalRate));

	const result = (a + b) ** -1;
	return result;
}

function sigma(arrivalRate: number, serviceRate: number, numberOfServers: number) {
	let result = 1;
	for (let i = 1; i < numberOfServers; i++) {
		result += (1 / factorial(i)) * (arrivalRate / serviceRate) ** i;
	}
	return result;
}
