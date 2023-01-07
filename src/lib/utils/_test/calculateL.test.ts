import { describe, expect, it } from 'vitest';
import { calculateL } from '../calculateL';
import { test1, test2 } from './constants';

describe('calculateL function', () => {
	it('should calculateL correctly', () => {
		const l1 = calculateL(test1.arrivalRate, test1.serviceRate, test1.numberOfServers);
		const l2 = calculateL(test2.arrivalRate, test2.serviceRate, test2.numberOfServers);

		expect(l1).toBeCloseTo(2.1739);
		expect(l2).toBeCloseTo(0.333);
	});
});
