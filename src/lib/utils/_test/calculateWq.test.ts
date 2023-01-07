import { describe, expect, it } from 'vitest';
import { calculateL } from '../calculateL';
import { calculateLq } from '../calculateLq';
import { calculateWq } from '../calculateWq';
import { test1, test2 } from './constants';

describe('calculateWq function', () => {
	it('should calculate Wq correctly', () => {
		const l1 = calculateL(test1.arrivalRate, test1.serviceRate, test1.numberOfServers);
		const lq1 = calculateLq(l1, test1.arrivalRate, test1.serviceRate);
		const wq1 = calculateWq(lq1, test1.arrivalRate);

		const l2 = calculateL(test2.arrivalRate, test2.serviceRate, test2.numberOfServers);
		const lq2 = calculateLq(l2, test2.arrivalRate, test2.serviceRate);
		const wq2 = calculateWq(lq2, test2.arrivalRate);

		expect(wq1).toBeCloseTo(0.01739);
		expect(wq2).toBeCloseTo(1 / 30000);
	});
});
