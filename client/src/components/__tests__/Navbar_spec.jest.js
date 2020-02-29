import React from "react";
import { render } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("renders", () => {
    const navbar = render(<Navbar />);

    expect(navbar).toBeTruthy();
  });

  it("has some text", () => {
    const { getByText } = render(<Navbar />);

    expect(getByText("This is the appbar")).toBeInTheDocument();
  });
});
