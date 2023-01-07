import { describe, expect, it } from 'vitest';
import { calculatePo } from '../calculatePo';

describe('calculatePo function', () => {
	it('calculate Po correctly', () => {
		const po1 = calculatePo(10, 5, 4);
		const po2 = calculatePo(5, 15, 5);
		expect(po1).toBeCloseTo(0.1304);
		expect(po2).toBeCloseTo(0.7165);
	});
});
