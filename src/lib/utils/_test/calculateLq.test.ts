import { describe, expect, it } from 'vitest';
import { calculateL } from '../calculateL';
import { calculateLq } from '../calculateLq';
import { test1, test2 } from './constants';

describe('calculateLq function', () => {
	it('should calculate Lq correctly', () => {
		const l1 = calculateL(test1.arrivalRate, test1.serviceRate, test1.numberOfServers);
		const l2 = calculateL(test2.arrivalRate, test2.serviceRate, test2.numberOfServers);

		const lq1 = calculateLq(l1, test1.arrivalRate, test1.serviceRate);
		const lq2 = calculateLq(l2, test2.arrivalRate, test2.serviceRate);

		expect(lq1).toBeCloseTo(0.1739);
		expect(lq2).toBeCloseTo(-0.00033);
	});
});
