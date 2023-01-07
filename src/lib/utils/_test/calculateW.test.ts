import { describe, expect, it } from 'vitest';
import { calculateL } from '../calculateL';
import { calculateW } from '../calculateW';
import { test1, test2 } from './constants';

describe('calculateW function', () => {
	it('should calculate W correctly', () => {
		const l1 = calculateL(test1.arrivalRate, test1.serviceRate, test1.numberOfServers);
		const l2 = calculateL(test2.arrivalRate, test2.serviceRate, test2.numberOfServers);

		expect(calculateW(l1, test1.arrivalRate)).toBeCloseTo(0.21739);
		expect(calculateW(l2, test2.arrivalRate)).toBeCloseTo(0.0667);
	});
});
