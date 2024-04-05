import { assert, expect, test } from "vitest";
import { sum } from "./sum";

test("sumメソッドの返り値が正しいかどうか", () => {
  expect(sum(1, 2)).toBe(3);
});

test("decimals are rounded to 5 after the point", () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
  expect(0.2 + 0.1).not.toBeCloseTo(0.3, 50);
  const input = Math.sqrt(4);

  expect(input).to.equal(2); // chai API
  expect(input).toBe(2); // jest API
});

test("assert fail demo", () => {
  assert.fail("error message on failure");
});

const error = null;

test("assert.isNull", () => {
  assert.isNull(error, "error is null");
});

test("expect.soft test", () => {
  expect.soft(1 + 1).toBe(3);
  expect.soft(1 + 2).toBe(4);
});

test("expect.soft test", () => {
  expect.soft(1 + 1).toBe(3);
  expect(1 + 2).toBe(4);
  expect.soft(1 + 3).toBe(5);
});
