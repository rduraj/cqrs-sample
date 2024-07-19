import test from 'node:test'
import assert from 'node:assert'
import { Product } from '../Product'
import { NegativePriceNumberError } from '../NegativePriceNumberError'

test("Cannot create product w/ negative price", () => {
  try {
    new Product("name", "description", -1, 0)
  } catch(err) {
    assert(err instanceof NegativePriceNumberError)
  }
})
