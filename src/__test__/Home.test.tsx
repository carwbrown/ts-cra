import React from "react";
import { render } from "@testing-library/react";
import Home from "../app/Home";

test("renders main component", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText("Main Page");
  expect(linkElement).toBeInTheDocument();
});
