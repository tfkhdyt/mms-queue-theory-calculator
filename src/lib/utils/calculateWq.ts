export function calculateWq(w: number, serviceRate: number) {
	return w - serviceRate ** -1;
}
