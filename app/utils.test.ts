import { countWords, validateEmail } from "./utils";

test("validateEmail returns false for non-emails", () => {
  expect(validateEmail(undefined)).toBe(false);
  expect(validateEmail(null)).toBe(false);
  expect(validateEmail("")).toBe(false);
  expect(validateEmail("not-an-email")).toBe(false);
  expect(validateEmail("n@")).toBe(false);
});

test("validateEmail returns true for emails", () => {
  expect(validateEmail("kody@example.com")).toBe(true);
});

test("countWords returns 0 for empty or whitespace-only strings", () => {
  expect(countWords("")).toBe(0);
  expect(countWords("   ")).toBe(0);
  expect(countWords("\n\t  ")).toBe(0);
});

test("countWords counts whitespace-separated words", () => {
  expect(countWords("hello")).toBe(1);
  expect(countWords("hello world")).toBe(2);
  expect(countWords("  the quick   brown fox  ")).toBe(4);
  expect(countWords("line one\nline two")).toBe(4);
});
