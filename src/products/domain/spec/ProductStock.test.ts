import { expect, test } from 'vitest';
import { ProductStock } from '../ProductStock';
import { DecreasingStockBelowZeroError } from 'products/domain/errors/DecreasingStockBelowZeroError';

test('can increase product stock', () => {
  // when:
  const stock = new ProductStock(1);

  // given:
  const updatedStock = stock.increase(5);

  // then:
  expect(updatedStock.stock, 6);
});

test('can decrease product stock', () => {
  // when:
  const stock = new ProductStock(1);

  // given:
  const updatedStock = stock.decrease(1);

  // then:
  expect(updatedStock.stock, 0);
});

test('prevent from decreasing below zero', () => {
  // when:
  const stock = new ProductStock(1);

  // then:
  try {
    stock.decrease(2);
  } catch (e) {
    expect(e instanceof DecreasingStockBelowZeroError);
  }
});
