import { describe, expect, it } from 'vitest';
import { calculateL } from '../calculateL';
import { calculateW } from '../calculateW';

describe('calculateW function', () => {
	it('should calculate W correctly', () => {
		const l1 = calculateL(10, 5, 4);
		const arrivalRate1 = 10;
		const l2 = calculateL(5, 15, 5);
		const arrivalRate2 = 5;

		expect(calculateW(l1, arrivalRate1)).toBeCloseTo(0.21739);
		expect(calculateW(l2, arrivalRate2)).toBeCloseTo(0.0667);
	});
});
