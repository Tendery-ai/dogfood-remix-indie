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

test("formatUpdatedAt formats a Date into a short label", () => {
  expect(formatUpdatedAt(new Date("2026-08-13T12:00:00Z"))).toBe("Aug 13, 2026");
});

test("formatUpdatedAt formats a serialized date string", () => {
  expect(formatUpdatedAt("2026-08-13T12:00:00.000Z")).toBe("Aug 13, 2026");
});

test("formatUpdatedAt returns an empty string for invalid dates", () => {
  expect(formatUpdatedAt("not-a-date")).toBe("");
});
