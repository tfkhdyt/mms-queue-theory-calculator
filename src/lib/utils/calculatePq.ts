import { calculatePo } from './calculatePo';
import { factorial } from './factorial';

export function calculatePq(arrivalRate: number, serviceRate: number, numberOfServices: number) {
	const po = calculatePo(arrivalRate, serviceRate, numberOfServices);
	const a = (1 / factorial(4)) * (arrivalRate / serviceRate) ** numberOfServices;
	const b = (numberOfServices * serviceRate) / (numberOfServices * serviceRate - arrivalRate);
	const result = a * b * po;

	return result;
}
