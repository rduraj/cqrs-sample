import { expect, test } from 'vitest';
import { Product } from '../Product';
import { NegativePriceNumberError } from '../errors/NegativePriceNumberError';

test('Cannot create product w/ negative price', () => {
  try {
    // given:
    new Product('0000', 'name', 'description', -1, 0);
  } catch (err) {
    // then:
    expect(err instanceof NegativePriceNumberError);
  }
});
