import { formatUpdatedAt, validateEmail } from "./utils";

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

test("formatUpdatedAt formats a valid ISO date string", () => {
  const value = "2026-08-13T10:20:30.000Z";
  expect(formatUpdatedAt(value)).toBe(
    new Date(value).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  );
});

test("formatUpdatedAt returns 'unknown' for an invalid date string", () => {
  expect(formatUpdatedAt("not-a-date")).toBe("unknown");
});
