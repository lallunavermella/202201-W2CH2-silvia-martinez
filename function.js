function strictEquals(a, b) {
  let equals = Object.is(a, b);
  return equals;
}
