import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "vitest-axe";
import { describe, expect, it } from "vitest";
import { Button } from "../button";

expect.extend(toHaveNoViolations);

describe("Button Accessibility", () => {
  it("should not have any accessibility violations", async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should not have violations with different variants", async () => {
    const { container } = render(
      <div>
        <Button variant="default">Default</Button>
        <Button variant="destructive">Delete</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should not have violations when disabled", async () => {
    const { container } = render(<Button disabled>Disabled Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have proper ARIA attributes", () => {
    const { getByRole } = render(<Button aria-label="Submit form">Submit</Button>);
    const button = getByRole("button");
    expect(button).toHaveAttribute("aria-label", "Submit form");
  });
});
