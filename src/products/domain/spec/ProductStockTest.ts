import test from 'node:test'
import assert from 'node:assert'
import { ProductStock } from '../ProductStock';
import { DecreasingStockBelowZeroError } from '../DecreasingStockBelowZeroError';

test('can increase product stock', () => {
  // when:
  const stock = new ProductStock(1)

  // given:
  const updatedStock = stock.increase(5)

  // then:
  assert.strictEqual(updatedStock.stock, 6)
});

test('can decrease product stock', () => {
  // when:
  const stock = new ProductStock(1)

  // given:
  const updatedStock = stock.decrease(1)

  // then:
  assert.strictEqual(updatedStock.stock, 0)
});

test('prevent from decreasing below zero', () => {
  // when:
  const stock = new ProductStock(1)

  // then:
  try {
    stock.decrease(2)
  } catch (e) {
    assert(e instanceof DecreasingStockBelowZeroError)
  }
});
