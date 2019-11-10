import Button from "./Button";
import React from "react";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const { getByText } = render(<Button>Button text</Button>);
  expect(getByText("Button text")).toBeDefined();
});
