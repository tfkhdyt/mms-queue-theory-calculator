import { describe, expect, it } from 'vitest';
import { calculateL } from '../calculateL';
import { calculateLq } from '../calculateLq';
import { test1, test2 } from './constants';

describe('calculateLq function', () => {
	it('should calculate Lq correctly', () => {
		const l1 = calculateL(test1.arrivalRate, test1.serviceRate, test1.numberOfServers);
		const l2 = calculateL(test2.arrivalRate, test2.serviceRate, test2.numberOfServers);

		expect(calculateLq(l1, test1.arrivalRate, test1.serviceRate)).toBeCloseTo(0.1739);
		expect(calculateLq(l2, test2.arrivalRate, test2.serviceRate)).toBeCloseTo(-0.00033);
	});
});
