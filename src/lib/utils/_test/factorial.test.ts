import { describe, expect, it } from 'vitest';
import { factorial } from '../factorial';

describe('factorial function', () => {
	it('it should factorialize correctly', () => {
		expect(factorial(1)).toEqual(1);
		expect(factorial(3)).toEqual(6);
		expect(factorial(5)).toEqual(120);
	});
});
