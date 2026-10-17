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

test("formatDate formats a Date into a short readable label", () => {
  expect(formatDate(new Date("2026-08-10T12:00:00.000Z"))).toBe("Aug 10, 2026");
});

test("formatDate accepts serialized ISO date strings", () => {
  expect(formatDate("2024-01-15T00:00:00.000Z")).toBe("Jan 15, 2024");
});

test("formatDate returns an empty string for invalid dates", () => {
  expect(formatDate("not-a-date")).toBe("");
});
