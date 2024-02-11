// Page.test.tsx
import { describe, expect, vi, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

vi.mock("next/navigation", async () => {
  const actual = await vi.importActual("next/navigation");
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
      replace: vi.fn(),
    })),
    useSearchParams: vi.fn(() => ({
      // get: vi.fn(),
    })),
    usePathname: vi.fn(),
  };
});

describe("Page", () => {
  it("renders home", () => {
    render(<Page />);
    expect(
      screen.getByRole("heading", { level: 1, name: "home" })
    ).toBeDefined();
  });
  it("renders Dashboard component", () => {
    render(<Page />);
    const dashboardElements = screen.getAllByTestId("dashboard");
    expect(dashboardElements.length).toBeGreaterThan(0);
  });
});
