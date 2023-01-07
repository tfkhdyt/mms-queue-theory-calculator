import { describe, expect, it } from 'vitest';
import { calculatePq } from '../calculatePq';
import { test1 } from './constants';

describe('calculatePq function', () => {
	it('should calculate Pq correctly', () => {
		const pq = calculatePq(test1.arrivalRate, test1.serviceRate, test1.numberOfServers);

		expect(pq).toBeCloseTo(0.1735);
	});
});
