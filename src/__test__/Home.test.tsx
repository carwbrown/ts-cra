import React from "react";
import { render } from "@testing-library/react";
import Heroes from "../app/containers/Heroes";

test("renders main component", () => {
  const { getByText } = render(<Heroes />);
  const linkElement = getByText("Heroes");
  expect(linkElement).toBeInTheDocument();
});
