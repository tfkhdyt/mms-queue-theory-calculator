export function calculateRho(arrivalRate: number, serviceRate: number, numberOfServices: number) {
	return arrivalRate / (serviceRate * numberOfServices);
}
