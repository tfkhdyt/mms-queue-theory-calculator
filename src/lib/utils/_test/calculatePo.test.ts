import { describe, expect, it } from 'vitest';
import { calculatePo } from '../calculatePo';
import { test1, test2 } from './constants';

describe('calculatePo function', () => {
	it('calculate Po correctly', () => {
		const po1 = calculatePo(test1.arrivalRate, test1.serviceRate, test1.numberOfServers);
		const po2 = calculatePo(test2.arrivalRate, test2.serviceRate, test2.numberOfServers);

		expect(po1).toBeCloseTo(0.1304);
		expect(po2).toBeCloseTo(0.7165);
	});
});
