import { assert, expect, test, vi } from "vitest";
import { sum } from "./sum";

test("sumメソッドの返り値が正しいかどうか", () => {
  expect(sum(1, 2)).toBe(3);
});

test("decimals are rounded to 5 after the point", () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
  expect(0.2 + 0.1).not.toBeCloseTo(0.3, 50);
});

// test("assert", () => {
//   assert("foo" !== "bar", "foo should not be equal to bar");
// });

// test("assert fail demo", () => {
//   assert.fail("error message on failure");
//   assert.fail("foo", "bar", "foo is not bar", "===");
// });

const error = null;

test("assert.isNull", () => {
  assert.isNull(error, "error is null");
});

test("async callback", async () => {
  const myMockFn = vi.fn(() => "original");

  // We await this call since the callback is async
  await myMockFn.withImplementation(
    () => "temp",
    async () => {
      myMockFn(); // 'temp'
    }
  );

  myMockFn(); // 'original'
});
