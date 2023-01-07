export function calculateLq(l: number, arrivalRate: number, serviceRate: number) {
	return l - arrivalRate / serviceRate;
}
