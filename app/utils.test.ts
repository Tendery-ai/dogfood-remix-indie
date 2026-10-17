import { formatDate, validateEmail } from "./utils";

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

test("formatDate formats an ISO date string into a short label", () => {
  expect(formatDate("2026-08-10T00:00:00.000Z")).toBe("Aug 10, 2026");
});

test("formatDate formats a Date object into a short label", () => {
  expect(formatDate(new Date("2026-01-05T12:34:56.000Z"))).toBe("Jan 5, 2026");
});
