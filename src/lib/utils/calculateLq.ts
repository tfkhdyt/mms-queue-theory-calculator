import { fixed } from "./fixed";

export function calculateLq(l: number, arrivalRate: number, serviceRate: number) {
	const result = fixed(l) - fixed(arrivalRate) / fixed(serviceRate);
	return result;
}

