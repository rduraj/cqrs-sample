import { test, expect } from 'vitest';
import { HttpStatusCode } from 'interface/http/HttpStatusCode.ts';
const BASE_URL = 'http://localhost:8002';

test('should create new product on POST /products', async () => {
  const request = await fetch(`${BASE_URL}/products`, {
    method: 'POST'
  });

  expect(request.status, HttpStatusCode.SUCCESS);
});
