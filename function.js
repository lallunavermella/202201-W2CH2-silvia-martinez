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
