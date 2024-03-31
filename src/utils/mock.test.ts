import { assert, expect, test, vi } from "vitest";
import { mockTestFunc } from "./mock";

test("mock test1", async () => {
  const myMockFn = vi.fn(() => "original");

  // We await this call since the callback is async
  await myMockFn.withImplementation(
    () => "tempd",
    async () => {
      myMockFn(); // 'temp'
    }
  );

  myMockFn(); // 'original'
});

test("mock test2", () => {
  // Define mock function
  const getApples = vi.fn();
  // call mock function
  getApples();
  // check if mock function is called
  expect(getApples).toHaveBeenCalled();
});

test("mock test3", () => {
  const getProduct = vi.fn((product: string) => ({ product }));

  getProduct("apples");

  expect(getProduct).toHaveReturnedWith({ product: "apples" });
});

test("mock test4", () => {
  const getApples = vi.fn(() => 0);
  getApples();
  expect(getApples).toHaveReturnedWith(0);

  getApples.mockReturnValueOnce(5);
  getApples();
  expect(getApples).toHaveNthReturnedWith(2, 5);
});

test("mockTestFunc adds two numbers correctly", () => {
  const mockFn = vi.fn(mockTestFunc);

  const result1 = mockFn(2, 3);
  expect(result1).toBe(5);
  expect(mockFn).toHaveBeenCalledWith(2, 3);
  expect(mockFn).toHaveBeenCalledTimes(1);

  const result2 = mockFn(10, 20);
  expect(result2).toBe(30);
  expect(mockFn).toHaveBeenCalledWith(10, 20);
  expect(mockFn).toHaveBeenCalledTimes(2);
});
