import test from 'node:test';
import assert from 'node:assert';
import { Product } from '../Product';
import { NegativePriceNumberError } from 'products/domain/errors/NegativePriceNumberError';

test('Cannot create product w/ negative price', () => {
  // given:
  const product = new Product();

  // then:
  try {
    product.from('0000', 'name', 'description', -1, 0);
  } catch (err) {
    assert(err instanceof NegativePriceNumberError);
  }
});
