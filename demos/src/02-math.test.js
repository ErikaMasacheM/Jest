const { sum, mul, div } = require('./02-math');

test('suma 1 + 3 debe ser 4', () => {
  expect(sum(1, 3)).toBe(4);
});

test('suma 1 * 3 debe ser 3', () => {
  const multi = mul(1, 3);
  expect(multi).toBe(3);
});

test('suma 9 / 3 debe ser 3', () => {
  const rta = div(9, 3);
  expect(rta).toBe(3);
  const rta2 = div(9, 2);
  expect(rta2).toBe(4.5);
});

test('suma 9 / 0 debe ser NULL', () => {
  const rta3 = div(9, 0);
  expect(rta3).toBeNull();
});
