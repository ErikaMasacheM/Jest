describe('set 1', () => {
  beforeAll(() => {
    console.log('before all');
  });
  afterAll(() => {
    console.log('afterAll');
  });
  beforeEach(()=>{
    console.log('before each');
  });
  test('case 1', () => {
    console.log('caso 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('caso 2');
    expect(1 + 2).toBe(3);
  });

  describe('set 2', () => {
    beforeAll(() => {
      console.log('se ejecuta antes del segundo set');
    });
    test('caso 3', () => {
      console.log('caso 3');
      expect(1 + 4).toBe(5);
    });
    test('caso 4', () => {
      console.log('caso 4');
      expect(1 + 4).toBe(5);
    });
  });
});
