import { describe, expect, it } from 'vitest';
import { calculateRho } from '../calculateRho';
import { test1, test2 } from './constants';

describe('calculateRho function', () => {
	it('should calculate Rho correctly', () => {
		const rho1 = calculateRho(test1.arrivalRate, test1.serviceRate, test1.numberOfServers);
		const rho2 = calculateRho(test2.arrivalRate, test2.serviceRate, test2.numberOfServers);

		expect(rho1).toBeCloseTo(0.5);
		expect(rho2).toBeCloseTo(0.067);
	});
});
