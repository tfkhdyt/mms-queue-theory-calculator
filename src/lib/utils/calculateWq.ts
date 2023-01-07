import { fixed } from './fixed';

export function calculateWq(w: number, serviceRate: number) {
	return fixed(w, 6) - serviceRate ** -1;
}
