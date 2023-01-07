import { describe, expect, it } from 'vitest';
import { calculateL } from '../calculateL';
import { calculateW } from '../calculateW';
import { calculateWq } from '../calculateWq';
import { test1, test2 } from './constants';

describe('calculateWq function', () => {
	it('should calculate Wq correctly', () => {
		const l1 = calculateL(test1.arrivalRate, test1.serviceRate, test1.numberOfServers);
		const w1 = calculateW(l1, test1.arrivalRate);
		const wq1 = calculateWq(w1, test1.serviceRate);

		const l2 = calculateL(test2.arrivalRate, test2.serviceRate, test2.numberOfServers);
		const w2 = calculateW(l2, test2.arrivalRate);
		const wq2 = calculateWq(w2, test2.serviceRate);

		expect(wq1).toBeCloseTo(0.01739);
		expect(wq2).toBeCloseTo(1 / 30000);
	});
});
