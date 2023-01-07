import { calculatePo } from './calculatePo';
import { factorial } from './factorial';

export function calculateL(arrivalRate: number, serviceRate: number, numberOfServers: number) {
	const a = arrivalRate * serviceRate * (arrivalRate / serviceRate) ** numberOfServers;
	const b = factorial(numberOfServers - 1) * (numberOfServers * serviceRate - arrivalRate) ** 2;
	const po = calculatePo(arrivalRate, serviceRate, numberOfServers);
	const c = arrivalRate / serviceRate;

	const result = (a / b) * po + c;

	return result;
}
