import { describe, expect, it } from 'vitest';
import { calculateL } from '../calculateL';
import { calculateLq } from '../calculateLq';

describe('calculateLq function', () => {
	it('should calculate Lq correctly', () => {
		const l1 = calculateL(10, 5, 4);
		const arrivalRate1 = 10;
		const serviceRate1 = 5;

		const l2 = calculateL(5, 15, 5);
		const arrivalRate2 = 5;
		const serviceRate2 = 15;

		expect(calculateLq(l1, arrivalRate1, serviceRate1)).toBeCloseTo(0.1739);
		expect(calculateLq(l2, arrivalRate2, serviceRate2)).toBeCloseTo(-0.00033);
	});
});
