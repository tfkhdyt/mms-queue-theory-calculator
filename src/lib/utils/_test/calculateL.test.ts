import { describe, expect, it } from 'vitest';
import { calculateL } from '../calculateL';

describe('calculateL function', () => {
	it('should calculateL correctly', () => {
		const l1 = calculateL(10, 5, 4);
		const l2 = calculateL(5, 15, 5);

		expect(l1).toBeCloseTo(2.1739);
		expect(l2).toBeCloseTo(0.333);
	});
});
