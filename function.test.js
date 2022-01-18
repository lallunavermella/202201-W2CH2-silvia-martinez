function strictEquals(a, b) {
  let equals = Object.is(a, b);
  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    equals = false;
  }
  if (Object.is(a, 0) && Object.is(b, -0)) {
    equals = true;
  }
  if (Object.is(a, -0) && Object.is(b, 0)) {
    equals = true;
  }

  return equals;
}

describe("Given a strictEquals function", () => {
  describe("When it receives a=1 and b=1", () => {
    test("Then it should return true", () => {
      const a = 1;
      const b = 1;

      const functionStrictEquals = strictEquals(a, b);

      const expectedResult = true;

      expect(functionStrictEquals).toBe(expectedResult);
    });
  });
  describe("When it receives a=NaN and b=NaN", () => {
    test("Then it should return false", () => {
      const a = NaN;
      const b = NaN;

      const functionStrictEquals = strictEquals(a, b);

      const expectedResult = false;

      expect(functionStrictEquals).toBe(expectedResult);
    });
  });
  describe("When it receives a=0 and b=-0", () => {
    test("Then it should return truee", () => {
      const a = 0;
      const b = -0;

      const functionStrictEquals = strictEquals(a, b);

      const expectedResult = true;

      expect(functionStrictEquals).toBe(expectedResult);
    });
  });
  describe("When it receives a=-0 and b=0", () => {
    test("Then it should return truee", () => {
      const a = -0;
      const b = 0;

      const functionStrictEquals = strictEquals(a, b);

      const expectedResult = true;

      expect(functionStrictEquals).toBe(expectedResult);
    });
  });
  describe("When it receives a=1 and b='1'", () => {
    test("Then it should return false", () => {
      const a = 1;
      const b = "1";

      const functionStrictEquals = strictEquals(a, b);

      const expectedResult = false;

      expect(functionStrictEquals).toBe(expectedResult);
    });
  });
  describe("When it receives a=true and b=false", () => {
    test("Then it should return false", () => {
      const a = true;
      const b = false;

      const functionStrictEquals = strictEquals(a, b);

      const expectedResult = false;

      expect(functionStrictEquals).toBe(expectedResult);
    });
  });
  describe("When it receives a=false and b=false", () => {
    test("Then it should return true", () => {
      const a = false;
      const b = false;

      const functionStrictEquals = strictEquals(a, b);

      const expectedResult = true;

      expect(functionStrictEquals).toBe(expectedResult);
    });
  });
  describe("When it receives a='water' and b='oil'", () => {
    test("Then it should return false", () => {
      const a = "water";
      const b = "oil";

      const functionStrictEquals = strictEquals(a, b);

      const expectedResult = false;

      expect(functionStrictEquals).toBe(expectedResult);
    });
  });
});
