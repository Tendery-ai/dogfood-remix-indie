import { truncate, validateEmail } from "./utils";

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

test("truncate returns short text unchanged", () => {
  expect(truncate("A short note")).toBe("A short note");
});

test("truncate collapses surrounding and inner whitespace", () => {
  expect(truncate("  hello \n\t world  ")).toBe("hello world");
});

test("truncate shortens long text and appends an ellipsis", () => {
  const result = truncate("abcdefghij", 5);
  expect(result).toBe("abcde…");
  expect(result.length).toBe(6);
});
